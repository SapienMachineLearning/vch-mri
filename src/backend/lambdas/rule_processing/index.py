import json
import time 
import psycopg2 
import logging
import boto3
import postgresql

logger = logging.getLogger()
logger.setLevel(logging.INFO)
    
insert_cmd = """
INSERT INTO data_request(id, info, ai_p5_flag) VALUES 
(%s, %s, %s)
ON CONFLICT (id) DO UPDATE
SET info = excluded.info, 
ai_p5_flag = excluded.ai_p5_flag
RETURNING state;
"""

update_ai_priority = """
UPDATE data_request
SET ai_priority = %s, ai_rule_id = NULL, ai_contrast = NULL,
    state = 
        CASE
            WHEN state != 'labelled_priority' THEN 'ai_priority_processed'
            ELSE state
        END
WHERE id = %s; 
"""

update_cmd = """
UPDATE data_request
SET %s ai_rule_id = r.id , ai_priority = r.priority, ai_contrast = r.contrast, error = NULL
FROM mri_rules r WHERE r.id = (
SELECT id
FROM mri_rules, to_tsquery('ths_search','%s') query 
WHERE info_weighted_tk @@ query
AND active = 't'
"""

update_cmd_end = """
ORDER BY ts_rank_cd('{0.1, 0.2, 0.4, 1.0}',info_weighted_tk, query, 1) DESC LIMIT 1)
AND data_request.id = '%s'
RETURNING r.id, r.body_part, r.priority, r.contrast, data_request.ai_p5_flag, r.info;
"""

update_cmd_end_union = """
ORDER BY priority DESC LIMIT 1)
AND data_request.id = '%s'
RETURNING r.id, r.body_part, r.priority, r.contrast, data_request.ai_p5_flag, r.info;
"""

# set_rule_candidates_cmd2 = """
#     UPDATE data_request
#     SET ai_rule_candidates =
#     (select array (SELECT id
#     FROM mri_rules, to_tsquery('ths_search','%s') query
#     WHERE info_weighted_tk @@ query
#     AND active = 't'
#     %s
#     ORDER BY ts_rank_cd('{0.1, 0.2, 0.4, 1.0}',info_weighted_tk, query, 1) DESC))
#     WHERE data_request.id = '%s'
#     """

get_rule_candidates_cmd = """
    select array (SELECT id
    FROM mri_rules, to_tsquery('ths_search','%s') query 
    WHERE info_weighted_tk @@ query
    AND active = 't'
    %s
    ORDER BY ts_rank_cd('{0.1, 0.2, 0.4, 1.0}',info_weighted_tk, query, 1) DESC)
    """

get_rule_candidates_cmd_union = """
    select array (SELECT id
    FROM mri_rules, to_tsquery('ths_search','%s') query 
    WHERE info_weighted_tk @@ query
    AND active = 't'
    %s
    ORDER BY priority DESC)
    """

# get_rule_candidates_cmd_union = """
#     SELECT id, priority, contrast, ts_rank_cd('{0.1, 0.2, 0.4, 1.0}',bp_tk, query, 1)
#     FROM mri_rules, to_tsquery('ths_search','%s') query
#     WHERE bp_tk @@ query
#     AND active = 't'
#     %s
#     ORDER BY priority DESC
#     """

set_rule_candidates_cmd = """
    UPDATE data_request
    SET ai_rule_candidates = ARRAY%s
    WHERE data_request.id = '%s'
    """

update_rule_priority_cmd = """
UPDATE data_request
SET state = 'ai_priority_processed', ai_rule_id = r.id , ai_priority = r.priority, ai_contrast = r.contrast
FROM mri_rules r WHERE r.id = (
SELECT id
FROM mri_rules, to_tsquery('ths_search','%s') query 
WHERE info_weighted_tk @@ query
AND active = 't'
"""

update_cmd_end = """
ORDER BY ts_rank_cd('{0.1, 0.2, 0.4, 1.0}',info_weighted_tk, query, 1) DESC LIMIT 1)
AND data_request.id = '%s'
RETURNING r.id, r.body_part, r.priority, r.contrast, data_request.ai_p5_flag, r.info;
"""
update_tags = """
UPDATE data_request
SET ai_tags = array_tag FROM (
SELECT array_agg(tag) AS array_tag FROM (
SELECT tag from specialty_tags
WHERE LOWER(%s) ~* LOWER(tag)) AS x) AS y
where id = %s
RETURNING ai_tags;
"""

insert_history_cmd = """
   INSERT INTO request_history(id_data_request, history_type, description, mod_info)
   VALUES (%s, 'ai_result', %s, %s)
   RETURNING history_type, description, mod_info, created_at
   """

def searchAnatomy(data, union = False):
    anatomy_list = []
    for val in data: 
        # for any values that have multiple words (tsquery limitation)
        val = val.replace(' ', ' | ')
        anatomy_list.append(val)

    body_parts = ' | '.join(anatomy_list)
    prefix = "AND"
    if union:
        prefix = "OR"
    anatomy_cmd = prefix + " bp_tk @@ to_tsquery('ths_search','%s')" % body_parts
    return anatomy_cmd 


def searchText(data, *data_keys):
    value_set = set()
    for key in data_keys: 
        for val in data[key]:
            for word in val.split(): 
                value_set.add(word)
    return (' | ').join(value_set)


def save_result_history(cur, cio_id, result):
    logger.info('--save_result_history()')
    logger.info(result)

    params = (cio_id, 'AI-processed result', json.dumps(result))
    command = insert_history_cmd % params
    logger.info('insert_history_cmd')
    logger.info(command)

    cur.execute(insert_history_cmd, params)


def set_rule_candidates(cur, info_str, anatomy_str, cio_id, union = False):
    logger.info('set_rule_candidates')
    max_candidates = 20

    # command = (set_rule_candidates_cmd2 % (info_str, anatomy_str, cio_id))
    # logger.info(command)
    # cur.execute(command)

    # Get list
    if not union:
        command = (get_rule_candidates_cmd % (info_str, anatomy_str))
    else:
        command = (get_rule_candidates_cmd_union % (info_str, anatomy_str))

        # arr_rule_candidates = []
        # Pick lowest priority of the set (P4/false contrast absolute lowest, P4/true next…
        # https://app.clickup.com/t/1b34dcb
        # lowest_priority = 'P4'
        # lowest_contrast = False
        # for index in range(len(ret)):
        #     candidate = ret[index]
        #     if index == 0:
        #         pri = candidate.priority
        #         if pri == 'P5'
        #     arr_rule_candidates.append(candidate.id)

    logger.info(command)
    cur.execute(command)
    ret = cur.fetchall()
    logger.info(ret)
    arr_rule_candidates = ret[0][0]

    if len(arr_rule_candidates) <= 0:
        return

    # Pare list down to max 10
    arr_rule_candidates = arr_rule_candidates[0:max_candidates]
    logger.info(arr_rule_candidates)
    command = set_rule_candidates_cmd % (arr_rule_candidates, cio_id)
    logger.info(command)
    cur.execute(command)


def handler(event, context):
    logger.info(event)
    v = event
    psql = postgresql.PostgreSQL()

    # CORS preflight for local debugging
    headers = {
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
    }

    cio_id = v["CIO_ID"]
    with psql.conn.cursor() as cur: 
        # insert into data_request one by one
        logger.info("insert into data_request one by one")
        try:
            logger.info(json.dumps(v))
            cur.execute(insert_cmd, (cio_id, json.dumps(v), v["p5"]))
            insert_response = cur.fetchall()
            logger.info(insert_response)
            state = insert_response[0][0]
            logger.info(state)
            if "anatomy" not in v.keys():
                # No anatomy found => ai_priority = P99
                logger.info("No anatomy found for CIO ID: ", cio_id)
                cur.execute(update_ai_priority, ('P99', cio_id))
                result = {
                    "rule_id": 'P98',
                    "anatomy": '',
                    "priority": '',
                    "contrast": '',
                    "p5_flag": '',
                    "specialty_exams": ''
                }
                save_result_history(cur, cio_id, result)
                psql.conn.commit()
                return {"rule_id": "N/A", 'headers': headers, "priority": "P99"}
            else:
                # Determine Rule matches
                anatomy_str = searchAnatomy(v["anatomy"])
                info_str = searchText(v, "anatomy", "medical_condition", "diagnosis", "symptoms", "phrases",
                                      "other_info")

                # Get all rankings first and store array
                set_rule_candidates(cur, info_str, anatomy_str, cio_id)

                # Determine and store highest ranking AI rule
                command_state = "state = 'ai_priority_processed',"
                if state == 'labelled_priority':
                    command_state = ""      # keep labelled state only
                # if v["new_request"]:
                # else:
                command = (update_cmd % (command_state, info_str)) + anatomy_str + (update_cmd_end % cio_id)

                logger.info(command)
                cur.execute(command)
                ret = cur.fetchall()

                # NO rule match found
                if not ret:
                    # Try UNION command
                    logger.info('NO rule match found -- Try UNION command')
                    anatomy_str = searchAnatomy(v["anatomy"], True)

                    # Get all rankings first and store array
                    set_rule_candidates(cur, info_str, anatomy_str, cio_id, True)

                    command = (update_cmd % (command_state, info_str)) + anatomy_str + (update_cmd_end_union % cio_id)

                    logger.info(command)
                    cur.execute(command)
                    ret = cur.fetchall()

                    if not ret:
                        cur.execute(update_ai_priority, ('P98', cio_id))
                        result = {
                            "rule_id": 'P98',
                            "anatomy": '',
                            "priority": '',
                            "contrast": '',
                            "p5_flag": '',
                            "specialty_exams": ''
                        }
                        save_result_history(cur, cio_id, result)
                        psql.conn.commit()
                        return {"rule_id": "N/A", 'headers': headers, "priority": "P98"}

                logger.info(ret)

                # Specialty Tags
                # logger.info('Specialty Tags')
                cmd = update_tags
                params = (ret[0][5], cio_id)
                # logger.info(cmd)
                # logger.info(params)

                cur.execute(cmd, params)
                tags = cur.fetchall()

            rule_id = ret[0][0]
            priority = ret[0][2]
            contrast = ret[0][3]

            result = {
                "rule_id": rule_id,
                "anatomy": ret[0][1],
                "priority": priority,
                "contrast": contrast,
                "p5_flag": ret[0][4],
                "specialty_exams": tags[0][0]
            }

            # Save AI result history
            save_result_history(cur, cio_id, result)

            # commit the changes
            psql.conn.commit()

            result['headers'] = headers
            return result

        except Exception as error:
            logger.error(error)
            logger.error("Exception Type: %s" % type(error))         
            return {
                "isBase64Encoded": False,
                "statusCode": 500,
                "body": f'{type(error)}',
                "headers": {"Content-Type": "application/json"}
            }
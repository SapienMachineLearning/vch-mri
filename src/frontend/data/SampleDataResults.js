const SampleData = {
  total_pgs: 1.0,
  data: [
    {
      id: "10009aa",
      state: "labelled_priority",
      error: "",
      request_json: {
        ReqCIO: "10009aa",
        DOB: "1982-11-28",
        Height: "55",
        "inch-cm": "IN",
        Weight: "181",
        "kg-lbs": "LBS",
        "Radiologist Priority": "P5",
        "Reason for Exam":
          "Fell on June 26, injured both ankles, left ankle on air cast, ++swelling, patient symptoms have been worsen, he cant even put on 10% partial weight bearing after 4-5 weeks",
        "Reason for Exam4":
          "AIDS (CD4<10) malaise, follow-up CT finding of nonspecific hypodense lesion with crescentic peripheral rim enhancement left frontal convexity that demonstrates no significant mass effect or surrounding edema",
        "Reason for Exam3": "dissection <class ''Exception''>",
        "Reason for Exam2": "Lesions ken liew req - may 5 207pm",
        "Exam Requested": "MRI Head w/ + w/o Contrast",
        CIO_ID: "10009aa",
        age: 38,
        height: 139.7,
        weight: 82.100152,
      },
      age: "38",
      height: "139.7",
      weight: "82.100152",
      info_json: {
        CIO_ID: "10009aa",
        age: 38,
        height: 139.7,
        weight: 82.100152,
        priority: "P5",
        medical_condition: [
          "left both injured ankles ankle",
          "june 26",
          "june 26",
          "june 26",
        ],
        diagnosis: [],
        anatomy: ["mri head", "head"],
        symptoms: ["fell", "left swelling ankles"],
        phrases: ["june 26", "ankle"],
        other_info: [],
        p5: "f",
      },
      date_created: "2021-07-13 12:01:09",
      date_updated: "2021-07-14 18:36:31",
      rule_candidates_array: [55, 40],
      ai_rule_candidates: [
        {
          rules_id: 55,
          body_part: "brain / head",
          bp_tk: "'brain':1 'head':2",
          info_weighted_tk:
            "'benign':6,18B,30,42 'clot':5,17B,29,41 'head':1,13B,25,37 'hypertent':8,20,32,44 'intracrani':7A,19,31,43 'new':4,16,28C,40 'queri':3,15,27C,39 'rad':11,23B,35,47 'review':12,24,36,48 'tech':9,21,33,45 'venogram':2,14,26,38",
          priority: "P2",
          contrast: true,
          info: "Head venogram query new clot benign intracranial hypertention (Tech or Rad review)",
        },
        {
          rules_id: 40,
          body_part: "brain / head",
          bp_tk: "'brain':1 'head':2",
          info_weighted_tk:
            "'acut':2,13B,24,35 'hydrocephalus':3,14B,25,36 'i.e':10,21,32,43 'mri':5,16,27,38 'need':6,17,28,39 'plan':9A,20,31,42 'rx':8,19,30,41 'ventriculostomi':11,22,33,44",
          priority: "P1",
          contrast: false,
          info: "Any acute hydrocephalus if MRI needed for RX planning (i.e. ventriculostomy)",
        },
      ],
      ai_rule_id: 55,
      ai_priority: "P2",
      ai_contrast: true,
      ai_p5_flag: false,
      ai_tags: null,
      final_priority: "",
      final_contrast: null,
      labelled_rule_id: null,
      labelled_priority: "P3",
      labelled_contrast: true,
      labelled_notes: "some rando notes.1234",
      history: [
        {
          history_type: "modification",
          description: "Labelling Updated",
          cognito_user_id: "3ad8e0ca-2b67-4236-bdfc-9418cfd86aed",
          cognito_user_fullname: "Ken Test",
          dob: null,
          height: null,
          weight: null,
          exam_requested: null,
          reason_for_exam: null,
          mod_info: {
            id: "10009aa",
            labelled_rule_id: null,
            labelled_priority: "P3",
            labelled_contrast: true,
            labelled_notes: "some rando notes.1234",
          },
          date_created: "2021-07-14 18:36:31",
        },
        {
          history_type: "modification",
          description: "Labelling Updated",
          cognito_user_id: "7f71adb6-6226-4903-9e79-f32e847613d4",
          cognito_user_fullname: "Kenneth Liew",
          dob: null,
          height: null,
          weight: null,
          exam_requested: null,
          reason_for_exam: null,
          mod_info: {
            id: "10009aa",
            labelled_rule_id: null,
            labelled_priority: "P3",
            labelled_contrast: true,
            labelled_notes: "some rando notes.123",
          },
          date_created: "2021-07-14 18:33:12",
        },
        {
          history_type: "modification",
          description: "Labelling Updated",
          cognito_user_id: "7f71adb6-6226-4903-9e79-f32e847613d4",
          cognito_user_fullname: "Kenneth Liew",
          dob: null,
          height: null,
          weight: null,
          exam_requested: null,
          reason_for_exam: null,
          mod_info: {
            id: "10009aa",
            labelled_rule_id: null,
            labelled_priority: "P3",
            labelled_contrast: null,
            labelled_notes: "some rando notes.123",
          },
          date_created: "2021-07-14 18:32:57",
        },
        {
          history_type: "modification",
          description: "Labelling Updated",
          cognito_user_id: "7f71adb6-6226-4903-9e79-f32e847613d4",
          cognito_user_fullname: "Kenneth Liew",
          dob: null,
          height: null,
          weight: null,
          exam_requested: null,
          reason_for_exam: null,
          mod_info: {
            id: "10009aa",
            labelled_rule_id: null,
            labelled_priority: "P1",
            labelled_contrast: null,
            labelled_notes: "some rando notes.123",
          },
          date_created: "2021-07-14 18:32:23",
        },
        {
          history_type: "modification",
          description: "Labelling Updated",
          cognito_user_id: "7f71adb6-6226-4903-9e79-f32e847613d4",
          cognito_user_fullname: "Kenneth Liew",
          dob: null,
          height: null,
          weight: null,
          exam_requested: null,
          reason_for_exam: null,
          mod_info: {
            id: "10009aa",
            labelled_rule_id: null,
            labelled_priority: "P1",
            labelled_contrast: null,
            labelled_notes: "some rando notes.12",
          },
          date_created: "2021-07-14 18:30:57",
        },
        {
          history_type: "modification",
          description: "Labelling Updated",
          cognito_user_id: "7f71adb6-6226-4903-9e79-f32e847613d4",
          cognito_user_fullname: "Kenneth Liew",
          dob: null,
          height: null,
          weight: null,
          exam_requested: null,
          reason_for_exam: null,
          mod_info: {
            id: "10009aa",
            labelled_rule_id: null,
            labelled_priority: "P1",
            labelled_contrast: null,
            labelled_notes: "some rando notes.1",
          },
          date_created: "2021-07-14 18:29:06",
        },
        {
          history_type: "modification",
          description: "Labelling Updated",
          cognito_user_id: "7f71adb6-6226-4903-9e79-f32e847613d4",
          cognito_user_fullname: "Kenneth Liew",
          dob: null,
          height: null,
          weight: null,
          exam_requested: null,
          reason_for_exam: null,
          mod_info: {
            id: "10009aa",
            labelled_rule_id: null,
            labelled_priority: "P1",
            labelled_contrast: null,
            labelled_notes: "some rando notes.",
          },
          date_created: "2021-07-14 18:16:34",
        },
        {
          history_type: "modification",
          description: "Labelling Updated",
          cognito_user_id: "7f71adb6-6226-4903-9e79-f32e847613d4",
          cognito_user_fullname: "Kenneth Liew",
          dob: null,
          height: null,
          weight: null,
          exam_requested: null,
          reason_for_exam: null,
          mod_info: {
            id: "10009aa",
            labelled_rule_id: null,
            labelled_priority: "P1",
            labelled_contrast: null,
            labelled_notes: "",
          },
          date_created: "2021-07-14 18:15:58",
        },
        {
          history_type: "modification",
          description: "update labelling",
          cognito_user_id: "7f71adb6-6226-4903-9e79-f32e847613d4",
          cognito_user_fullname: "Kenneth Liew",
          dob: null,
          height: null,
          weight: null,
          exam_requested: null,
          reason_for_exam: null,
          mod_info: {
            id: "10009aa",
            labelled_rule_id: null,
            labelled_priority: "",
            labelled_contrast: null,
            labelled_notes: "hi",
          },
          date_created: "2021-07-14 17:31:11",
        },
        {
          history_type: "request",
          description: null,
          cognito_user_id: "",
          cognito_user_fullname: "",
          dob: "1982-11-28",
          height: "55 IN",
          weight: "181 LBS",
          exam_requested: "MRI Head w/ + w/o Contrast",
          reason_for_exam:
            "Fell on June 26, injured both ankles, left ankle on air cast, ++swelling, patient symptoms have been worsen, he cant even put on 10% partial weight bearing after 4-5 weeks",
          mod_info: null,
          date_created: "2021-07-13 12:13:30",
        },
        {
          history_type: "request",
          description: null,
          cognito_user_id: "",
          cognito_user_fullname: "",
          dob: "1982-11-28",
          height: "55 IN",
          weight: "181 LBS",
          exam_requested: "MRI Head w/ + w/o Contrast",
          reason_for_exam:
            "Fell on June 26, injured both ankles, left ankle on air cast, ++swelling, patient symptoms have been worsen, he cant even put on 10% partial weight bearing after 4-5 weeks",
          mod_info: null,
          date_created: "2021-07-13 12:09:24",
        },
        {
          history_type: "request",
          description: null,
          cognito_user_id: "",
          cognito_user_fullname: "",
          dob: "1982-11-28",
          height: "55 IN",
          weight: "181 LBS",
          exam_requested: "MRI Head w/ + w/o Contrast",
          reason_for_exam:
            "Fell on June 26, injured both ankles, left ankle on air cast, ++swelling, patient symptoms have been worsen, he cant even put on 10% partial weight bearing after 4-5 weeks",
          mod_info: null,
          date_created: "2021-07-13 12:08:09",
        },
        {
          history_type: "request",
          description: null,
          cognito_user_id: "",
          cognito_user_fullname: "",
          dob: "1982-11-28",
          height: "55 IN",
          weight: "181 LBS",
          exam_requested: "MRI Head w/ + w/o Contrast",
          reason_for_exam:
            "Fell on June 26, injured both ankles, left ankle on air cast, ++swelling, patient symptoms have been worsen, he cant even put on 10% partial weight bearing after 4-5 weeks",
          mod_info: null,
          date_created: "2021-07-13 12:01:09",
        },
      ],
    },
    {
      id: "1148",
      state: "labelled_priority",
      error: "",
      request_json: {
        ReqCIO: "1148",
        DOB: "1978-01-01",
        Height: "69",
        "inch-cm": "IN",
        Weight: "1889",
        "kg-lbs": "LBS",
        "Radiologist Priority": "P2",
        "Reason for Exam": "dissection",
        "Reason for Exam2": "Lesions ken liew req - may 5 207pm",
        "Exam Requested": "head",
        CIO_ID: "1148",
        age: 43,
        height: 175.26,
        weight: 856.835288,
      },
      age: "43",
      height: "175.26",
      weight: "856.835288",
      info_json: {
        CIO_ID: "1148",
        age: 43,
        height: 175.26,
        weight: 856.835288,
        priority: "P2",
        medical_condition: [],
        diagnosis: [],
        anatomy: ["head"],
        symptoms: [],
        phrases: [],
        other_info: [],
        p5: "f",
      },
      date_created: "2021-07-13 14:26:26",
      date_updated: "2021-07-14 18:12:48",
      rule_candidates_array: [55],
      ai_rule_candidates: [
        {
          rules_id: 55,
          body_part: "brain / head",
          bp_tk: "'brain':1 'head':2",
          info_weighted_tk:
            "'benign':6,18B,30,42 'clot':5,17B,29,41 'head':1,13B,25,37 'hypertent':8,20,32,44 'intracrani':7A,19,31,43 'new':4,16,28C,40 'queri':3,15,27C,39 'rad':11,23B,35,47 'review':12,24,36,48 'tech':9,21,33,45 'venogram':2,14,26,38",
          priority: "P2",
          contrast: true,
          info: "Head venogram query new clot benign intracranial hypertention (Tech or Rad review)",
        },
      ],
      ai_rule_id: 55,
      ai_priority: "P2",
      ai_contrast: true,
      ai_p5_flag: false,
      ai_tags: null,
      final_priority: "",
      final_contrast: null,
      labelled_rule_id: null,
      labelled_priority: null,
      labelled_contrast: null,
      labelled_notes: "",
      history: [
        {
          history_type: "modification",
          description: "update labelling",
          cognito_user_id: "7f71adb6-6226-4903-9e79-f32e847613d4",
          cognito_user_fullname: "Kenneth Liew",
          dob: null,
          height: null,
          weight: null,
          exam_requested: null,
          reason_for_exam: null,
          mod_info: {
            id: "1148",
            labelled_rule_id: null,
            labelled_priority: "P2",
            labelled_contrast: null,
            labelled_notes: "ken Liew why does it delay. hm12345",
          },
          date_created: "2021-07-14 16:51:29",
        },
        {
          history_type: "modification",
          description: "update labelling",
          cognito_user_id: "7f71adb6-6226-4903-9e79-f32e847613d4",
          cognito_user_fullname: "Kenneth Liew",
          dob: null,
          height: null,
          weight: null,
          exam_requested: null,
          reason_for_exam: null,
          mod_info: {
            id: "1148",
            labelled_rule_id: null,
            labelled_priority: "P2",
            labelled_contrast: null,
            labelled_notes: "ken Liew why does it delay. hm",
          },
          date_created: "2021-07-14 16:10:09",
        },
        {
          history_type: "request",
          description: null,
          cognito_user_id: "",
          cognito_user_fullname: "",
          dob: "1978-01-01",
          height: "69 IN",
          weight: "1889 LBS",
          exam_requested: "head",
          reason_for_exam: "dissection",
          mod_info: null,
          date_created: "2021-07-13 15:24:10",
        },
        {
          history_type: "request",
          description: null,
          cognito_user_id: "",
          cognito_user_fullname: "",
          dob: "1978-01-01",
          height: "69 IN",
          weight: "1889 LBS",
          exam_requested: "head",
          reason_for_exam: "dissection",
          mod_info: null,
          date_created: "2021-07-13 15:22:51",
        },
        {
          history_type: "request",
          description: null,
          cognito_user_id: "",
          cognito_user_fullname: "",
          dob: "1978-01-01",
          height: "69 IN",
          weight: "1889 LBS",
          exam_requested: "head",
          reason_for_exam: "dissection",
          mod_info: null,
          date_created: "2021-07-13 15:21:00",
        },
        {
          history_type: "request",
          description: null,
          cognito_user_id: "",
          cognito_user_fullname: "",
          dob: "1978-01-01",
          height: "69 IN",
          weight: "1889 LBS",
          exam_requested: "head",
          reason_for_exam: "dissection",
          mod_info: null,
          date_created: "2021-07-13 14:26:26",
        },
      ],
    },
    {
      id: "10008c",
      state: "labelled_priority",
      error:
        "RuleProcessingLambda - Exception Type: <class 'botocore.exceptions.EndpointConnectionError'>",
      request_json: {
        ReqCIO: "10008c",
        DOB: "1978-01-01",
        Height: "69",
        "inch-cm": "IN",
        Weight: "1889",
        "kg-lbs": "LBS",
        "Radiologist Priority": "P3",
        "Reason for Exam": "concussion",
        "Exam Requested": "head",
        CIO_ID: "10008c",
        age: 43,
        height: 175.26,
        weight: 856.835288,
      },
      age: "43",
      height: "175.26",
      weight: "856.835288",
      info_json: null,
      date_created: "2021-07-13 15:19:55",
      date_updated: "2021-07-14 15:17:41",
      rule_candidates_array: null,
      ai_rule_candidates: [],
      ai_rule_id: null,
      ai_priority: null,
      ai_contrast: null,
      ai_p5_flag: null,
      ai_tags: null,
      final_priority: null,
      final_contrast: null,
      labelled_rule_id: null,
      labelled_priority: null,
      labelled_contrast: null,
      labelled_notes:
        "Even putting notes in error it will change the state but error is more powerful.🤣\nwell well well",
      history: [
        {
          history_type: "request",
          description: null,
          cognito_user_id: "",
          cognito_user_fullname: "",
          dob: "1978-01-01",
          height: "69 IN",
          weight: "1889 LBS",
          exam_requested: "head",
          reason_for_exam: "concussion",
          mod_info: null,
          date_created: "2021-07-13 15:19:55",
        },
      ],
    },
    {
      id: "10008b",
      state: "ai_priority_processed",
      error: null,
      request_json: {
        ReqCIO: "10008b",
        DOB: "1978-01-01",
        Height: "69",
        "inch-cm": "IN",
        Weight: "1889",
        "kg-lbs": "LBS",
        "Radiologist Priority": "P3",
        "Reason for Exam": "concussion",
        "Exam Requested": "head",
        CIO_ID: "10008b",
        age: 43,
        height: 175.26,
        weight: 856.835288,
      },
      age: "43",
      height: "175.26",
      weight: "856.835288",
      info_json: {
        CIO_ID: "10008b",
        age: 43,
        height: 175.26,
        weight: 856.835288,
        priority: "P3",
        medical_condition: ["concussion"],
        diagnosis: [],
        anatomy: ["head"],
        symptoms: [],
        phrases: ["concussion"],
        other_info: [],
        p5: "f",
      },
      date_created: "2021-07-13 14:27:42",
      date_updated: "2021-07-13 14:27:42",
      rule_candidates_array: [74, 55],
      ai_rule_candidates: [
        {
          rules_id: 74,
          body_part: "brain / head",
          bp_tk: "'brain':1 'head':2",
          info_weighted_tk:
            "'concuss':2,5B,8,11 'post':1,4,7,10 'syndrom':3,6B,9,12",
          priority: "P4",
          contrast: false,
          info: "Post concussion syndrome",
        },
        {
          rules_id: 55,
          body_part: "brain / head",
          bp_tk: "'brain':1 'head':2",
          info_weighted_tk:
            "'benign':6,18B,30,42 'clot':5,17B,29,41 'head':1,13B,25,37 'hypertent':8,20,32,44 'intracrani':7A,19,31,43 'new':4,16,28C,40 'queri':3,15,27C,39 'rad':11,23B,35,47 'review':12,24,36,48 'tech':9,21,33,45 'venogram':2,14,26,38",
          priority: "P2",
          contrast: true,
          info: "Head venogram query new clot benign intracranial hypertention (Tech or Rad review)",
        },
      ],
      ai_rule_id: 74,
      ai_priority: "P4",
      ai_contrast: false,
      ai_p5_flag: false,
      ai_tags: null,
      final_priority: null,
      final_contrast: null,
      labelled_rule_id: null,
      labelled_priority: null,
      labelled_contrast: null,
      labelled_notes: null,
      history: [
        {
          history_type: "request",
          description: null,
          cognito_user_id: "",
          cognito_user_fullname: "",
          dob: "1978-01-01",
          height: "69 IN",
          weight: "1889 LBS",
          exam_requested: "head",
          reason_for_exam: "concussion",
          mod_info: null,
          date_created: "2021-07-13 14:27:42",
        },
      ],
    },
  ],
};

export default SampleData;

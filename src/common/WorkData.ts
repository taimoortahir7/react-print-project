type workOrderDataType = {
    testId: string, 
    testName: string, 
    sampleID: string, 
    sampleCollectionTime: string, 
    sampleType: string,  
    noOfLinesForReportPrint: number,
    printTitle: string,
    printLines: {
        description: string,
        key: string, 
        result: string,
        range: string[],
        type: string,
        units: string 
    }[]
}[]
type reportFooterType = {
    FooterNotes1: string,
    FooterNotes2: string,
    SignLeftName: string,
    SignLeftTitle: string,
    SignRightName: string,
    SignRightTitle: string
}
type reportHeaderType = {
    ageNgender: string,
    customer: string,	
    patientFullName: string,
    referenceDoctor: string,
    registrationTime: string,
    workOrderID: string,
    collectedOnTime: string,
    reportedTime: string,
    sid: string,
    sampleType: string,
    styles: any
}


export const workOrderData: workOrderDataType = [
    {
        testId: "KMRSHLSER02", 
        testName: "Widal - MP", 
        sampleID: "SID001", 
        sampleCollectionTime: "2021-05-22T19:58:12.000Z", 
        sampleType: "Blood Serum",  
        noOfLinesForReportPrint: 1,
        printTitle: "Widal-MP test",
        printLines: [
            {
                description: "Blood for Widal-MP",
                key: "bloodsmearmalaria", 
                result: "Trophozoite seen",
                range: [""],
                type: "",
                units: ""
            }
        ]
    },
    {
        testId: "KMRSHLSER03", 
        testName: "Widal - VDRL", 
        sampleID: "SID001", 
        sampleCollectionTime: "2021-05-22T20:22:07.000Z", 
        sampleType: "Blood Serum", 
        noOfLinesForReportPrint: 4, 
        printTitle: "Widal - V.D.R.L Test",       
        printLines: [ 
            {
               	description: "Blood for V.D.R.L",
                key: "bloodforvdrl",
                range: [
                    "Men: 11-15", "Women: 09-13", "Children: 03-05"
                ],
                result: "Non-Reactive",
                type: "multiString",
                units: "" 
            },
            {
                description: "Method",
                key: "method",
                range: [""],
                result: "Trust method",
                type: "radio",
                units: ""
            }
        ]
    },
    {
        testId: "KMRSHLSER05", 
        testName: "Widal - AOT", 
        sampleID: "SID001", 
        sampleCollectionTime: "2021-05-22T20:26:54.000Z", 
        sampleType: "Blood Serum", 
        noOfLinesForReportPrint: 1, 
        printTitle: "Widal - AOT test",
        printLines: [
            {
                description: "Antistreptolysin O Titre",
                key: "aot",
                range: [""],
                result: "Positive",
                type: "multiString",
                units: ""
            }
        ]
    },{
        testId: "KMRSHLSER07", 
        testName: "V.D.R.L Test", 
        sampleID: "SID001", 
        sampleCollectionTime: "2021-05-22T20:28:36.000Z", 
        sampleType: "Blood Serum",
        noOfLinesForReportPrint: 5,
        printTitle: "V.D.R.L Test Report",
        printLines: [
            {
                description: "Blood for V.D.R.L",
                key: "bvdrl",
                range: [
                    "Men: 10-15", 
                    "Women: 09-13", 
                    "Children: 03-05"
                ],
                result: "Non-Reactive",
                type: "multiString",
                units: ""
            },
            {
                description: "Dilution",
                key: "dilution",
                range: [""],
                result: "1:1",
                type: "multiString",
                units: ""
            },
            {
                description: "Method",
                key: "method",
                range: [""],
                result: "Trust method",
                type: "radio",
                units: ""
            }
        ],
    },
    {
        testId: "KMRSHLSER11", 
        testName: "Follicular Stimulating Harmone", 
        sampleID: "400631", 
        sampleCollectionTime: "2021-06-22T06:20:36.000Z", 
        sampleType: "Blood Serum",
        noOfLinesForReportPrint: 7,
        printTitle: "Bio Chemistry",
        printLines: [
            {
                description: "F.S.H.",
                key: "fsh",
                range: [
                    "Follicular Phase: 02 to 08 mIu/ml", 
                    "Mid cycle peak: 15 to 30 mIu/ml",
                    "Luteal Phase: 02 to 08 mIu/ml", 
                    "Menopausal Woman : 25 to 100 mIu/ml",
                    "Normal Man: 0 to 10 mIu/ml"
                ],
                result: "09",
                type: "string",
                units: "mIu/ml",
            },
            {
                description: "Method",
                key: "method",
                range: [""],
                result: "Radio Immunoassay",
                type: "radio",
                units: "",
            }
        ],
    }
]

export const reportHeader: reportHeaderType = {
    ageNgender: "41 Year(s) Male",
    customer: "Srila Lab",	
    patientFullName: "Mr. John Prakash",
    referenceDoctor: "Dr. Ramana Shastri",
    registrationTime: "Sun June 06 2021 05:30:50 GMT+0100 (Irish Standard Time)",
    workOrderID: "Lab-1234-8765",
    collectedOnTime: "Sun June 06 2021 06:20:50 GMT+0100 (Irish Standard Time)",
    reportedTime: "Mon June 07 2021 12:04:50 GMT+0100 (Irish Standard Time)",
    sid: "400631",
    sampleType: "Blood Serum",
    styles: {
        main: { 
            margin: '20px 20px' 
        },
        logo: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
            marginBottom: '20px'
        },
        bio: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
        }
    }
}

export const reportFooter: reportFooterType = {
    FooterNotes1: "This is an electronically authenticated report. Report printed date: Tue Jun 01 2021 21:53:36",
    FooterNotes2: "NOTE: Assay results should be correlated clinically with other clinical findings and the total clinical status of the patient.",
    SignLeftName: "Anthony Cahill",
    SignLeftTitle: "Manager Technical",
    SignRightName: "Dr. Will Smyth",
    SignRightTitle: "M.D. MICROBIOLOGIST"
}
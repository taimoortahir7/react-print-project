import React from 'react';

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
}

type MyProps = {
    itemData: workOrderDataType,
    reportTitle: string
};

export const PatientData = (props: MyProps) => {

    return (
        <>
            <h3>{props.reportTitle}</h3>
            <table className='table_PatientData'>
            <thead className='tableHeader_PatientData'>
                <th scope="row" colSpan={4}>{props.itemData?.printTitle}</th>
            </thead>
            <thead className='tableHeader_PatientData'>
                <th>Test Description</th>
                <th>Results</th>
                <th>Units</th>
                <th>Biological Reference Ranges</th>
            </thead>
            <tbody>
                {
                    props.itemData?.printLines.map((printItem: any, index: number) => (
                        <tr>
                            <td>{printItem?.description}</td>
                            <td>{printItem?.result}</td>
                            <td>{printItem?.units}</td>
                            <td>
                                {
                                    (printItem?.range) && (printItem?.range.map((item: string, index: number) => (
                                        <tr>
                                            <td>{item}</td>
                                        </tr>
                                    )))
                                }
                            </td>
                        </tr>
                    ))
                }
            </tbody>
            </table>
        </>
    );
}
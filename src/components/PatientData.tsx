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
    }[],
    styles: any
}

type MyProps = {
    itemData: workOrderDataType,
    reportTitle: string
};

export const PatientData = (props: MyProps) => {

    return (
        <>
            <h3 style={props.itemData?.styles?.reportTitle}>{props.reportTitle}</h3>
            <span style={props.itemData?.styles?.rowHeader}>
                <span style={props.itemData?.styles?.labelRow}>
                    <div style={props.itemData?.styles?.label}>TEST</div>
                    <div style={props.itemData?.styles?.labelText}>{props.itemData?.printTitle}</div>
                </span>
                <span style={props.itemData?.styles?.labelRow}>
                    <div style={props.itemData?.styles?.label}>DESCRIPTION</div>
                    {
                        props.itemData?.printLines.map((printItem: any, index: number) => (
                            <div style={props.itemData?.styles?.labelText}>{printItem?.description}</div>
                        ))
                    }
                </span>
                <span style={props.itemData?.styles?.labelRow}>
                    <div style={props.itemData?.styles?.label}>RESULTS</div>
                    {
                        props.itemData?.printLines.map((printItem: any, index: number) => (
                            <div style={props.itemData?.styles?.labelText}>{printItem?.result}</div>
                        ))
                    }
                </span>
                <span style={props.itemData?.styles?.labelRow}>
                    <div style={props.itemData?.styles?.label}>UNITS</div>
                    {
                        props.itemData?.printLines.map((printItem: any, index: number) => {
                            if (printItem?.units) return (
                                <div style={props.itemData?.styles?.labelText}>{printItem?.units}</div>
                            )
                        })
                    }
                </span>
                {
                    props.itemData?.printLines.map((printItem: any, index: number) => {
                        if (printItem?.units) return (
                            <span style={props.itemData?.styles?.labelRow}>
                                <div style={props.itemData?.styles?.label}>BIOLOGICAL REFERENCE RANGES</div>
                                {
                                    (printItem?.range) && (printItem?.range.map((item: string, index: number) => (
                                        <div style={props.itemData?.styles?.labelText}>{item}</div>
                                    )))
                                }
                            </span>
                        )
                    })
                }
            </span>

            {/* <table className='table_PatientData'>
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
            </table> */}
        </>
    );
}
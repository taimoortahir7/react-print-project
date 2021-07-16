import React from 'react';

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { PatientData } from '../components/PatientData'

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
}

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
  reportHeader: reportHeaderType;
  reportData: any;
  reportFooter: reportFooterType;
  ref: React.RefObject<HTMLInputElement>;
};

export class ComponentToPrint extends React.Component<MyProps & any> {
  constructor(props: MyProps) {
    super(props)
  }

  render() {
    return (
      <div className='printStyle_Print'>
      {
        this.props.reportData.map((item: workOrderDataType, index: number) => (
          <div className='pageStyle_Print' ref={this.props.ref}>
            <Header data={this.props.reportHeader} />
            <div className='tablediv_Print'>
              <PatientData itemData={item} reportTitle={this.props.reportTitle}/>
            </div>
            <Footer data={this.props.reportFooter} /> 
          </div>
        ))
      }
      </div>
    );
  }
}
import React, { useRef, useState, useEffect } from 'react';
import { useReactToPrint } from 'react-to-print';
import './App.css';
import './styles/ComponentStyles.css'
import { getWorkOrderData } from './utils/WorkDataFunc'
import { reportFooter } from './common/WorkData'
import { reportHeader } from './common/WorkData'

import { PrintButton } from './components/Button'
import { ComponentToPrint } from './screens/PrintScreen'

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

export const App = () => {
  const componentRef = useRef(null);
  const [workData, setWorkData] = useState<any>([])
  const [headerData, setHeaderData] = useState<reportHeaderType>(reportHeader)
  const [footerData, setFooterData] = useState<reportFooterType>(reportFooter)

  const handleOnBeforeGetContent = () => {
    setWorkData(getWorkOrderData())
  }

  const reactToPrintContent = React.useCallback(() => {
    return componentRef.current;
  }, [componentRef.current]);

  const handleAfterPrint = React.useCallback(() => {
    // printModalPrintAction();
  }, []);
  
  const handlePrint = useReactToPrint({
    onBeforeGetContent: handleOnBeforeGetContent,
    content: reactToPrintContent,
    onAfterPrint: handleAfterPrint
  });

  useEffect(() => {
    handleOnBeforeGetContent()
  }, [])

  return (
    <div className="App">
      {/* <ReactToPrint
        trigger={() => <PrintButton />}
        content={() => componentRef.current}
        documentTitle="PatientFile"
        removeAfterPrint
      /> */}
      <PrintButton onClick={handlePrint}/>
      <div className='componentToPrint_App'>
        <ComponentToPrint reportHeader={headerData} reportData={workData} reportFooter={footerData} ref={componentRef} />
      </div>
    </div>
  );
}

export default App;

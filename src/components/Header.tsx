import React from 'react'
import logo from './../assets/logo.png'
import moment from 'moment'
import { useBarcode } from '@createnextapp/react-barcode';

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

type MyProps = {
    props: reportHeaderType;
    userType: string
};

export const Header = (props: MyProps & any) => {
    // const { inputRef } = useBarcode({
    //     value: '1234567890128',
    //     options: {
    //       background: '#f7f7f7',
    //       height: 60,
    //       format: 'EAN13'
    //     }
    // });

    console.log('userType: ', props.userType)

    return (
        <div className='header'>
            <div className='logoDiv_Header'>
                <img src={logo} alt='logo'/>
            </div>
            {
                (props.userType === 'user1') && (
                    <div className='patientBioDiv_Header'>
                        <div className='patientDetails_Header'>
                            <span className='patientDetailsRow_Header'>
                                <span>{props.data?.patientFullName}</span>
                            </span>
                            <span className='patientDetailsRow_Header'>
                                <span>Age: {props.data?.ageNgender}</span>
                            </span>
                            {/* <img ref={inputRef} /> */}
                        </div>
                        <div className='patientDetails_Header'>
                            <span className='patientDetailsRow_Header'>
                                <span>Lab Code: {props.data?.workOrderID}</span>
                            </span>
                            <span className='patientDetailsRow_Header'>
                                <span>Ref Doctor: {props.data?.referenceDoctor}</span>
                            </span>
                            <span className='patientDetailsRow_Header'>
                                <span>Customer: {props.data?.customer}</span>
                            </span>
                        </div>
                        <div className='patientDetails_Header'>
                            <span className='patientDetailsRow_Header'>
                                <span>Sample Type: {props.data?.sampleType}</span>
                            </span>
                            <span className='patientDetailsRow_Header'>
                                <span>SID: {props.data?.sid}</span>
                            </span>
                            <span className='patientDetailsRow_Header'>
                                <span>Collected On: {moment(props.data?.collectedOnTime).format('YYYY-MM-DD hh:mm')}</span>
                            </span>
                            <span className='patientDetailsRow_Header'>
                                <span>Regd On: {moment(props.data?.registrationTime).format('YYYY-MM-DD hh:mm')}</span>
                            </span>
                            <span className='patientDetailsRow_Header'>
                                <span>Reported On: {moment(props.data?.reportedTime).format('YYYY-MM-DD hh:mm')}</span>
                            </span>
                        </div>
                    </div>
                )
            }
            {
                (props.userType === 'user2') && (
                    <div className='mainbio_header'>
                        <span className='patientDetailsRow_Header'>
                            <span className='labelRow_Header'>
                                <div className='label_Header'>PATIENT'S NAME</div>
                                <div className='labelText_Header'>{props.data?.patientFullName}</div>
                            </span>
                            <span className='labelRow_Header'>
                                <div className='label_Header'>I.O.NO.</div>
                                <div className='labelText_Header'>{props.data?.patientFullName}</div>
                            </span>
                            <span className='labelRow_Header'>
                                <div className='label_Header'>REFERENCED BY</div>
                                <div className='labelText_Header'>{props.data?.patientFullName}</div>
                            </span>
                        </span>
                        <span className='patientDetailsRow_Header'>
                            <span className='labelRow_Header'>
                                <div className='label_Header'>SEX</div>
                                <div className='labelText_Header'>{props.data?.patientFullName}</div>
                            </span>
                            <span className='labelRow_Header'>
                                <div className='label_Header'>AGE</div>
                                <div className='labelText_Header'>{props.data?.patientFullName}</div>
                            </span>
                            <span className='labelRow_Header'>
                                <div className='label_Header'>DATE</div>
                                <div className='labelText_Header'>{props.data?.patientFullName}</div>
                            </span>
                        </span>
                    </div>
                )
            }
        </div>
    );
}
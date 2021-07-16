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
};

export const Header = (props: MyProps & any) => {
    const { inputRef } = useBarcode({
        value: '1234567890128',
        options: {
          background: '#f7f7f7',
          height: 40,
          format: 'EAN13'
        }
    });

    return (
        <div style={props.data?.styles?.main}>
            <div style={props.data?.styles?.logo}>
                <img src={logo} alt='logo'/>
            </div>
            <div style={props.data?.styles?.bio}>
                <div style={props.data?.styles?.mainDivItem}>
                    <span style={props.data?.styles?.rowHeader}>
                        <span style={props.data?.styles?.labelRow}>
                            <div style={props.data?.styles?.label}>PATIENT'S NAME</div>
                            <div style={props.data?.styles?.labelText}>{props.data?.patientFullName}</div>
                        </span>
                    </span>
                    <span style={props.data?.styles?.rowHeader}>
                        <span style={props.data?.styles?.labelRow}>
                            <div style={props.data?.styles?.label}>AGE</div>
                            <div style={props.data?.styles?.labelText}>{props.data?.ageNgender}</div>
                        </span>
                    </span>
                    <img ref={inputRef} />
                </div>
                <div style={props.data?.styles?.mainDivItem}>
                    <span style={props.data?.styles?.rowHeader}>
                        <span style={props.data?.styles?.labelRow}>
                            <div style={props.data?.styles?.label}>LAB CODE</div>
                            <div style={props.data?.styles?.labelText}>{props.data?.workOrderID}</div>
                        </span>
                    </span>
                    <span style={props.data?.styles?.rowHeader}>
                        <span style={props.data?.styles?.labelRow}>
                            <div style={props.data?.styles?.label}>REF DOCTOR</div>
                            <div style={props.data?.styles?.labelText}>{props.data?.referenceDoctor}</div>
                        </span>
                    </span>
                    <span style={props.data?.styles?.rowHeader}>
                        <span style={props.data?.styles?.labelRow}>
                            <div style={props.data?.styles?.label}>CUSTOMER</div>
                            <div style={props.data?.styles?.labelText}>{props.data?.customer}</div>
                        </span>
                    </span>
                </div>
                <div style={props.data?.styles?.mainDivItem}>
                    <span style={props.data?.styles?.rowHeader}>
                        <span style={props.data?.styles?.labelRow}>
                            <div style={props.data?.styles?.label}>SAMPLE TYPE</div>
                            <div style={props.data?.styles?.labelText}>{props.data?.sampleType}</div>
                        </span>
                    </span>
                    <span style={props.data?.styles?.rowHeader}>
                        <span style={props.data?.styles?.labelRow}>
                            <div style={props.data?.styles?.label}>SID</div>
                            <div style={props.data?.styles?.labelText}>{props.data?.sid}</div>
                        </span>
                    </span>
                    <span style={props.data?.styles?.rowHeader}>
                        <span style={props.data?.styles?.labelRow}>
                            <div style={props.data?.styles?.label}>COLLECTED ON</div>
                            <div style={props.data?.styles?.labelText}>{moment(props.data?.collectedOnTime).format('YYYY-MM-DD hh:mm')}</div>
                        </span>
                    </span>
                    <span style={props.data?.styles?.rowHeader}>
                        <span style={props.data?.styles?.labelRow}>
                            <div style={props.data?.styles?.label}>REGD ON</div>
                            <div style={props.data?.styles?.labelText}>{moment(props.data?.registrationTime).format('YYYY-MM-DD hh:mm')}</div>
                        </span>
                    </span>
                    <span style={props.data?.styles?.rowHeader}>
                        <span style={props.data?.styles?.labelRow}>
                            <div style={props.data?.styles?.label}>REPORTED ON</div>
                            <div style={props.data?.styles?.labelText}>{moment(props.data?.reportedTime).format('YYYY-MM-DD hh:mm')}</div>
                        </span>
                    </span>
                </div>
            </div>
        </div>
    );
}
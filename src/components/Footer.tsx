import React from 'react';
import signature1 from './../assets/signature1.png'
import signature2 from './../assets/signature2.png'

type reportFooterType = {
    FooterNotes1: string,
    FooterNotes2: string,
    SignLeftName: string,
    SignLeftTitle: string,
    SignRightName: string,
    SignRightTitle: string
}

type MyProps = {
    data: reportFooterType;
};

export const Footer = (props: MyProps) => {

    return (
        <div className='footer'>
            <div className='logoDiv_Footer'>
                <div className='logoDivDetails_Footer'>
                    <img src={signature2} alt='signature2' width='100' height='50'/>
                    <span>{props.data?.SignLeftName}</span>
                    <span>{props.data?.SignLeftTitle}</span>
                </div>
                <div className='logoDivDetails_Footer'>
                    <img src={signature1} alt='signature1' width='100' height='50'/>
                    <span>{props.data?.SignRightName}</span>
                    <span>{props.data?.SignRightTitle}</span>
                </div>
            </div>
            <hr/>
            <div className='footerNote_Footer'>
                <span>{props.data?.FooterNotes1}</span>
                <span>{props.data?.FooterNotes2}</span>
            </div>
        </div>
    );
}
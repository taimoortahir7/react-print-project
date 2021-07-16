import React from 'react';

type MyProps = {
    onClick: any;
};

export const PrintButton = (props: any) => {
    const { onClick } = props

    return (
        <button className='styles_Button' onClick={onClick}>Print</button>
    );
}
import React from 'react';

type MyProps = {
    onClick: any;
    selectedUserCallback: any
};

export const PrintButton = (props: any) => {
    const { onClick, selectedUserCallback } = props

    const optionSelection = (event: any) => {
        selectedUserCallback(event.target.value)
    }

    return (
        <div className="mainDiv_Button">
            <div className="selectionDiv_Button">
                <label htmlFor="users">Choose User:</label>
                <select name="users" id="users" onChange={optionSelection}>
                    <option value="user1" selected>Old User</option>
                    <option value="user2">New User</option>
                </select>
            </div>
            <button className='styles_Button' onClick={onClick}>Print</button>
        </div>
    );
}
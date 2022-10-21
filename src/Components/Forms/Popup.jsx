import React from 'react';

const Popup = (props) => {
    return (
        <div style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100vh',
            background: 'white',
            zIndex: '2'
        }} className="background">
            <div style={{
                position: 'fixed',
                top: '40%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
            }} className="ui card">
                <div className="content">
                    <div className="header">{props.title}</div>
                </div>
                <div className="content">
                    <label>{props.label}</label>
                    <div className="ui icon input">
                        <input type="text" placeholder={`${props.placeholder}`}onChange={(e) => props.onChangeHandler(e.target.value)}/>
                        <i className={`${props.icon} icon`}></i>
                    </div>
                    <div style={{marginTop: '5px'}} className="extra content">
                        <button onClick={props.onCancelClick} className="ui button">Cancel</button>
                        <button onClick={props.onSubmitClick} className="ui green button">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup;
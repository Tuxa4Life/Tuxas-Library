import React from "react";

const Alert = ({data, children, closeFunc}) => {
    return (
        <div className="ui" style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100vh',
            backdropFilter: 'blur(5px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: '2'
        }}>
            <div className="ui card">
                <div className="content">
                    <div style={{marginTop: '10px'}} className="header">{data.title}</div>
                    <div style={{marginBottom: '10px'}} className="meta">{data.meta}</div>
                    <div style={{margin: '10px 0'}} className="content">
                        { children }
                    </div>
                    <div style={{marginLeft: '70%'}} className="ui button right" onClick={closeFunc}>Close</div>
                </div>
            </div>
        </div>
    )
}

export default Alert;
import React, { useState, useEffect } from "react";
import Alert from "./Alert";
import Link from "./Link";

const Navbar = () => {
    const [loginData, setLoginData] = useState({})
    const [profileAlert, setProfileAlert] = useState(false)
    
    useEffect(() => {
        if (localStorage.getItem('login')) {
            setLoginData(JSON.parse(localStorage.getItem('login')))
        }
    }, [])

    return (
        <div style={{width: '100%', position: 'fixed', top: '0', left: '0', zIndex: '1'}} className="ui large menu">
            <div className="header item">
                <Link href="/">
                    Tuxa's Library
                </Link>
            </div>
            <Link href='/' className='item'>
                მთავარი
            </Link>
            <Link href='/books' className="item">
                წიგნები
            </Link>

            <Link href={localStorage.getItem('login') ? window.location.pathname : '/auth'}>
                <button className='ui button icon primary' style={{
                    position: 'absolute',
                    top: '13%',
                    right: '2%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }} onClick={() => setProfileAlert(true)}>
                    <i className="icon user"></i>
                </button>
            </Link>

            { profileAlert ? 
                <Alert data={{title: loginData.Username, meta: `ID: ${loginData.ID}`}} closeFunc={() => setProfileAlert(false)}>
                    <h4>{loginData.Email}</h4>
                    <h5>გაწევრიანების თარიღი: {loginData.Date}</h5>
                    <span style={{textDecoration: 'underline', cursor: 'pointer'}} onClick={() => {
                        localStorage.removeItem('login')
                        window.location.reload()
                    }}>ანგარიშიდან გამოსვლა</span>
                </Alert>
            : null }
        </div>
    )
}

export default Navbar;
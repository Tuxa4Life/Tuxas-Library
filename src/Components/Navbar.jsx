import React, { useState, useEffect } from "react";
import Alert from "./Alert";
import Link from "./Link";

const Navbar = () => {
    const [loginVal, setLoginVal] = useState(false)
    const [loginData, setLoginData] = useState({})
    const [profileAlert, setProfileAlert] = useState(false)
    
    useEffect(() => {
        if (localStorage.getItem('login')) {
            setLoginVal(true)
            setLoginData(JSON.parse(localStorage.getItem('login')))
        } else {
            setLoginVal(false)
        }
    }, [])

    return (
        <div style={{width: '100%', position: 'relative'}} className="ui large menu">
            <div className="header item">
                <Link href="/">
                    Tuxa's Library
                </Link>
            </div>
            <Link href='/' className='item'>
                Home
            </Link>
            <Link href='/books' className="item">
                Books
            </Link>

            <Link href={loginVal ? window.location.pathname : '/auth'}>
                <button className='ui button primary' style={{
                    position: 'absolute',
                    top: '10%',
                    right: '2%',
                }} onClick={() => setProfileAlert(true)}>
                    {loginVal ? 'Profile' : 'Login'}
                </button>
            </Link>

            { profileAlert ? 
                <Alert data={{title: loginData.Username, meta: `User ID: ${loginData.ID}`}} closeFunc={() => setProfileAlert(false)}>
                    <h4>{loginData.Email}</h4>
                    <h5>Join Date: {loginData.Date}</h5>
                    <span style={{textDecoration: 'underline', cursor: 'pointer'}} onClick={() => {
                        localStorage.removeItem('login')
                        window.location.reload()
                    }}>Log out</span>
                </Alert>
            : null }
        </div>
    )
}

export default Navbar;
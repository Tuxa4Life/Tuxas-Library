import React, { useState, useEffect } from "react";
import Link from "./Link";

const Navbar = () => {
    const [loginVal, setLoginVal] = useState(false)
    
    useEffect(() => {
        if (localStorage.getItem('login')) {
            setLoginVal(true)
        } else {
            setLoginVal(false)
        }
    })

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
                <button  className='ui button primary' style={{
                    position: 'absolute',
                    top: '10%',
                    right: '2%',
                }}>
                    {loginVal ? 'Profile' : 'Login'}
                </button>
            </Link>
        </div>
    )
}

export default Navbar;
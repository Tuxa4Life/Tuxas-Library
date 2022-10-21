import React, { useState } from "react";
import axios from "axios";

const LogIn = ({formState, setFormState}) => {
    const [redBorder, setRedBorder] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const searchUrl = `https://v1.nocodeapi.com/tuxa3/google_sheets/bERXdJyFTjGsXOJm/search?tabId=Sheet1&searchKey=Email&searchValue=${email}` // passwords txt (1, 3)

    const checkLogin = (e) => {
        e.preventDefault()
        axios({
            method: 'get',
            url: searchUrl, 
            params: {},
        }).then(function (response) {
                if (response.data.length === 0) {
                    console.log(response.data)
                    alert('Account not found')
                    return
                }
                if (password == response.data[0].Password) {
                    setRedBorder(false)
                    alert('logined successfully')
                } else {
                    setRedBorder(true)
                }
        }).catch(function () {
            console.log('Account not found')
        })
    }

    return (
        <form onSubmit={checkLogin} className="ui form">
                <h2 className="title">Login</h2>
                <div className="field">
                    <label>Email:</label>
                    <input type="email" onChange={e => setEmail(e.target.value)} value={email} />
                </div>
                <div className="field">
                    <label>Password:</label>
                    <input type="password" onChange={e => setPassword(e.target.value)} value={password} />
                </div>
                {redBorder ? <p style={{color: 'red'}}>Incorrect email or password.</p> : null}

            <button className="ui submit button blue">Log in</button>
            <button type="button" onClick={() => window.location.reload()} className="ui button">Cancel</button>

            <span>Don't have account? <a style={{cursor: 'pointer'}} onClick={() => setFormState(!formState)}>Join us here</a></span>
        </form>
    )
}

export default LogIn;


// add login with facebook, google
import React, { useState, useEffect } from "react";
import axios from "axios";
import Popup from "../Popup";
import emailjs from '@emailjs/browser';

const Register = ({formState, setFormState}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rPassword, setRPassword] = useState('')

    const [buttonVal, setButtonVal] = useState('Register')
    const [popupValue, setPopupValue] = useState(false)
    const [code, setCode] = useState(null)
    const [emailAvaible, setEmailAvaible] = useState(true)

    useEffect(() => {
        localStorage.setItem('code', Math.floor(Math.random() * 900) + 100)

        return () => {
            localStorage.removeItem('code')
        }
    }, [])

    const __sendEmail = (e) => {
        e.preventDefault();
        console.log(code)
        if (code === localStorage.getItem('code')) {
            setPopupValue(false)
            setButtonVal('Please Wait...')


        
            let date = new Date().toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"}) 
            let id = `R${Math.round(Date.now() * Math.random())}`
            axios ({
                method: 'post',
                url: 'https://v1.nocodeapi.com/tuxa3/google_sheets/bERXdJyFTjGsXOJm?tabId=Sheet1', // passwords txt (1, 3)
                params: {},
                data: [[id, name, email, password, date]]
            }).then(function () {
                setButtonVal('Registered!')

                localStorage.setItem('login', JSON.stringify({ID: id, Username: name, Email: email, Password: password, Date: date}))
                window.history.pushState({}, '', '/')

                const navEvent = new PopStateEvent('popstate')
                window.dispatchEvent(navEvent)
            }).catch(function (error) {
                alert('Authentication Failed... Please try again', error)
                setButtonVal('Register')
                console.log(error); 
        })
        } else {
            alert('Incorrect code')
            setButtonVal('Register')
        }
    };

    const sendCode = () => {
        emailjs.send('gmail-react', 'template_ahlb4b3', 
            {
                _email: email,
                _code: localStorage.getItem('code'),
            }, '-ULgQTRPj8f-lNNg0')
            .then(function() {
                console.log('Sent')
            }, function() {
                alert('Authentication failed... please try again')
            }
        );
    }

    const searchUrl = `https://v1.nocodeapi.com/tuxa/google_sheets/xQtvMBfFFgfpISRL/search?tabId=Sheet1&searchKey=Email&searchValue=${email}`
    const checkEmail = () => {
        axios({
            method: 'get',
            url: searchUrl, 
            params: {},
        }).then(function (response) {
            console.log(response)
            if (response.data.length !== 0) {
                setEmailAvaible(false)
                setPopupValue(false)
                alert('Email already registered..')
            } else {
                setEmailAvaible(true)
            }
        }).catch(function () {
            console.log('Network problem')
        })
    }

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                checkEmail()
                if (password === rPassword && password.length > 7 && emailAvaible) {
                    sendCode ()
                    setPopupValue(true)
                } else {
                    if (emailAvaible) {
                        sendCode ()
                        setPopupValue(true)
                    } else {
                        console.log('latter email')
                    }
                }
            }} className="ui form">
                <h2 className="title">Register</h2>
                <div className="field">
                    <label>Username:</label>
                    <input required type="text" placeholder="John Doe" onChange={e => setName(e.target.value)} value={name}/>
                </div>
                <div className="field">
                    <label>Email:</label>
                    <input required type="email" placeholder="example@service.com" onChange={e => setEmail(e.target.value)} value={email}/>
                </div>
                <div className="field">
                    <label>Password:</label>
                    <input required type="password" onChange={e => setPassword(e.target.value)} value={password}/>
                </div>
                <div className="field">
                    <label>Repeat Password:</label>
                    <input required type="password" onChange={e => setRPassword(e.target.value)} value={rPassword}/>
                </div>
                
                <button className="ui submit button green">{buttonVal}</button>
                <button type="button" onClick={() => setFormState(!formState)} className="ui button">Cancel</button>
                <span>Already registered? <a style={{cursor: 'pointer'}} onClick={() => setFormState(!formState)}>Login Here!</a></span>
            </form>

            { popupValue ? <Popup title='Enter Confirmation Code' icon='hashtag' placeholder='Code' label='Please check your email' onCancelClick={() => setPopupValue(false)} onChangeHandler={setCode} onSubmitClick={__sendEmail} /> : null }
        </div>
    )
}

export default Register;    
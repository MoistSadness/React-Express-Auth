import React, { useState, useRef, useEffect } from "react";
import { redirect } from "react-router-dom";
import axios from '../../../api/axios.js'

import './Access.css'
import 'material-icons/iconfont/material-icons.css';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register'

export default function Register() {
    const userRef = useRef()
    const errRef = useRef()

    const [username, setUsername] = useState('')
    const [isValidUsername, setIsValidUsername] = useState(false)
    const [isUserFocused, setIsUserFocused] = useState(false)

    const [password, setPassword] = useState('')
    const [isValidPassword, setIsValidPassword] = useState(false)
    const [isPasswordFocused, setIsPasswordFocused] = useState(false)

    const [matchingPassword, setMatchingPassword] = useState('')
    const [isValidMatch, setIsValidMatch] = useState(false)
    const [isMatchFocused, setIsMatchFocused] = useState(false)

    console.log(username, ' ', password)

    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState('')

    // Set the focus to the username field when the component loads
    useEffect(() => {
        userRef.current.focus()
    }, [])

    // Validate the username to make sure it matches the field. 
    useEffect(() => {
        const result = USER_REGEX.test(username)
        console.log(result)
        setIsValidUsername(result)
        console.log(isValidUsername)
    }, [username])

    // Validate the password and matching password to make sure it matches the field. 
    // Check if the password and matching password fields are a match
    useEffect(() => {
        // Validate password
        const result = PWD_REGEX.test(password)
        console.log(result)
        setIsValidPassword(result)
        // Check for match
        const match = password === matchingPassword
        setIsValidMatch(match)
    }, [password, matchingPassword])

    // Clear any error messages when the user makes a change to any of the fields
    useEffect(() => {
        setErrMsg('')
    }, [username, password, matchingPassword])

    const handleSubmit = async (event) => {
        event.preventDefault()
        const v1 = USER_REGEX.test(username)
        const v2 = PWD_REGEX.test(password)
        if (!v1 || !v2) { setErrMsg('Invalid Entry'); return; }

        try {
            const response = await axios.post(REGISTER_URL,
                JSON.stringify({ username, password }),
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            );
            //console.log(response)
            setSuccess(true)
            //clear input fields

        } catch (error) {
            console.log(error)
            //If there is no response from the server: ie. internet connection fails
            switch (error?.response?.status) {
                case 409:
                    setErrMsg(error.response.data)
                    break;
                default:
                    setErrMsg('No server response')
                    break;
            }
            errRef.current.focus()
        }
    }

    return (
        <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h3>Register</h3>
            <form className="form-body" onSubmit={handleSubmit}>
                <label htmlFor="username">
                    Username:
                    <span className={isValidUsername ? "valid" : "hide"}>
                        <span className="material-icons-sharp">check</span>
                    </span>
                    <span className={isValidUsername || !username ? "hide" : "invalid"}>
                        <span className="material-icons-sharp">close</span>
                    </span>
                    <input
                        type="text"
                        id="username"
                        ref={userRef}
                        autoComplete="off"
                        value={username}
                        onChange={(event) => (setUsername(event.target.value))}
                        required
                        aria-invalid={isValidUsername ? 'false' : 'true'}
                        aria-describedby='uidnote'
                        onFocus={() => setIsUserFocused(true)}
                        onBlur={() => setIsUserFocused(false)}
                    />
                    <p id="uidnote" className={isUserFocused && username && !isValidUsername ? "instructions" : "offscreen"}>
                        <span className="material-icons-sharp">info</span>
                        4 to 24 characters. <br />
                        Must begin with a letter. <br />
                        Letters, numbers, hyphens and underscores allowed.
                    </p>
                </label>

                <label htmlFor="password">
                    Password:
                    <span className={isValidPassword ? "valid" : "hide"}>
                        <span className="material-icons-sharp">check</span>
                    </span>
                    <span className={isValidPassword || !password ? "hide" : "invalid"}>
                        <span className="material-icons-sharp">close</span>
                    </span>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(event) => (setPassword(event.target.value))}
                        required
                        aria-invalid={isValidPassword ? 'false' : 'true'}
                        aria-describedby='pwdnote'
                        onFocus={() => setIsPasswordFocused(true)}
                        onBlur={() => setIsPasswordFocused(false)}
                    />
                    <p id="pwdnote" className={isPasswordFocused && password && !isValidPassword ? "instructions" : "offscreen"}>
                        <span className="material-icons-sharp">info</span>
                        8 to 24 characters.<br />
                        Must include uppercase and lowercase letters, a number and a special character.<br />
                        Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                    </p>
                </label>

                <label htmlFor="matching_password">
                    Confirm Password:
                    <span className={isValidMatch && matchingPassword ? "valid" : "hide"}>
                        <span className="material-icons-sharp">check</span>
                    </span>
                    <span className={isValidMatch || !matchingPassword ? "hide" : "invalid"}>
                        <span className="material-icons-sharp">close</span>
                    </span>
                    <input
                        type="password"
                        id="matching_password"
                        value={matchingPassword}
                        onChange={(event) => (setMatchingPassword(event.target.value))}
                        required
                        aria-invalid={isValidMatch ? 'false' : 'true'}
                        aria-describedby='confirmnote'
                        onFocus={() => setIsMatchFocused(true)}
                        onBlur={() => setIsMatchFocused(false)}
                    />
                    <p id="confirmnote" className={isMatchFocused && password && !isValidMatch ? "instructions" : "offscreen"}>
                        <span className="material-icons-sharp">info</span>
                        Must match the first password input field.
                    </p>
                </label>

                <button onClick={handleSubmit} disabled={!isValidUsername || !isValidPassword || !isValidMatch ? true : false}>
                    Submit
                </button>
            </form>
            <h4>Already have an account? Login here!</h4>
        </section>
    )
}
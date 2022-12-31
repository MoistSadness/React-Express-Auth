import React, { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../../../context/AuthProvider";
import axios from '../../../api/axios.js'
import './Access.css'

const LOGIN_URL = '/login'

export default function Login() {
    const { setAuth } = useContext(AuthContext)

    const userRef = useRef()
    const errRef = useRef()         // Sets focus on error message

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)

    // Used to set focus on username field when component loads for the first time
    useEffect(() => {
        userRef.current.focus()
    }, [])

    // If the user edits username or password, clear any error messages
    useEffect(() => {
        setErrMsg('')
    }, [username, password])

    const handleSubmit = async (e) => {
        e.preventDefault()

        //console.log(username, ' ', password)

        try {
            const response = await axios.post(
                LOGIN_URL,
                JSON.stringify({ username, password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            )
            console.log(JSON.stringify(response))
            const accessToken = response?.data?.accessToken
            const roles = response?.data?.roles
            
            setAuth({ username, password, accessToken, roles })
        } catch (error) {
            //console.log(error.response)
            switch (error?.response?.status) {
                case 400:
                    setErrMsg("Missing username or password")
                    break;
                case 401:
                    //setErrMsg("Unauthorized")
                    setErrMsg(error.response.data.message)
                    break;
                case 200:
                    //setErrMsg('Success!')
                    setErrMsg(error.response.data.message)
                    // Redirect to homepage
                    break;
                default:
                    setErrMsg("Login Failed")
                    break;
            }
            errRef.current.focus()
        }
    }

    return (
        <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h3>Log In</h3>
            <form className="form-body" onSubmit={handleSubmit}>
                <label htmlFor="username">
                    Username:
                    <input
                        type="text"
                        id="username"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        required
                    />
                </label>
                <label htmlFor="password">
                    Password:
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                    />
                </label>
                <button>Log In</button>
            </form>
            <h4>Don't have an account? Register here!</h4>
        </section>
    )
}
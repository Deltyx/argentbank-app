import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { setCredentials } from '../../features/auth/authSlice.js'
import { useLoginMutation } from '../../features/auth/authApiSlice.js'

import './sign_in_form.scss'

export default function SignInForm() {

    const userRef = useRef()
    const errRef = useRef()
    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const navigate = useNavigate()

    const [checkBox, toggleCheckBox] = useState(false);    

    const [login, { isLoading } ] = useLoginMutation()
    const dispatch = useDispatch()

    useEffect(() => {
        userRef.current.focus()
        if(localStorage.remember) {
            setUser(localStorage.email)
        }
    },[])

    useEffect(() => {
        setErrMsg('')
    },[user, pwd])
    
    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            const userData = await login({ email: user, password: pwd }).unwrap()
            if(checkBox) {
                localStorage.remember = true
            } else {
                localStorage.removeItem('token')
                localStorage.removeItem('email')
                localStorage.removeItem('id')
                localStorage.removeItem('remember')
            }
            dispatch(setCredentials({...userData, user}))
            navigate('/user')
        } catch (err) {
            if(!err?.status) {
                setErrMsg('No Server Response')
            } else if (err.status === 400) {
                setErrMsg('Wrong Username or Password')
            } else if (err.status === 401) {
                setErrMsg('Unauthorized') 
            } else (
                setErrMsg('Login Failed')
            )
            errRef.current.focus();
        }
    }

    const handleCheckBox = () => {
        toggleCheckBox(!checkBox)
    }

    return ( 
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form onSubmit={submitHandler}>
            <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input 
                    ref={userRef}
                    type="text" 
                    id="username"
                    value={user} 
                    onChange={(e) => setUser(e.target.value)}
                    required
                />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    id="password" 
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)}
                    required
                />
            </div>
            <div className="input-remember">
                <input 
                    type="checkbox" 
                    id="remember-me"
                    checked={checkBox} 
                    onChange={handleCheckBox}
                />
                <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button">Sign In</button>
            <p ref={errRef}>{errMsg}</p>
            </form>
        </section>
    )
}
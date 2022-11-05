import SignInForm from '../../components/sign_in_form/sign_in_form';

import { useEffect } from 'react';
import { setUserInfo } from '../../features/auth/authSlice';
import { useDispatch } from 'react-redux';

import './sign_in.scss';

export default function SignIn() {

    const dispatch = useDispatch()

    useEffect(() => {
        if(localStorage.remember) {
            const userData = { 
                firstName: localStorage.firstName, 
                lastName: localStorage.lastName, 
                email: localStorage.email, 
                id: localStorage.id
            }
            dispatch(setUserInfo({...userData, userData}))
        }
    })

    return ( 
        <main className="main bg-dark">
            <SignInForm />
        </main>
    )
}
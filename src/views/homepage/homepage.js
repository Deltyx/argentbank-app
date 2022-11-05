import Features from "../../components/features/features";
import Hero from "../../components/hero/hero";

import { setUserInfo } from "../../features/auth/authSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";


import './homepage.scss';

export default function Homepage() {

    const dispatch = useDispatch()

    useEffect(() => {
        if(localStorage.remember === true) {
            console.log(localStorage.remember)
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
        <main className="homepage">
            <Hero />
            <Features />
        </main>
    )
}
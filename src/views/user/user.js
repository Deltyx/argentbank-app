import './user.scss';

import Account from '../../components/account/account';
import UserHeader from '../../components/user_header/user_header';
import { useEffect } from 'react'
import { useGetUserProfileQuery } from '../../features/auth/authApiSlice';
import { setUserInfo } from '../../features/auth/authSlice.js'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

export default function User() {
    const token = useSelector(state => state.auth.token)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const userInfo = useGetUserProfileQuery()

    useEffect(() => {
        if(!token) {
            navigate('/')
        }
    })

    useEffect(() => {
        if(userInfo && userInfo.currentData){
            const userData = { 
                firstName: userInfo.currentData.body.firstName, 
                lastName: userInfo.currentData.body.lastName, 
                email: userInfo.currentData.body.email, 
                id: userInfo.currentData.body.id 
            }
            dispatch(setUserInfo({...userData, userData}))

            if(localStorage.remember) {
                localStorage.email = userData.email
                localStorage.id = userData.id
                localStorage.token = token
            }
            console.log(userInfo)
            console.log(userData)
        }
    },[userInfo])

    return ( 
        <main className="main bg-dark">
            <UserHeader />
            <h2 className="sr-only">Accounts</h2>
            <Account title={"Argent Bank Checking (x8349)"} amount={"$2,082.79"}/>
            <Account title={"Argent Bank Savings (x6712)"} amount={"$10,928.42"}/>
            <Account title={"Argent Bank Credit Card (x8349)"} amount={"$184.30"}/>
        </main>
    )
}
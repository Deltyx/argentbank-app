import './user.scss';

import Account from '../../components/account/account';
import UserHeader from '../../components/user_header/user_header';
import { useState, useEffect } from 'react'
import { useGetUserProfileQuery } from '../../features/auth/authApiSlice';
import { setUserInfo } from '../../features/auth/authSlice.js'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

export default function User() {
    const [userFirstName, setUserFirstName] = useState('')
    const [userLastName, setUserLastName] = useState('')

    const token = useSelector(state => state.auth.token)
    const user = useSelector(state => state.auth.user)
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
            setUserFirstName(userInfo.currentData.body.firstName)
            setUserLastName(userInfo.currentData.body.lastName)
            dispatch(setUserInfo({...userInfo, userInfo}))
            console.log(userInfo.currentData)
            console.log(user)
        }
    },[userInfo])

    return ( 
        <main className="main bg-dark">
            <UserHeader firstName={userFirstName} lastName={userLastName}/>
            <h2 className="sr-only">Accounts</h2>
            <Account title={"Argent Bank Checking (x8349)"} amount={"$2,082.79"}/>
            <Account title={"Argent Bank Savings (x6712)"} amount={"$10,928.42"}/>
            <Account title={"Argent Bank Credit Card (x8349)"} amount={"$184.30"}/>
        </main>
    )
}
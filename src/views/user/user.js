import Account from '../../components/account/account';
import UserHeader from '../../components/user_header/user_header';
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { useGetUserProfileQuery } from '../../features/auth/authApiSlice';

import './user.scss';


export default function User() {
    const [userFirstName, setUserFirstName] = useState('')
    const [userLastName, setUserLastName] = useState('')

    const userInfo = useGetUserProfileQuery()
    console.log(userInfo.currentData)

    useEffect(() => {
        if(userInfo){
            setUserFirstName(userInfo.currentData.body.firstName)
            setUserLastName(userInfo.currentData.body.lastName)
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
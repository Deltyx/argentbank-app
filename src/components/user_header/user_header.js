import './user_header.scss'

import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useUpdateUserInfoMutation } from '../../features/auth/authApiSlice'
import { setUserInfo } from '../../features/auth/authSlice'

export default function UserHeader() {
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()

    const [newFirstName, setNewFirstName] = useState()
    const [newLastName, setNewLastName] = useState()

    const [editButton, toggleEditButton] = useState()
    const [userInfo, { isLoading }] = useUpdateUserInfoMutation()

    const editInfoButton = (e) => {
        e.preventDefault()
        toggleEditButton((current) => !current)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        console.log("pouet")
    }

    const updateUserInfo = async (e) => {
        console.log("HOLA")
        e.preventDefault()
        try {
            const userInfoUpdate = await userInfo({firstName: newFirstName, lastName: newLastName })
            const userUserData = { 
                firstName: userInfoUpdate.data.body.firstName, 
                lastName: userInfoUpdate.data.body.lastName, 
                email: userInfoUpdate.data.body.email, 
                id: userInfoUpdate.data.body.id 
            }
            if(userInfoUpdate.data.status === 200) {
                dispatch(setUserInfo({...userUserData, userUserData}))
                localStorage.firstName = userUserData.firstName
                localStorage.lastName = userUserData.lastName
            }
            console.log(userInfoUpdate)
            console.log(user)

        } catch (err) {
            console.log(err)
        }
        toggleEditButton((current) => !current)
    }    


    return ( 
        <>
            {!editButton ? (
                <div className="header">
                    <h1>Welcome back<br />{user && user.firstName} {user && user.lastName}{"!"}</h1>
                    <button onClick={editInfoButton} className="edit-button">Edit Name</button>
                </div>
            ) : (
            <div className="header">
                <h1>Welcome back
                    <form className="editNameContent" onSubmit={submitHandler}>
                        <div className="editNameInputs">
                            <input
                                type="text"
                                placeholder={user && user.firstName}
                                onChange={(e) => setNewFirstName(e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                placeholder={user && user.lastName}
                                onChange={(e) => setNewLastName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="editNameButtons">
                            <button className="edit-button" onClick={updateUserInfo} type="submit">Save</button>
                            <button className="edit-button" onClick={editInfoButton}>Cancel</button>
                        </div>
                    </form>
                </h1>
              </div>
            )}
        </>
    )
}
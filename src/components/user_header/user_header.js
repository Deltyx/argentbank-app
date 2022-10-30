import './user_header.scss'

import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createPath } from 'react-router-dom'

export default function UserHeader(props) {

    const token = useSelector((state) => state.auth.token)

    const [newFirstName, setNewFirstName] = useState()
    const [newLastName, setNewLastName] = useState()

    const [editButton, toggleEditButton] = useState()

    const editInfoButton = (e) => {
        e.preventDefault()
        toggleEditButton((current) => !current)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        console.log("pouet")
    }

    return ( 
        <>
            {!editButton ? (
                <div className="header">
                    <h1>Welcome back<br />{props.firstName} {props.lastName}{"!"}</h1>
                    <button onClick={editInfoButton} className="edit-button">Edit Name</button>
                </div>
            ) : (
            <div className="header">
                <h1>Welcome back</h1>
                <form className="editNameContent" onSubmit={submitHandler}>
                    <div className="editNameInputs">
                        <input
                            type="text"
                            placeholder={props.firstName}
                            onChange={(e) => setNewFirstName(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder={props.lastName}
                            onChange={(e) => setNewLastName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="editNameButtons">
                        <button className="edit-button" type="submit">Save</button>
                        <button className="edit-button" onClick={editInfoButton}>Cancel</button>
                    </div>
                </form>
              </div>
            )}
        </>
    )
}
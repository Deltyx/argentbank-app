import './user_header.scss'

export default function UserHeader(props) {
    return ( 
        <div className="header">
            <h1>Welcome back<br />{props.firstName} {props.lastName}{"!"}</h1>
            <button className="edit-button">Edit Name</button>
        </div>
    )
}
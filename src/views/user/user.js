import UserHeader from '../../components/user_header/user_header';

import './user.scss';

export default function User() {
    return ( 
        <main className="main bg-dark">
            <UserHeader firstName={"Tony"} lastName={"Jarvis"}/>
        </main>
    )
}
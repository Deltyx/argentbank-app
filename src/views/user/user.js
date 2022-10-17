import Account from '../../components/account/account';
import UserHeader from '../../components/user_header/user_header';

import './user.scss';

export default function User() {
    return ( 
        <main className="main bg-dark">
            <UserHeader firstName={"Tony"} lastName={"Jarvis"}/>
            <h2 class="sr-only">Accounts</h2>
            <Account title={"Argent Bank Checking (x8349)"} amount={"$2,082.79"}/>
            <Account title={"Argent Bank Savings (x6712)"} amount={"$10,928.42"}/>
            <Account title={"Argent Bank Credit Card (x8349)"} amount={"$184.30"}/>
        </main>
    )
}
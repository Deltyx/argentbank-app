import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { logOut } from '../../features/auth/authSlice';

import logo from '../../img/argentBankLogo.png';
import './navbar.scss';

export default function Navbar() {

  let navigate = useNavigate()
  const dispatch = useDispatch()
  const token = useSelector(state => state.auth.token)
  const user = useSelector(state => state.auth.user)

  const logoutHandler = () => {
    dispatch(logOut())
    navigate('/')
  }

  return (      
    <nav className='main-nav'>
        <Link to='/' className="main-nav-logo">
            <img
                className="main-nav-logo-image"
                src={logo}
                alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
        </Link>
        {!token ? (
          <Link to='/sign-in' className="main-nav-item">
            <i className="fa fa-user-circle"></i>
              Sign In
          </Link>
        ) : ('')}
        {token ? (
          <span>
            <Link to='/user' className="main-nav-item">
              <i className="fa fa-user-circle"></i>
                {user && user.firstName}
            </Link>
            <Link onClick={logoutHandler} to='/sign-in' className="main-nav-item">
              <i className="fa fa-sign-out"></i>
                Sign Out
            </Link>
          </span>
        ) : ('')}

    </nav>
  );
}
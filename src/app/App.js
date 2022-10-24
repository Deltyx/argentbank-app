import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from '../store.js';

import Navbar from '../components/navbar/navbar';
import Homepage from '../views/homepage/homepage';
import Footer from '../components/footer/footer';
import SignIn from '../views/sign_in/sign_in';
import User from '../views/user/user';

export default function App() {
    return (
      <Router>
        <Provider store={store}>
          <Navbar/>
          <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/user" element={<User />} />
          </Routes>
          <Footer />
        </Provider>
      </Router>
    );
}
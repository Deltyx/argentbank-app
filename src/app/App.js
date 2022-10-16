import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from '../components/navbar/navbar';
import Homepage from '../views/homepage/homepage';
import Footer from '../components/footer/footer';

export default function App() {
    return (
      <Router>
          <Navbar/>
          <Routes>
              <Route path="/" element={<Homepage />} />
          </Routes>
          <Footer />
      </Router>
    );
}
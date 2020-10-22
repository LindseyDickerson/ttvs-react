import React from 'react';
import './App.css';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import { BrowserRouter as Router } from 'react-router-dom';
import Logo from './Assets/bannerWhiteBG.png';


function App() {
  return (
    <div className="App">
      <img src={Logo} alt="logo" className="tulipLogo"></img>
      <Router>
        <Navbar />
      </Router>
      <Footer />
    </div>
  );
}

export default App;

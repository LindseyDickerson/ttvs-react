import React from 'react';
import './App.css';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import { BrowserRouter as Router } from 'react-router-dom';
import Logo from './Assets/websiteheader.png';


function App() {
  return (
    <div className="App">
      {/* <div className="logoDiv">
        <img src={Logo} alt="logo" className="tulipLogo"></img>
      </div> */}
      <Router>
        <Navbar />
      </Router>
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Link, Switch} from 'react-router-dom';

import Home from './Home';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';

function Navbar() {
    return (
      <div className="Navbar">
       <div className="navbar-list-styling">
           <ul className="navbar-list list-unstyled" id="navbar">
               <li><Link to="/">Home</Link></li>
               <li><Link to="/about">About</Link></li>
               <li><Link to="/services">Services</Link></li>
               <li><Link to="/portfolio">Portfolio</Link></li>
               <li><a href="https://www.honeybook.com/widget/tenacious_tulip_virtual_services_164228/cf_id/5f74e9d6717a6a709e43fb84" target="_blank" rel="noopener noreferrer">Contact</a></li>
               <li><a href="https://ttvs.hbportal.co/app/" target="_blank" rel="noopener noreferrer">Customer Portal</a></li>
           </ul>
       </div>
       <div className="navbar-route">
           <Switch>
               <Route exact path="/"><Home /></Route>
               <Route exact path="/about"><About/></Route>
               
           </Switch>
       </div>
      </div>
    );
  }
  
  export default Navbar;
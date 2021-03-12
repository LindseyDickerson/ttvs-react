import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Link, Switch} from 'react-router-dom';
// import {
//     Collapse,
//     Navbar,
//     NavbarToggler,
//     NavbarBrand,
//     Nav,
//     NavItem,
//     NavLink,
//     UncontrolledDropdown,
//     DropdownToggle,
//     DropdownMenu,
//     DropdownItem,
//     NavbarText
//   } from 'reactstrap';

import Home from './Home';
import About from './About';
// import Services from './Services';
import Portfolio from '../Assets/SocialMediaContentPortfolio.pdf';
import Logo from '../Assets/TTVS.Logo.png';

function NavbarComponent(props) {
    // const [isOpen, setIsOpen] = useState(false);

    // const toggle = () => setIsOpen(!isOpen);

    return (
      <div className="Navbar">
       <div className="navbar-list-styling">
           <img src={Logo} alt="logo" className="logo"></img>
           <div className="navbarDiv">
           <ul className="navbar-list list-unstyled" id="navbar">
               {/* <li><img src={Logo} alt="logo" className="logo"></img></li> */}
               <li><Link to="/">Home</Link></li>
               <li><Link to="/about">About</Link></li>
               {/* <li><Link to="/services">Services</Link></li> */}
               <li><Link to={Portfolio} target="_blank" rel="noopener noreferrer">Portfolio</Link></li>
               <li><a href="https://tenacioustulipvs.wordpress.com/" target="_blank" rel="noopener noreferrer">Blog</a></li>
               <li><a href="https://www.honeybook.com/widget/tenacious_tulip_virtual_services_164228/cf_id/5f74e9d6717a6a709e43fb84" target="_blank" rel="noopener noreferrer">Contact</a></li>
               <li><a href="https://ttvs.hbportal.co/schedule/5fbc8c58530b512baefe9706" target="_blank" rel="noopener noreferrer">Schedule A Consultation</a></li>
               <li><a href="https://ttvs.hbportal.co/app/" target="_blank" rel="noopener noreferrer">Customer Portal</a></li>
               <li><a href="https://www.etsy.com/shop/tenacioustulipdecals" target="_blank" rel="noopener noreferrer">Etsy Shop</a></li>
           </ul>
           </div>
       </div>
       <div className="navbar-route">
           <Switch>
               <Route exact path="/"><Home /></Route>
               <Route exact path="/about"><About/></Route>
               {/* <Route exact path="/services"><Services/></Route> */}
               
           </Switch>
       </div>
      </div>
    );
  }
  
  export default NavbarComponent;
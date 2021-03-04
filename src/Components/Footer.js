import React from 'react';

import Logo from '../Assets/TTVS.Logo.png';
import FBIcon from '../Assets/1.png';
import InstaIcon from '../Assets/11.png';
import TwitterIcon from '../Assets/2.png';
import PinIcon from '../Assets/12.png';
import LinkedInIcon from '../Assets/13.png';


function Footer() {
    return (
      <div className="footer">
        <div className="footerLogoDiv">
          <img src={Logo} alt="Logo" id="footerLogo" />
        </div>
        <div>
          <h5 className="ttvsFooter">  
            Tenacious Tulip, LLC 2021©
          </h5>
          <div className="footerLinks">
            <ul className="socialsFooter">
              <li><a href="https://www.facebook.com/tenacioustulipvs" target="_blank" rel="noopener noreferrer"><img src={FBIcon} alt="Facebook Link" className="socialIconFooter"/></a></li>
              <li><a href="https://www.instagram.com/tenacioustulipvs/" target="_blank" rel="noopener noreferrer"><img src={InstaIcon} alt="Instagram Link" className="socialIconFooter"/></a></li>
              <li><a href="https://twitter.com/tenacious_tulip" target="_blank" rel="noopener noreferrer"><img src={TwitterIcon} alt="Twitter Link" className="socialIconFooter"></img></a></li>
              <li><a href="https://www.pinterest.com/tenacioustulipvs/_created/" target="_blank" rel="noopener noreferrer"><img src={PinIcon} alt="Pinterest Link" className="socialIconFooter"/></a></li>
              <li><a href="https://www.linkedin.com/in/lindseydickerson2/" target="_blank" rel="noopener noreferrer"><img src={LinkedInIcon} alt="LinkedIn Link" className="socialIconFooter"/></a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  export default Footer;
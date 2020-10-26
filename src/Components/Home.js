import React from 'react';
import { Parallax } from 'react-scroll-parallax';

// import Hourglass from '../Assets/hourGlass.jpg';
// import TulipComputer from '../Assets/tulipComputer.jpg';


function Home() {

    return (
      <div className="Home">

        {/* <Parallax className="smParallax"></Parallax>   */}
        <div className="homeText">
            {/* <h1 className="headline" id="is">
                Is </h1> 
                <p id="socialMedia">Social Media</p>  */}
                <h1 className="headline" id="takingTime">Is social media taking time away from your business?
            </h1>
        </div>
        <Parallax className="homeParallax" >
        </Parallax>    
            <p className="homeBlurb" id="homeBlurb1"> Social media is rapidly changing. Keeping up with all the changes, hashtags, and replying to messages & comments is literally a full time job now! Don't let keeping up with social media get in the way of your business goals and priorities.</p>
        <Parallax className="tulipComputer">
        </Parallax>    
            <p className="homeBlurb" id='homeBlurb2'>Your business can thrive with social media management. It allows more time for you to focus on the core aspects of your business that need the most attention. Your online presence is a great way to reflect your business and help you achieve the growth you need to be successful.
            </p>
        <Parallax className="coffeeTulip">
        </Parallax>
        <div className="contactBlurb">
            <p className="homeBlurb" id="homeBlurb3">
                <a href="https://www.honeybook.com/widget/tenacious_tulip_virtual_services_164228/cf_id/5f74e9d6717a6a709e43fb84" target="_blank" rel="noopener noreferrer" id="contactMeLink"> Contact me today</a> so we can discuss your needs and vision for your online presence.
            </p>
        </div>
        <Parallax className="pinkWhiteTulip"></Parallax>
      </div>
    );
  }
  
  export default Home;
  
import React from 'react';
import {Parallax, ParallaxProvider } from 'react-scroll-parallax';

import BLM from '../Assets/BLM.png';
import LGBTQIA from '../Assets/LGBTQIAFriendly.png';

function About() {
    return (
      <div className="About">
        <h3 className="aboutHeadline">About Tenacious Tulip</h3>
        <Parallax className="aboutParallax1" >
        </Parallax>
      <p className="aboutBlurb">At Tenacious Tulip Virtual Services, customer service and online presence is the focus. I provide services to maintain an online presence. From website management,  to creating social media posts and interaction, I can help you. With over 20 years of customer service combined with skills such as web development and social media management, Tenacious Tulip can help you so that you can focus on the core aspects of your business.</p>
      <Parallax className="aboutParallax2">
      </Parallax>
      <p className="aboutBlurb">I've spent all of my career being customer focused. I spent over 13 years in the Property & Casualty industry in customer-facing roles, and after being downsized I took a completely different career path. I enrolled in Eleven Fifty Academy's JavaScript Web Deveopment program. This program challenged me in many ways. It taught me to think differently and sparked my creative side. Many might not think of coding as creative, however it is very much a creative process for me. From planning, writing the first line of code, putting the finishing touches, to publishing a site, I enjoy every minute of it.</p>
      <Parallax className="aboutParallax3">
      </Parallax>
      <p className="aboutBlurb">After losing my job during the Covid-19 pandemic, I decided to take a different route for my career. I've worked in many settings - large corporations, mid-size and small companies. I found work-life balance unachievable. I needed to be present for my family while still providing for them. I decided I needed to write my own path. So after much thought and consideration, I set out to do what I love - website development. I also have another interest that I wanted to pursue - social media management. 
      </p>
      <Parallax className="aboutParallax4"></Parallax>
      
      <p className="aboutBlurb">I've loved social media since the beginning - yep, MySpace. I was an early adopter of Facebook, Twitter, and Instagram. I discovered how valuable social media marketing can be. I began learning as much as I could about social media management. So often online presence goes hand in hand - website and social media must remain consistent in branding and message. I am happy to ensure that your branding and voice is consistent in your online presence.</p>
      <Parallax className="aboutParallax5"></Parallax>
      <p className="aboutBlurb">In my personal time, I enjoy cooking, reading, and spending time with my husband, daughter, and our two cats. I love learning new skills. I also like to volunteer my time to organizations that combat food insecurity.
      </p>
      <div className="nonNegotiables">
        <h3 className="nnBlurb">I am proud to stand with those in the BIPOC and LGBTQIA+ community in solidarity.</h3>
        <br/>
        <div className="nnImageDiv">
          <img src={BLM} className="nnimages" alt="Black Lives Matter" id="blm"/>
          <img src={LGBTQIA} className="nnimages" alt="LGBTQIA Friendly" />
        </div>
      </div>
      </div>
    );
  }
  
  export default About;
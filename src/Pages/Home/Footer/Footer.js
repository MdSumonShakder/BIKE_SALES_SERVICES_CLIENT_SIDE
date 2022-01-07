import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import Bounce from 'react-reveal/Bounce';

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="container">
        <div className="row">
          <div className="all col-md-6 col-12">
            <div className="footer-logo">
             
              <p>The v3.0 has undergone changes as compared to the previous version in the cases of the updated bodywork and engine, now features VVA technology, assist and slipper clutch, hazard lamp, inverted front suspension fork, all-LED lighting system, full LCD panelmeter with shift indicator and wider tyres !!!</p>
            </div>

          </div>
          <div className="all col-md-6 col-12">
            <div className="tow-section">
              <div className="footer-all">
              <h5>Contact Us</h5>
              <ul>
                <li>Feel free to contact us if you have any question ???
                </li>
                <li>sumonshakder1996@gmail.com</li>
                <li>Gaidghat, Simakhali, Bagharpara, Jessore, Khulna, Bangladesh...</li>
              </ul>
            </div>
            <div className="footer-text">
                <h5>Our Special  Services</h5>
                <ul>
                <li>Free Servicing ,</li>
                  <li>Free Delivery ,,</li>
                  <li>10 Litre Free Petrol...</li>
                </ul>
              </div>
            </div>


          </div> 
        </div>
        <div className="icon text-center">
        <Bounce left cascade>
        <a target="_blank" href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} /></a>
        </Bounce>
        <Bounce top cascade>
        <a target="_blank" href="https://twitter.com/home"><FontAwesomeIcon icon={faTwitter} /></a>
        </Bounce>
        <Bounce bottom cascade>
        <a target="_blank" href="https://www.linkedin.com/feed/"><FontAwesomeIcon icon={faLinkedin} /></a>
        </Bounce>
        <Bounce top cascade>
        <a target="_blank" href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a>
        </Bounce>
        <Bounce bottom cascade>
        <a target="_blank" href="https://github.com/"><FontAwesomeIcon icon={faGithub} /></a>
        </Bounce>
        <Bounce right cascade>
        <a target="_blank" href="https://www.youtube.com/channel/UCLD9CflKsqVox6JZLbKpt0Q"><FontAwesomeIcon icon={faYoutube} /></a>
        </Bounce>
        
         
        </div>
      </div>
    </div>


  );
};

export default Footer;
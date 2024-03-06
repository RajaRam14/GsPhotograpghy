import React from 'react';
import './contact.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from '../footer';
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
const Contact = () => {
    return (
        <>
        <div className="contact-container">
            
            <div className="contact-form-contact">
                 <i><p className='contact-text'> Ready to capture moment with us ? </p> </i>  
                <div className="form-field-contact">
                    <input type="text" placeholder="Your Name" />
                </div>
                <div className="form-field-contact">
                    <input type="email" placeholder="Your Email" />
                </div>
               
                <div className="form-field-contact">
                    <textarea rows="1" placeholder="Your Message"></textarea>
                </div>
                <div className="form-field-contact">
                    <select>
                        <option>Service Type</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                    </select>
                </div>
                <hr />
                <button className='contact-form-button-contact'>Book Now</button>
            </div>
            <div className="contact-info">
                <div className="contact-details-contact">
                    <div className='contact-info-contact'>
                      <p className='very-small-font-contact yellow'>GSPhotography</p>
                      <u><p className='big-font-contact antiquewhite'>example@example.com</p></u>  
                      <p className='big-font-contact antiquewhite'>+1234567890</p>
                    </div>
                    <div className="social-info-contact">
                         <p className='very-small-font yellow'>Contact with us on social media</p>
                         <div className='social-icons-contact'>
                                <a href="https://www.youtube.com/@gsphotography01"    className="youtube social" target="_blank">
                                    <FontAwesomeIcon icon={faYoutube} size="1x" />
                                </a>
                                <a href="https://www.facebook.com/"  className="facebook social" target="_blank">
                                    <FontAwesomeIcon icon={faFacebook} size="1x" />
                                </a>
                                <a href="https://www.instagram.com/"  className="instagram social" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} size="1x" />
                                </a>
                                <a href="https://www.twitter.com/" className="twitter social" target="_blank">
                                    <FontAwesomeIcon icon={faTwitter} size="1x" />
                                </a> 
                         </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default Contact;

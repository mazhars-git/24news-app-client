import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../CSS/Footer.css';

const Footer = () => {
    return (
        <section className="footer pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1 style={{color: '#dc3545', fontSize:"40px", fontWeight: 'bold'}}>24News</h1>
                    </div>
                    <div className="col-md-6">
                        <ul className="d-flex justify-content-end social-icon">
                            <li><a href="https://www.facebook.com" target="_blank"><FontAwesomeIcon icon={faFacebook}/></a></li>
                            <li><a href="https://www.twitter.com" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a></li>
                            <li><a href="https://www.instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a></li>
                            <li><a href="https://www.youtube.com" target="_blank"><FontAwesomeIcon icon={faYoutube}/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <p className="text-center">Copyright &copy; 2021, All rights reserved by 24News.</p>
        </section>
    );
};

export default Footer;
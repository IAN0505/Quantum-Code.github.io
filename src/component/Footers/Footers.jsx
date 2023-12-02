import React from 'react';
import './Footers.css';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer>
        
      <div className="footer-col">
        <h3>Quantom Code</h3>
        <Link to="/Home"><li>Home</li></Link> 
        <Link to="/Course"><li>Course</li></Link> 
        <Link to="/Contact"><li>Contact</li></Link> 
        <Link to="/about"><li>About Us</li></Link> 
      </div>
      <div className="footer-col">
        <h3>Find Us</h3>
        <Link to="/Contact"><li>FAQ</li></Link> 
        <Link to="/Contact"><li>Contact</li></Link> 
        <Link to="/Contact"><li>Location</li></Link> 
        <Link to="/Contact"><li>Send Message</li></Link> 
      </div>
      <div className="footer-col">
        <h3>Trusted Company</h3>
        <Link to="/Home"><li>Apple</li></Link> 
        <Link to="/Home"><li>Samsung</li></Link> 
        <Link to="/Home"><li>Microsoft</li></Link> 
        <Link to="/Home"><li>Men in Black</li></Link> 
      </div>
      

      <div className="footer-col">
        <h3>Subscribe Now</h3>
        <p>Find Latest</p>
        <div className="subscribe">
          <input type="text" placeholder="Your Email Address" />
          <a href="#" className="aqua">SUBSCRIBE</a>
        </div>
      </div>
      <div className="copyright">
        <p>© 2023 Code Learning. All rights reserved. - Quantom Code</p>
        <div className="pro-links">
          <a href="your-facebook-url" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i></a>
          <a href="your-instagram-url" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i></a>
          <a href="your-twitter-url" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

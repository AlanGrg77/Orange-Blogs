import React from 'react';
import Logo from '../images/orange.png';

import { FaFacebook,FaGithub,FaInstagramSquare  } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={Logo} alt="Logo" />
          <h3>Orange Blogs</h3>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="icons">
          <FaFacebook size={20}/>
          <FaGithub size={20} />
          <FaInstagramSquare size={20} />
        </div>
        <p>&copy; {new Date().getFullYear()} Orange Blogs. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import './footer.css';
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">OLAMILEKAN</a>

      <ul className='footer_link'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">contacts</a></li>
        
      </ul>

      <div className="footer__social">
        <a href="https://twitter.com">
          <FaTwitter/>
        </a>
        <a href="https://instagram.com">
          <FaInstagram />
        </a>
        <a href="https://facebook.com">
          <BsFacebook />
        </a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; EGATOR.All rights reserved
        </small>
      </div>
    </footer>
  )
}

export default Footer

import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../asset/nurse1_y7bffa.png'
import HeaderSocial from './headerSocial';

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>OGUNKANMBI OLAMILEKAN</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header

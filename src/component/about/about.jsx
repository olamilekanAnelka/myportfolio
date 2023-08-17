import React from 'react';
import './about.css';
import ME from '../../asset/3.jpg'
import {BsAward} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'
import {AiFillFolder} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME}alt='about image'/>
          </div>

        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <BsAward className='about_icon'/>
              <h5>EXperience</h5>
              <small>6 months</small>
            </article>

            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>clients</h5>
              <small>5 </small>
            </article>

            <article className='about_card'>
              <AiFillFolder className='about_icon'/>
              <h5>projects</h5>
              <small>10+</small>
            </article>

           
          </div>
          <p>
          Hello, I'm Ogunkanmbi Olamilekan, a budding front-end developer 
          with a passion for creating visually appealing and 
          user-friendly websites. I believe in the power of 
          design and technology to make a positive impact on
           the digital world.
            </p>
            <a href="#contact" className='btn btn-primary'>Let's Chat</a>

          
        </div>
      </div>
    </section>
  )
}

export default About

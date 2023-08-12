import React from 'react';
import './about.css';
import ME from '../../asset/webstudio2.jpg'
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Error non minus, culpa aliquam optio doloremque ducimus
               iste sed quidem placeat molestias soluta
               odio beatae repudiandae doloribus nisi, id 
               officiis! Reiciendis!
            </p>
            <a href="#contact" className='btn btn-primary'>Let's Chat</a>

          
        </div>
      </div>
    </section>
  )
}

export default About

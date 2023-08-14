import React from 'react';
import './contact.css';
import {AiOutlineMail} from 'react-icons/ai'
import {FaTwitter} from 'react-icons/fa'
import {FaWhatsapp} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_zttp8aq', 
      'template_xk8xvf7', 
      form.current, 
      '2V_kOasnj9_i7dfmK')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };
  return (
    <section id='contact'>
     <h5>Get In Touch</h5>
     <h2>Contact Me</h2>

     <div className="container contact_container">
      <div className="contact_options">
        <article className="contact_option">
          <AiOutlineMail className='contact_option-icon' />
          <h4>EMAIL</h4>
          <h5>ogunkanbiolamilekan@gmail.com</h5>
          <a href="malito:ogunkanbiolamilekan@gmail.com" 
          target='_blank'>send a message</a>
        </article>
        <article className="contact_option">
          <FaTwitter  className='contact_option-icon' />
          <h4>TWITTER</h4>
          <h5>OLAMLEKAN</h5>
          <a href="https://twitter.com/anelka_ace" 
          target='_blank'>send a message</a>
        </article>
        <article className="contact_option">
          <FaWhatsapp  className='contact_option-icon'/>
          <h4>WHATSAPP</h4>
          <h5>+12456787654</h5>
          <a href="https://api.whatsapp.com/send?phone=2349077192520" 
          target='_blank'>send a message</a>
        </article>
      </div>

      <form ref={form} onSubmit={sendEmail}>
        <input type='text' name='name' placeholder='your full name' required/>
        <input type='email' name='email' placeholder='your Email' required/>
        <textarea name="message" id="" cols="30" rows="7" placeholder='youe message' required></textarea>
        <button type='submit' className='btn btn-primary'> Send Message</button>
      </form>
     </div>
    </section>
  )
}

export default Contact

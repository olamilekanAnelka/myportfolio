import React from 'react'
import './services.css'
import {BsFillCheckCircleFill} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='service'>
      <h5>What I Offer</h5>
      <h2>services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="services_head">
            <h3>Web developer</h3>
            </div>
            <ul className="service_list">
              <li>
                <BsFillCheckCircleFill className='service_list_icon'/>
                <p> Create websites that adapt gracefully to all devices</p>                
              </li>

              <li>
                <BsFillCheckCircleFill className='service_list_icon'/>
                <p> Design interfaces prioritizing user ease and engagement</p>                
              </li>

              <li>
                <BsFillCheckCircleFill className='service_list_icon'/>
                <p> Craft modern, structured, and stylish web content</p>                
              </li>

              <li>
                <BsFillCheckCircleFill className='service_list_icon'/>
                <p> Ensure consistent functionality across various web browsers</p>                
              </li>

              <li>
                <BsFillCheckCircleFill className='service_list_icon'/>
                <p>Speed up sites for seamless browsing and user satisfaction.</p>                
              </li>
            </ul>

        </article>
      </div>
    </section>
  )
}

export default Services

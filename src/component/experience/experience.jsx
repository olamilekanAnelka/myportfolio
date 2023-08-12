import React from 'react';
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills i Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details-icon'/>
                <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
                </div>
            </article>

            <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details-icon'/>
                <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
                </div>
            </article>

            <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details-icon'/>
                <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
                </div>
            </article>

            <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details-icon'/>
                <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
                </div>
            </article>

            <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details-icon'/>
                <div>
                <h4>React.Js</h4>
                <small className='text-light'>Experienced</small>
                </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

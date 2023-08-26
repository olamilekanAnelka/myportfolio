import React from 'react'
import './portfolio.css'
import IMG1 from '../../asset/gerichtwebpageimg.png'
import IMG2 from '../../asset/original-639ae7baeac33cc207e42324af05f63f.png'
import IMG3 from '../../asset/original-7c4aa0bc1cc733e4d3aaccaf43fd9206.png'
import IMG4 from '../../asset/original-cc855605d8a0338df48357d153d43322.png'
import IMG5 from '../../asset/original-d9f9e842e1a68a456e9c8e881c5f9e6c.jpg'
import IMG6 from '../../asset/still-7809a42777d0fe19127c98c8264546a5.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className='portfolio_item'>
          <div className="portfolio_item-img">
            <img src={IMG1} alt="" />
          </div>
          <h3>Gericht Reattaurant Webpage</h3>
            <div className="portfolio_item-cta">
            <a href="https://github.com/olamilekanAnelka/restaurantwebage.git" 
            className='btn'
            target='_blank'>
              Github
            </a>
           
            <a href="https://mygerichtrestaurant.netlify.app" 
            className='btn btn-primary'
            target='_blank'>
              live demo
            </a>
            </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-img">
            <img src={IMG2} alt="" />
          </div>
          <h3>This is a portfolo item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" 
            className='btn'
            target='_blank'>
              Github
            </a>
           
            <a href="https://dribbble.com/shots" 
            className='btn btn-primary'
            target='_blank'>
              live demo
            </a>
            </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-img">
            <img src={IMG3} alt="" />
          </div>
          <h3>This is a portfolo item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" 
            className='btn'
            target='_blank'>
              Github
            </a>
           
            <a href="https://dribbble.com/shots" 
            className='btn btn-primary'
            target='_blank'>
              live demo
            </a>
            </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-img">
            <img src={IMG4} alt="" />
          </div>
          <h3>This is a portfolo item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" 
            className='btn'
            target='_blank'>
              Github
            </a>
           
            <a href="https://dribbble.com/shots" 
            className='btn btn-primary'
            target='_blank'>
              live demo
            </a>
            </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-img">
            <img src={IMG5} alt="" />
          </div>
          <h3>This is a portfolo item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" 
            className='btn'
            target='_blank'>
              Github
            </a>
           
            <a href="https://dribbble.com/shots" 
            className='btn btn-primary'
            target='_blank'>
              live demo
            </a>
            </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-img">
            <img src={IMG6} alt="" />
          </div>
          <h3>This is a portfolo item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" 
            className='btn'
            target='_blank'>
              Github
            </a>
           
            <a href="https://dribbble.com/shots" 
            className='btn btn-primary'
            target='_blank'>
              live demo
            </a>
            </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio

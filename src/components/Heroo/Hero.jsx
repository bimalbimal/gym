import React from 'react'
import './Hero.css';
import Header from '../Header/Header';
import hero_image from '../../assets/hero_image.png'
import heart from '../../assets/heart.png'
import hero_image_back from '../../assets/hero_image_back.png'
import calories  from '../../assets/calories.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='left-h'>
        <Header/>
        {/*hero add*/}

        <div className='the-best-ad'>
          <div></div>
          <span>the best fitness club in the town</span>
        </div>
        {/*hero text*/}

        <div className='hero-text'>
          <div>
            <span className='strock-text'>shape </span>
            <span>your</span>
          </div>
          <div>
            <span>ideal body</span>
          </div>
          <div className='hhhh'>
            <span>In here we will help you to share and biuld your ideal body and live up your life fullest</span>
          </div>
        </div>
         {/*hero figure*/}
        <div className='figures' >
          <div>
            <span>+ 140</span>
            <span>expert coaches</span>

          </div>
          <div>
            <span>+ 978</span>
            <span>members joined</span>

          </div>
          <div>
            <span>+ 50</span>
            <span>fitness programs</span>

          </div>



        </div>
        <div className='hero-btn'>
          <button className='btn'>Get Started</button>
          <button className='btn'>Learn More</button>
        </div>
      </div>
      <div className='right-h'>
        <button className='btn'>Join Now</button>

        <div className='heart-rate'>
          <img src={heart} alt=''/>
          <span>Heart Rate</span>
          <span>116  bpm</span>
        </div>

        <img src={hero_image} alt='' className='hero-image'/>
        <img src={hero_image_back} alt='' className='hero-image-back'/>

        {/*calories*/}

        <div className='calories'>
          <img src={calories} alt=''/>
          <div>
           <span>calories burned</span>
           <span>220 kcal</span>
          </div>
          
          
        </div>
      </div>


    </div>
  )
}

export default Hero
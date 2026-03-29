import React from 'react'
import './Hero.css'
import hand_icon from '../assets/hand_icon.png'
import arrow_icon from '../assets/arrow.png'
import hero_image from '../assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left-side">
            <h2>New arrivals only</h2>
            <div>
                <div className="hero-icon">
                    <p>New</p>
                    <img src={hand_icon}alt=""/>
                </div>
                <p>Collection</p>
                <p>for everyone</p>
                <div className="hero-button">
                    <div>latest-collection</div>
                    <img src={arrow_icon}alt=""/>
                </div>
            </div>
        </div>
        <div className="hero-right-side">
            <img src={hero_image}alt=""/>
        </div>

    </div>


  )
}

export default Hero
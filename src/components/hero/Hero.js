import React from 'react'
import './Hero.css'

import Video from '../../assets/getaway-home.mp4'

const Hero = () => {
  return (
    <div className='hero'>
      <video autoplay loop muted id='video'>
        <source src={Video} type='video/mp4'/>
      </video>
      <div className="overlay"></div>
    </div>
  )
}

export default Hero
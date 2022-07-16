import React from 'react'
import './SlideShow.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BoraBora from '../../assets/bora-bora.jpg'
import BoraBora2 from '../../assets/bora-bora2.jpg'
import Hawaii from '../../assets/hawaii.jpg'
import Hawaii2 from '../../assets/hawaii2.jpg'
import Hawaii3 from '../../assets/hawaii3.jpg'
import Keywest from '../../assets/keywest.jpg'

const SlideShow = () => {
  return (
    <div name='slideshow' className='container'>
      <Carousel className='slideshow' showArrows={true} infiniteLoop={true} autoPlay={true}>
        <div>
          <img src={BoraBora} alt='/' />
        </div>
        <div>
          <img src={BoraBora2} alt='/' />
        </div>
        <div>
          <img src={Hawaii} alt='/' />
        </div>
      </Carousel>
    </div>
  )
}

export default SlideShow
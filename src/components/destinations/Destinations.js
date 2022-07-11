import React from 'react'
import './Destinations.css'
import BoraBora from '../../assets/bora-bora.jpg'
import BoraBora2 from '../../assets/bora-bora2.jpg'
import Hawaii from '../../assets/hawaii.jpg'
import Hawaii2 from '../../assets/hawaii2.jpg'
import Keywest from '../../assets/keywest.jpg'

const Destinations = () => {
  return (
    <div className='destinations'>
      <div className="container">
        <h1>All-Inclusive Resorts</h1>
        <p>On the Caribbean's Best Beaches</p>
        <div className="img-container">
          <img className='span-3 image-grid-row-2' src={BoraBora} alt="/" />
          <img src={BoraBora2} alt="/" />
          <img src={Hawaii} alt="/" />
          <img src={Hawaii2} alt="/" />
          <img src={Keywest} alt="/" />
        </div>
      </div>
    </div>
  )
}

export default Destinations
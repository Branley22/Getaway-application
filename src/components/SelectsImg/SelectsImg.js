import React from 'react'
import './SelectsImg.css'

const SelectsImg = ({ bgImg, text, text2 }) => {
  return (
    <div className='selects-location'>
      <img src={bgImg} alt="/" style={{ height: '300px' }} />
      <div className="overlay">
        <p>{text}</p>
        <li>{text2}</li>
      </div>
    </div>
  )
}

export default SelectsImg
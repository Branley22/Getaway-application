import React from 'react'
import './SelectsImg.css'

const SelectsImg = ({bgImg, text}) => {
  return (
    <div className='selects-location'>
      <img src={bgImg} alt="/" style={{height: '300px'}} />
      <div className="overlay">
        <p>{text}</p>
      </div>
    </div>
  )
}

export default SelectsImg
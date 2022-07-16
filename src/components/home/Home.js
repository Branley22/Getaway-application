import React from 'react'
import './Home.css'
import { AiOutlineSearch } from 'react-icons/ai'

import Video from '../../assets/getaway-home.mp4'

const Home = () => {
  return (
    <div className='home'>
      <video autoPlay loop muted id='video'>
        <source src={Video} type='video/mp4' />
      </video>
      <div className="overlay"></div>
      <div className="content">
        <h1>First Class Trips</h1>
        <h2>Top Locations WorldWide</h2>
        <form className="form">
          <div>
            <input type="text" placeholder='Search Destinations' />
          </div>
          <div>
            <button><AiOutlineSearch className='icon' /></button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Home
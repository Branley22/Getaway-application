import React from 'react'
import './Search.css'
import Gold from '../../assets/gold.png';

const Search = () => {
  return (
    <div name='book' className='search'>
      <div className="container">
        <div className="left">
          <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
          <p>Come experience the best all-inclusive vactions.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <div className="search-col-2">
            <div className="box">
              <div>
                <img src={Gold} alt="/" style={{ marginRight: '1rem' }} />
              </div>
              <div>
                <h3>WORLD'S LEADING</h3>
                <p>ALL INCLUSIVE COMPANY FOR 10 YEARS IN-A-ROW</p>
              </div>
            </div>
            <div className="box">
              <div>
                <h3>NO ONE INCLUDES MORE</h3>
                <p>ALL-INCLUSIVE COMPANY FOR 10 YEARS IN-A-ROW</p>
                <button>View Packages</button>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="promo">
            <h4 className='save'>GET AN ADDITIONAL 10% OFF</h4>
            <p className="timer">27 HOURS LEFT!</p>
            <p className="offers">VIEW ALL CURRENT OFFERS</p>
          </div>
          <form>
            <div className="input-wrap">
              <label>Destination</label>
              <select>
                <option value="1"></option>
                <option value="1">Bora Bora</option>
                <option value="1">Hawaii</option>
                <option value="1">Keywest</option>
                <option value="1">Jamaica</option>
                <option value="1">Maldives</option>
                <option value="1">Dominican Republic</option>
              </select>
            </div>
            <div className="date">
              <div className="input-wrap">
                <label>Check-In</label>
                <input type="date" />
              </div>
              <div className="input-wrap">
                <label>Check-Out</label>
                <input type="date" />
              </div>
            </div>
            <button>Rates & Availibilities</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Search
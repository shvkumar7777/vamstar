import React from 'react'

import tesla from '../assests/tesla.png'
import './Navbar.css';

function Navbar() {
  return (
    <div className='app__navbar'>
        <div className='app__logo'>
            <img src={tesla} alt='app logo'/>
        </div>
        <div className='app__items'>
          <ul className='navbar__links'>
              <li><a href='#explore'>Explore</a></li>
              <li><a href='#aboutus'>About Us</a></li>
              <li><a href='#cities'>Cities</a></li>
          </ul>
          <div className='navbar__button'>
              <button>Call</button>
          </div>
        </div>
    </div>
  )
}

export default Navbar
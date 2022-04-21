import React from 'react'

import './Home.css'
function Home() {
  return (
    <div className='app__home'>
      <div className='home__context'> 
        <h1>Rethink your living and renting </h1>
        <h3> make your stay painless with us</h3>
      </div>
      <div className='home__searchbar'>
        <div className='home__searchbar__city'> 
        <label>City</label>
        <select name="city" id="city">
            <option value="volvo">Select Your City</option>
        </select>
        </div>
        <div className='home__searchbar__dates'> 
          <label>Dates</label>
          <select name="dates" id="dates">
            <option value="volvo">Select Your Dates</option>
          </select>
        </div>
        <div className='home__searchbar__guests'> 
          <label for="name">Guests</label>

          <input type="text" id="name" name="name" required
       minlength="4" maxlength="8" size="10" placeholder='Add Guests'></input>
        </div>
        <div className='home__searchbar__searchbutton'> 
          <button type="button">Search</button>
        </div>
      </div>
      <div className='home__downarrow'>

      </div>
    </div>
  )
}

export default Home
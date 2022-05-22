import { NavLink } from 'react-router-dom'
import './Navbar.css'
import React from 'react'
const Navbar = () => {
  return (
    <div>
      <input type="checkbox" id="check" />
      <nav>
        <div className="icon">
          <b style={{ color: '#109272', fontSize: '40px' }}>F</b>YP
          <b style={{ color: '#109272', fontSize: '40px' }}>L</b>AND
          </div>
        <div className="search_box">
          <input type="search" placeholder="Search here" />
          <span className="fa fa-search"/>
        </div>

        <ol>
          <li><NavLink to="/">Add property</NavLink></li>
          <li><NavLink to="/marketplace">Market Place</NavLink></li>
          <li><NavLink to="/signup">Sell Tokens</NavLink></li>
          <li><NavLink to="/login">Login/Signup</NavLink></li>
        </ol>
        <label htmlFor="check" className="bar">
          <span className="fa fa-bars" id="bars" />
          <span className="fa fa-times" id="times" />
        </label>
      </nav>
    </div>
  )
}

export default Navbar
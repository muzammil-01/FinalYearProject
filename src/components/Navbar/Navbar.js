import { Link, NavLink, useNavigate } from 'react-router-dom'
import './Navbar.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../Redux/actions/userActions'
import Logo from '../../assets/logo.png'


const Navbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin
  const logoutHandler = () => {
    dispatch(logout())
  }
  return (
    <div>
      <input type="checkbox" id="check" />
      <nav>
        <div className="icon">
          <img src={Logo} alt="logo" />
          {/* <b style={{ color: '#109272', fontSize: '40px' }}>F</b>YP
          <b style={{ color: '#109272', fontSize: '40px' }}>L</b>AND */}
        </div>
        <div className="search_box">
          <input type="search" placeholder="Search here" />
          <span className="fa fa-search" />
        </div>

        <ol>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {userInfo &&
            <li>
            <NavLink to="/addproperty">Add property</NavLink>
          </li>
            }
          <li>
            <NavLink to="/marketplace">Market Place</NavLink>
          </li>
          <li>
          </li>
          <li>
            {userInfo ? <div className="dropdown">
              <button className="dropbtn">{userInfo.name}   <FontAwesomeIcon icon={faCaretDown} className="caretDown"/></button>
              <div className="dropdown-content">
                <Link to="/" onClick={logoutHandler}>Logout</Link>
                <Link to="/profile">Profile</Link>
              </div>
            </div> :
              <NavLink to="/login">Login/Signup</NavLink>}
          </li>


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
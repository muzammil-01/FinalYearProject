import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: ""
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }
  return (
    <>
      <div className='login-card'>
        <form className="form">
          <div className="top">
            <h1 style={{ color: "white" }}>Login</h1>
          </div>
          <br />
          <input type="text" name="email" value={user.email} className="inputs" placeholder="Email Address" onChange={handleChange} />
          <input type="password" name="password" value={user.password} className="inputs" placeholder="Password" onChange={handleChange} />

          <br />
          <button className='logbtn'>Login</button>
          <br />
          <br />
          <br />
          <div className="signup-text">
            <p style={{ color: "white" }}>Not a member?
              <Link to="/signup" className="signupbtn"> Signup now</Link></p>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login
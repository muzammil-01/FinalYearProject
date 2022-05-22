import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='login-card'>
<form action className="form">
  <div className="top">
    <h1 style={{color:"white"}}>Login</h1>
  </div>
  <br />
    <input type="text" className="inputs" placeholder="Email Address" />
    <input type="text" className="inputs" placeholder="Password" />

  <br />
 <button className='logbtn'>Login</button>
  <br />
  <br />
  <br/>
  <div className="signup-text">
    <p style={{color:"white"}}>Not a member? 
      <Link to="/signup" className="signupbtn"> Signup now</Link></p>
  </div>
</form>
    </div>
  )
}

export default Login
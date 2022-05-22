import React from 'react'
import { Link } from 'react-router-dom'
import './Signup.css'

function Signup() {
  return (
    <>
      <div className='signup-box'>
        <form action className="signup-form">
          <div className="top">
            <h1 style={{ color: "white" }}>Create Account</h1>
            <h4 style={{ color: "white" }}>It's free and only takes a minute</h4>
          </div>
          <input type="text" className="inputs" placeholder="First Name" />
          <input type="text" className="inputs" placeholder="Last Name" />
          <input type="email" className="inputs" placeholder="Email Address" />
          <input type="Password" className="inputs" placeholder="Password" />
          <button className='submitbtn'>Submit</button>
          <p>
            By clicking the Sign Up button, you agree to our
            <br />
            <span style={{ color: "#109272" }}>Terms and Conditions</span> and <span style={{ color: "#109272" }}>Privacy Policy</span>
          </p>
        </form>
      </div>
      <p className='para-2'>Already have an account? <Link to="/login">Login here</Link></p>
    </>
  )
}

export default Signup
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './Signup.css'

function Signup() {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }
  const handleSubmit = async (e)=>{
    e.preventDefault()
    const {name, email, password, confirmPassword} = user
    if(name && email && password && (password === confirmPassword)){
    const response = await fetch("http://localhost:3001/api/auth/register",{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name, email, password})
    });
    const json = await response.json()
    console.log(json)
    if(json.success){
      localStorage.setItem('token', json.authToken);
      navigate("/")
    }
    else{
      alert("invalid")
    }
  }
  else{
    alert('passwords donot match')
  }
  }
  return (
    <>
      <div className='signup-box'>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="top">
            <h1 style={{ color: "white" }}>Create Account</h1>
            <h4 style={{ color: "white" }}>It's free and only takes a minute</h4>
          </div>
          <input type="text" className="inputs" name="name" value={user.name} placeholder="Enter Your Name" onChange={handleChange} />
          <input type="email" className="inputs" name="email" value={user.email} placeholder="Email Address" onChange={handleChange} />
          <input type="Password" className="inputs" name="password" value={user.password} placeholder="Password" onChange={handleChange} required minLength={5}/>
          <input type="Password" className="inputs" name="confirmPassword" value={user.confirmPassword} placeholder="Confirm Password" onChange={handleChange} required minLength={5}/>
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
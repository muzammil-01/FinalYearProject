import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './Login.css'

function Login() {
  const navigate = useNavigate()
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
  const handleSubmit = async (e)=>{
    e.preventDefault()
    const {email, password} = user
    if(email && password){
    const response = await fetch("http://localhost:3001/api/auth/login",{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password})
    });
    const json = await response.json()
    console.log(json)
    if(json.success){
      localStorage.setItem('token', json.authToken);
      navigate("/")
    }
    else{
      alert("invalid email or password")
    }
  }
  else{
    alert('invalid Email or password')
  }
  }
  return (
    <>
      <div className='login-card'>
        <form className="form" onSubmit={handleSubmit} >
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
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../Redux/actions/userActions'
import { useNavigate } from 'react-router-dom'
import './Signup.css'
import Spinner from '../../components/spinner/Spinner'

function Signup() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const userRegister = useSelector(state => state.userRegister)
  const { loading, error, userInfo } = userRegister


  useEffect(() => {
    if (userInfo) {
      navigate("/")
    }
  }, [navigate, userInfo])

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [image, setImage] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)
  const [uploading, setUploading] = useState(false)

  const uploadFileHandler = async (e) => {
    e.preventDefault()
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    setUploading(true)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }

      const { data } = await axios.post('http://localhost:3001/api/upload', formData, config)

      setImage(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }


  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    }
    else {
      dispatch(register(name, email, password, image))
    }
  }
  return (
    <>
      {error && <div className='error'>{error}</div>}
      {loading && <Spinner />}
      <div className='signup-box'>
        <form className="signup-form" onSubmit={submitHandler} encType="multipart/form-data">
          <div className="top">
            <h1 style={{ color: "white" }}>Create Account</h1>
            <h4 style={{ color: "white" }}>It's free and only takes a minute</h4>
          </div>

          <input
            type="text"
            className="inputs"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name" />


          <input
            type="email"
            className="inputs"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address" />


          <input
            type="Password"
            className="inputs"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required minLength={5} />


          <input
            type="Password"
            className="inputs"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            required minLength={5} />

          <input
            type='text'
            placeholder='Enter image url'
            value={image}
            className="inputs"
            onChange={(e) => setImage(e.target.value)}
          />

          <input
          type='file'
          id='image-file'
          label='Choose File'
          onChange={uploadFileHandler}
          />
          {uploading && <Spinner/>}

          {message && <div className='error'>{message}</div>}
          <button className='submitbtn'>Submit</button>
          <p>
            By clicking the Sign Up button, you agree to our
            <br />
            <span style={{ color: "#109272" }}>Terms and Conditions</span> and <span style={{ color: "#109272" }}>Privacy Policy</span>
          </p>
          <p className='para-2'>Already have an account? <Link to="/login">Login here</Link></p>
        </form>
      </div>
      {loading && <Spinner />}
    </>
  )
}

export default Signup
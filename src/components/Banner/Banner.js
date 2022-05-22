import React from 'react'
import { Link } from 'react-router-dom'
import './Banner.css'

function Banner() {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1 className="one">Fractional And Frictionless RealEstate Investment</h1>
        <p>For the first time, investors around the globe can buy into the real estate market through fully-compliant, fractional, tokenized ownership. Powered by blockchain.</p>
        <Link to="/login" className="btn">Get Started</Link>
      </div>
  </div>
  )
}

export default Banner
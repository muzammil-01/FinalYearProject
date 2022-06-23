import React from 'react'
import { Link } from 'react-router-dom'
import './Profile.css'
import Bed from '../../assets/bed.jpg'

function ListingCard() {
  return (
    <div className="ListingCards">
      <img src={Bed} alt="" />
      <h2>Property name: </h2>
      <h3>Bed: 3</h3>
      <h3>Bath: 3</h3>
      <Link to="/propertydetails/highlights">View Property</Link>
    </div>
  )
}

export default ListingCard
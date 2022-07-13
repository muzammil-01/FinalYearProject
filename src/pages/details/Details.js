import React from 'react'
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import map from '../../assets/map.jpg'
import './Details.css'
import { useSelector } from 'react-redux'


function Details() {

  const propertyDetails = useSelector(state => state.propertyDetails)
  const { loading, error, property } = propertyDetails
  console.log(property)


  return (
    <>

      <div className='propertydetails'>
      <h2 className='propertydetails-heading'>PROPERTY DETAILS</h2>
        <div className="property-details">
          <h2>
            <h5> Property name</h5>
            <span className='gapleft'>{property.propertyName}</span>
          </h2>
          <h2>
            <h5>Area</h5>
            <span className='gapleft'>  {property.size}</span>
          </h2>
          <h2>
            <h5>Bedrooms</h5>
            <span className='gapleft'>  {property.beds}</span>
          </h2>
          <h2>
            <h5>Bathrooms</h5>
            <span className='gapleft'> {property.baths} </span>
          </h2>
          <h2>
            <h5>Country</h5>
            <span className='gapleft'>   {property.country}</span>
          </h2>
          <h2>
            <h5>City</h5>
            <span className='gapleft'>{property.city}</span>
          </h2>
          <h2>
            <h5>Address</h5>
            <span className='gapleft'>{property.streetAddress} {property.propertyLocation}</span>
          </h2>
          <h2>
            <h5>Postal code</h5>
            <span className='gapleft'> {property.postalcode}</span>
          </h2>
          <h2>
            <h5>Type</h5>
            <span className='gapleft'>undefined</span>
          </h2>
          <h2 style={{border:"none"}}>
            <h5>Token price</h5>
            <span className='gapleft'>undefined</span>
          </h2>
          <h2 style={{border:"none"}}>
            <h5>Total tokens</h5>
            <span className='gapleft'>undefined</span>
          </h2>
    </div>
    </div>
    <div className="about-map">

<div className='about-property'>
    <h2>About the Property</h2>
    <h5>19750 Marx</h5>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos delectus praesentium dolorem ipsam optio natus veritatis eligendi sint velit aliquid, facilis cum repellat possimus eaque vitae molestiae quibusdam odio libero! <br />
        Perspiciatis quia, fugiat architecto ad unde consectetur, quo culpa ipsum a libero facilis debitis maiores commodi veniam in beatae adipisci neque perferendis saepe? Necessitatibus minus eos fugit saepe, sed unde.
    </p>
</div>
<div className="map">
    <img src={map} alt="" />
</div>
</div>
    </>
  )
}

export default Details
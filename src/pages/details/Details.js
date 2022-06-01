import React from 'react'
import './Details.css'

function Details() {
  return (
    <div>
      <h2 className='highlight-heading'>DETAILS</h2>
      <div className='highlight'>
        <div className="highlight-details1">
          <p>
            <span style={{fontSize:"larger", color:"var(--btnColor)", fontWeight:"bolder"}}>Lot Size (sqft)</span>
            <span className='gapleft'>12632</span>
          </p>
          <p>
            <span style={{fontSize:"larger", color:"var(--btnColor)", fontWeight:"bolder"}}>Construction Type</span>
            <span className='gapleft'>Brick</span>
          </p>
          <p>
            <span style={{fontSize:"larger", color:"var(--btnColor)", fontWeight:"bolder"}}>Foundation</span>
            <span className='gapleft'>Poured Concrete</span>
          </p>
          <p>
            <span style={{fontSize:"larger", color:"var(--btnColor)", fontWeight:"bolder"}}>Roof Type</span>
            <span className='gapleft'>Asphalt / Hip Style</span>
          </p>
          <p>
            <span style={{fontSize:"larger", color:"var(--btnColor)", fontWeight:"bolder"}}>Parking</span>
            <span className='gapleft'>15 spaces</span>
          </p>
        </div>
        <div className="highlight-details2">
          <p>
            <span style={{fontSize:"larger", color:"var(--btnColor)", fontWeight:"bolder"}}>Interior Size (sqft)</span>
            <span className='gapleft'>7512</span>
          </p>
          <p>
            <span style={{fontSize:"larger", color:"var(--btnColor)", fontWeight:"bolder"}}>Heating</span>
            <span className='gapleft'>Forced Air / Natural Gas
            </span>
          </p>
          <p>
            <span style={{fontSize:"larger", color:"var(--btnColor)", fontWeight:"bolder"}}>Cooling</span>
            <span className='gapleft'>None</span>
          </p>
                  </div>
      </div>
    </div>
  )
}

export default Details
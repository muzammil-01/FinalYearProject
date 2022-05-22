import React from 'react'
import './Details.css'

function Details() {
  return (
    <div>
      <h2 className='highlight-heading'>DETAILS</h2>
      <div className='highlight'>
        <div className="highlight-details1">
          <p>
            <h5>Lot Size (sqft)</h5>
            <span className='gapleft'>12632</span>
          </p>
          <p>
            <h5>Construction Type</h5>
            <span className='gapleft'>Brick</span>
          </p>
          <p>
            <h5>Foundation</h5>
            <span className='gapleft'>Poured Concrete</span>
          </p>
          <p>
            <h5>Roof Type</h5>
            <span className='gapleft'>Asphalt / Hip Style</span>
          </p>
          <p>
            <h5>Parking</h5>
            <span className='gapleft'>15 spaces</span>
          </p>
        </div>
        <div className="highlight-details2">
          <p>
            <h5>Interior Size (sqft)</h5>
            <span className='gapleft'>7512</span>
          </p>
          <p>
            <h5>Heating</h5>
            <span className='gapleft'>Forced Air / Natural Gas
            </span>
          </p>
          <p>
            <h5>Cooling</h5>
            <span className='gapleft'>None</span>
          </p>
                  </div>
      </div>
    </div>
  )
}

export default Details
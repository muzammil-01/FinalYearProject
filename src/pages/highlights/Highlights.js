import React from 'react'
import './Highlights.css'

function Highlights() {
  return (
    <>
      <h2 className='highlight-heading'>Property Highlights</h2>
      <div className='highlight'>
        <div className="highlight-details1">
          <p>
            <h5>Expected Income</h5>
            <span className='gapleft'>10.5%</span>
          </p>
          <p>
            <h5>Rent Start Date</h5>
            <span className='gapleft'>2022-04-21</span>
          </p>
          <p>
            <h5>Rent per Token</h5>
            <span className='gapleft'>$ 5.28/year</span>
          </p>
          <p>
            <h5>Token Price</h5>
            <span className='gapleft'>$ 50.31</span>
          </p>
          <p>
            <h5>Total Tokens</h5>
            <span className='gapleft'>14,200</span>
          </p>
          <p className='financial-statement'>
            All financial statements of property yield are best estimates based on current conditions, and can change at any time.<br />
            We are targeting the above yield for investors; however, no assurance can be given that you will obtain any return on investment, and there is a risk that you can lose your entire investment.
          </p>
        </div>
        <div className="highlight-details2">
          <p>
            <h5>Property Type</h5>
            <span className='gapleft'>Multi Family</span>
          </p>
          <p>
            <h5>Neighborhood</h5>
            <span className='gapleft'>Highland Park</span>
          </p>
          <p>
            <h5>Construction Year</h5>
            <span className='gapleft'>1956</span>
          </p>
          <p>
            <h5>Stories</h5>
            <span className='gapleft'>2 stories</span>
          </p>
          <p>
            <h5>Total Units</h5>
            <span className='gapleft'>16 units</span>
          </p>
          <p>
            <h5>Bed/Bath</h5>
            <span className='gapleft'>16x1 Bed / 16x1 Bath </span>
          </p>
          <p>
            <h5>Rental Type</h5>
            <span className='gapleft'>Long-term</span>
          </p>
          <p>
            <h5>Rented</h5>
            <span className='gapleft'>Fully Rented</span>
          </p>
        </div>
      </div>
    </>
  )
}

export default Highlights
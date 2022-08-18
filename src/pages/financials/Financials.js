import React from 'react'
import "./Financials.css"

function Financials() {
  return (
<>
       <h2 className='financial-heading'>Property Financials</h2>
      <div className='financial'>
        <div className="financial-details">
          <h2>
            <h5>Expected Income</h5>
            <span className='gapleft'>10.5%</span>
          </h2>
          <h2>
            <h5>Rent Start Date</h5>
            <span className='gapleft'>2022-04-21</span>
          </h2>
          <h2>
            <h5>Rent per Token</h5>
            <span className='gapleft'>$ 5.28/year</span>
          </h2>
          <h2>
            <h5>Token Price</h5>
            <span className='gapleft'>$ 50.31</span>
          </h2>
          <h2>
            <h5>Total Tokens</h5>
            <span className='gapleft'>14,200</span>
          </h2>
          <h2 style={{border:"none"}}>
            <h5>Net Rent/year</h5>
            <span className='gapleft'>$ 75,036.00</span>
          </h2>
          <h2 style={{border:"none"}}>
            <h5>Total Investment</h5>
            <span className='gapleft'>$ 714,402.00</span>
          </h2>
          <h2 style={{border:"none"}}>
            <h5>Expected Income</h5>
            <span className='gapleft'>10.50%</span>
          </h2>
    </div>
    </div>
</>
  )
}

export default Financials
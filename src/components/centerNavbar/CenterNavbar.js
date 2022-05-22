import React from 'react'
import './CenterNavbar.css'
import { Link, Outlet } from 'react-router-dom'

function CenterNavbar() {
    return (
        <div>
            <ul className='centernav'>
                <li><Link to="/propertydetails/highlights">HIGHLIGHTS</Link></li>
                <li><Link to="/propertydetails/financials">FINANCIALS</Link></li>
                <li><Link to="/propertydetails/details">DETAILS</Link></li>
                <li><Link to="/propertydetails/bid">BID</Link></li>
                <li><Link to="/propertydetails/tokensforsale">TOKENS</Link></li>
            </ul>
            <Outlet />
        </div>
    )
}

export default CenterNavbar
import React from 'react'
import { useParams } from 'react-router-dom'
import './PropertyDetails.css'
import CenterNavbar from '../../components/centerNavbar/CenterNavbar'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { listPropertyDetails } from '../../Redux/actions/propertyActions'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'


function PropertyDetails() {
    const { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(listPropertyDetails(id))
    }, [])

    return (
        <>
            <Navbar />
            <h2 style={{ color: "white", textAlign: "center", marginTop: "30px" }}>TOTAL INVESTMENT: $ 714,402.00</h2>
            <div className="total-investments">
                <p>
                    <span>TOKEN STOCK : 8980 </span>
                    <span style={{ marginLeft: "100px" }}>MAXIMUM TOKEN : 2130</span>
                    <br />
                    <br />
                    <span>Select Tokens : </span>
                    <span><input type="number" /> </span> x
                    <span> Price of 1 Token </span> =
                    <span> Total Price</span>
                </p>
                <button className='buyTokensBtn'>Buy Tokens</button>
            </div>
            <CenterNavbar id={id} />

            <Footer />
        </>
    )
}

export default PropertyDetails
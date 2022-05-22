import React from 'react'
import './PropertyDetails.css'
import CenterNavbar from '../../components/centerNavbar/CenterNavbar'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import map from '../../assets/map.jpg'


function PropertyDetails() {
    return (
        <>
            <Navbar />
            <h2 style={{color:"white", textAlign: "center", marginTop:"30px"}}>TOTAL INVESTMENT: $ 714,402.00</h2>
            <div className="total-investments">
                <p>
                    <div>

                    <span>TOKEN STOCK : 8980 </span>
                    <span style={{marginLeft: "100px"}}>MAXIMUM TOKEN : 2130</span>
                    </div>
                    <br />
                    <span>Select Tokens : </span>
                    <span>No. of Tokens </span> x
                    <span> Price of 1 Token </span> =
                    <span> Total Price</span>
                </p>
                <button className='buyTokensBtn'>Buy Tokens</button>
            </div>
            <CenterNavbar />
            <div className="about-map">

                <div className='about-property'>
                    <p>
                        <h2>About the Property</h2>
                        <h5>19750 Marx</h5>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos delectus praesentium dolorem ipsam optio natus veritatis eligendi sint velit aliquid, facilis cum repellat possimus eaque vitae molestiae quibusdam odio libero! <br />
                        Perspiciatis quia, fugiat architecto ad unde consectetur, quo culpa ipsum a libero facilis debitis maiores commodi veniam in beatae adipisci neque perferendis saepe? Necessitatibus minus eos fugit saepe, sed unde.
                    </p>
                </div>
                <div className="map">
                    <img src={map} alt="" />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default PropertyDetails
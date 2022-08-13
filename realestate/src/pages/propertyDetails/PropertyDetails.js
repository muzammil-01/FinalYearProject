import React from 'react'
import { useParams } from 'react-router-dom'
import './PropertyDetails.css'
import CenterNavbar from '../../components/centerNavbar/CenterNavbar'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { listPropertyDetails } from '../../Redux/actions/propertyActions'
import map from '../../assets/map.jpg'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'


function PropertyDetails() {
    const { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(listPropertyDetails(id))
    }, [dispatch, id])

    return (
        <>
            <Navbar />
            <h2 style={{ color: "white", textAlign: "center", marginTop: "30px" }}>TOTAL INVESTMENT: $ 714,402.00</h2>

            <CenterNavbar id={id} />

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
            <Footer />
        </>
    )
}

export default PropertyDetails
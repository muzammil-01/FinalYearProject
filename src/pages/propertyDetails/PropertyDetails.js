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
import Slider from '../../components/slider/Slider'
import Mint from '../../components/Mint/Mint'
import Details from '../details/Details'
import Financials from '../financials/Financials'
import Bid from '../bid/Bid'
import TokensForSale from '../tokenforsale/TokensForSale'


function PropertyDetails() {
    const { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(listPropertyDetails(id))
    }, [dispatch, id])


    const propertyDetails = useSelector(state => state.propertyDetails)
    const { loading, error, property } = propertyDetails


    return (
        <>
            <Navbar />
            {property && 
            <img src={`http://localhost:3001/public/images/${property.propertyImages[0]}`} alt="" /> 
            }
            <Mint id={id}/>


<div className="accordion" id="accordionExample">

{/* ______________details component________________ */}
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Details
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        {property &&  <Details property={property}/>
        }
      </div>
    </div>
  </div>

  {/* ____________property financials____________________ */}

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        property financials
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        {property && <Financials property={property}/>}
      </div>
    </div>
  </div>

{/* ___________property Bid___________________ */}
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Bidding
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <Bid/>
      </div>
    </div>
  </div>

  {/* ____________property Tokens________________ */}

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingFour">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
   Tokens
      </button>
    </h2>
    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <TokensForSale/>
      </div>
    </div>
  </div>
</div>
            <Footer />
        </>
    )
}

export default PropertyDetails
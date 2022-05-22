import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import './Marketplace.css'
import Propertycard from './Propertycard'

function Marketplace() {
    return (
        <>
            <Navbar />
            <Propertycard />
            <Propertycard />
            <Propertycard />
            <Propertycard />
            <Footer />
        </>
    )
}

export default Marketplace
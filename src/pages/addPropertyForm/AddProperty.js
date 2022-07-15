import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addProperty } from '../../Redux/actions/propertyActions'
import './AddProperty.css'
import Spinner from '../../components/spinner/Spinner'

function AddProperty() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    const propertyAdd = useSelector(state => state.propertyAdd)
    const { loading, error} = propertyAdd

    useEffect(() => {
        if (!userInfo) {
            alert("please Login first")
            navigate('/login')
        }
    }, [])


    const [property, setProperty] = useState({
        propertyName: '',
        propertyLocation: '',
        beds: '',
        baths: '',
        size: '',
        country: '',
        city: '',
        postalcode: '',
        streetAddress: '',
    })
    const [message, setMessage] = useState("")

    const handleChange = (e) => {
        setProperty({ ...property, [e.target.name]: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        const { propertyName, propertyLocation, beds, baths, size, country, city, postalcode, streetAddress } = property
        dispatch(addProperty(propertyName, propertyLocation, beds, baths, size, country, city, postalcode, streetAddress))
        setMessage("successfully submitted property")
        navigate('/')

    }
    return (
        <>

            {error && <div className='error'>{error}</div>}
            {loading && <Spinner />}
            <div>
                {loading && <Spinner/>}
                {error && <div className='error'>{error}</div>}
                <form className="property-form" onSubmit={submitHandler} >
                    <div className="top-heading">
                        <h1>Add Property</h1>
                    </div>
                    <br />
                    <input
                        type="text"
                        name="propertyName"
                        value={property.propertyName}
                        className="inputs"
                        placeholder="property name"
                        required
                        onChange={handleChange} />


                    <input
                        type="text"
                        name="propertyLocation"
                        value={property.propertyLocation}
                        className="inputs"
                        placeholder="Enter property location"
                        required
                        onChange={handleChange} />

                    <input
                        type="number"
                        name="beds"
                        min='0'
                        value={property.beds}
                        className="inputs"
                        placeholder="No of beds"
                        required
                        onChange={handleChange} />


                    <input
                        type="number"
                        name="baths"
                        min='0'
                        value={property.baths}
                        className="inputs"
                        placeholder="No of baths"
                        required
                        onChange={handleChange} />



                    <input
                        type="text"
                        name="size"
                        value={property.size}
                        className="inputs"
                        placeholder="Enter Area in sqft"
                        required
                        onChange={handleChange} />


                    <input
                        type="text"
                        name="country"
                        value={property.country}
                        className="inputs"
                        placeholder="Enter country"
                        required
                        onChange={handleChange} />


                    <input
                        type="text"
                        name="city"
                        value={property.city}
                        className="inputs"
                        placeholder="Enter city"
                        required
                        onChange={handleChange} />


                    <input
                        type="text"
                        name="postalcode"
                        value={property.postalcode}
                        className="inputs"
                        placeholder="Enter postalcode"
                        required
                        onChange={handleChange} />


                    <input
                        type="text"
                        name="streetAddress"
                        value={property.streetAddress}
                        className="inputs"
                        placeholder="Enter streetAddress"
                        required
                        onChange={handleChange} />

                    <br />
                    <button className='logbtn'>Submit</button>
                </form>
            </div>
        </>
    )
}

export default AddProperty
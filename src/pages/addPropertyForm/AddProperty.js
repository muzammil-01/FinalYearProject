import axios from 'axios'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addProperty } from '../../Redux/actions/propertyActions'
import './AddProperty.css'
import { Clone } from '../../Redux/actions/connectWalletAction'
import Spinner from '../../components/spinner/Spinner'

function AddProperty() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    const propertyAdd = useSelector(state => state.propertyAdd)
    const { loading, error } = propertyAdd

    useEffect(() => {
        if (!userInfo) {
            alert("please Login first")
            navigate('/login')
        }
        getEth()
    }, [])



    const [ownerName, setOwnerName] = useState('')
    const [numberOfSupplies, setNumberOfSupplies] = useState('')
    const [propertyAddress, setPropertyAddress] = useState('')
    const [propertyPrice, setPropertyPrice] = useState()
    const [propertyImages, setPropertyImages] = useState([])
    const [numberOfTokenPerWallet, setNumberOfTokenPerWallet] = useState('')
    const [propertyDocuments, setPropertyDocuments] = useState([])
    const [beds, setBeds] = useState('')
    const [baths, setBaths] = useState('')
    const [size, setSize] = useState('')
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [postalcode, setPostalCode] = useState('')
    const [ETHpriceToUSD, setETHpriceToUSD] = useState(0)
    const [message, setMessage] = useState("")
    const [uploading, setUploading] = useState(false)




    // const uploadFileHandler = async (e) => {
    //     e.preventDefault()
      
    //     const arr =[]
    //     for(let i = 0;i<e.target.files.length;i++){
    //         arr.push(e.target.files[i])
    //       }
       
    //     const formData = new FormData()
    //     for(let i = 0; i < arr.length; i++){
    //       formData.append('propertyImages',arr[i])
    //     }
    
    //     setUploading(true)
    
    //     try {
    //       const config = {
    //         headers: {
    //           'Content-Type': 'multipart/form-data',
    //         },
    //       }

    //       const {data}  = await axios.post('http://localhost:3001/api/upload', formData, config)
    //       console.log(data)
    //       for(let i = 0 ; i<data.length; i++){
    //         propertyImages.push(data[i])
    //       }

    //       setUploading(false)
    //     } catch (error) {
    //       console.error(error.message)
    //       setUploading(false)
    //     }
    //   }
    const chalo = ()=>{
        dispatch(Clone(propertyAddress,ownerName,10,20,30))
    }

    const getEth = async ()=>{
        const  {data}  = await axios.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD' )
        setETHpriceToUSD(data.RAW.ETH.USD.PRICE)
      }

      let pricePerToken = propertyPrice/ETHpriceToUSD
      
      
      const submitHandler = async (e) => {
          e.preventDefault()
      
        //   const Clone = useSelector(state => state.Clone)
          const formData = new FormData()
          const arr =[]
          for(let i = 0;i<propertyImages.length;i++){
              arr.push(propertyImages[i])
            }  
            const arr1 =[]
            for(let i = 0;i<propertyDocuments.length;i++){
              arr1.push(propertyDocuments[i])
        }
        
        var pr = pricePerToken.toString();
        console.log(typeof pr)
        
        for(let i = 0; i < arr.length; i++){
            formData.append('propertyImages',arr[i])
        }  
        for(let i = 0; i < arr1.length; i++){
            formData.append('propertyDocuments',arr1[i])
        }
        formData.append('ownerName',ownerName)
        formData.append('numberOfSupplies',numberOfSupplies)
        formData.append('propertyAddress',propertyAddress)
        formData.append('propertyPrice',propertyPrice)
        formData.append('PricePerToken',pricePerToken)
        formData.append('NumberOfTokenPerWallet',numberOfTokenPerWallet)
        formData.append('beds',beds)
        formData.append('baths',baths)
        formData.append('country',country)
        formData.append('size',size)
        formData.append('city',city)
        formData.append('postalcode',postalcode)
        console.log(formData)
       

        dispatch(addProperty(formData))
        alert("successfully submitted property")
        // navigate('/')

    }
    return (
        <>

            {error && <div className='error'>{error}</div>}
            {loading && <Spinner />}
            <div>
                {loading && <Spinner />}
                {error && <div className='error'>{error}</div>}
                <form className="property-form" onSubmit={submitHandler} encType="multipart/form-data">
                    <div className="top-heading">
                        <h1>Add Property</h1>
                    </div>
                    <br />
                    <input
                        type="text"
                        name="ownerName"
                        value={ownerName}
                        className="inputs"
                        placeholder="owner name"
                        required
                        onChange={(e) => setOwnerName(e.target.value)} />

                    <input
                        type="text"
                        name="numberOfSupplies"
                        value={numberOfSupplies}
                        className="inputs"
                        placeholder="Enter Supplies"
                        required
                        onChange={(e) => setNumberOfSupplies(e.target.value)}
                    />


                    <input
                        type="text"
                        name="propertyAddress"
                        value={propertyAddress}
                        className="inputs"
                        placeholder="Enter property address"
                        required
                        onChange={(e) => setPropertyAddress(e.target.value)} />

                    <input
                        type="Number"
                        name="propertyPrice"
                        value={propertyPrice}
                        className="inputs"
                        placeholder="Enter property Price"
                        required
                        onChange={(e) => setPropertyPrice(e.target.value)} />


                    
                    <input
                        type='file'
                        id='image-file'
                        label='Choose File'
                        className='inputs'
                        multiple
                        onChange={(e)=> setPropertyImages(e.target.files)}
                    />

                    <input
                        type="text"
                        name="NumberOfTokenPerWallet"
                        value={numberOfTokenPerWallet}
                        className="inputs"
                        placeholder="Enter Number of token per share per wallet"
                        required
                        onChange={(e) => setNumberOfTokenPerWallet(e.target.value)} />

                    <input
                        type='file'
                        id='image-file'
                        label='Choose File'
                        className='inputs'
                        multiple
                        onChange={(e)=> setPropertyDocuments(e.target.files)}
                    />


                    <input
                        type="number"
                        name="beds"
                        min='0'
                        value={beds}
                        className="inputs"
                        placeholder="No of beds"
                        required
                        onChange={(e)=> setBeds(e.target.value)} />


                    <input
                        type="number"
                        name="baths"
                        min='0'
                        value={baths}
                        className="inputs"
                        placeholder="No of baths"
                        required
                        onChange={(e)=>setBaths(e.target.value)} />



                    <input
                        type="text"
                        name="size"
                        value={size}
                        className="inputs"
                        placeholder="Enter Area in sqft"
                        required
                        onChange={(e)=>setSize(e.target.value)} />


                    <input
                        type="text"
                        name="country"
                        value={country}
                        className="inputs"
                        placeholder="Enter country"
                        required
                        onChange={(e)=>setCountry(e.target.value)}/>


                    <input
                        type="text"
                        name="city"
                        value={city}
                        className="inputs"
                        placeholder="Enter city"
                        required
                        onChange={(e)=>setCity(e.target.value)} />


                    <input
                        type="text"
                        name="postalcode"
                        value={postalcode}
                        className="inputs"
                        placeholder="Enter postalcode"
                        required
                        onChange={(e)=>setPostalCode(e.target.value)} />

                    <br />
                    <button className='logbtn'>Submit</button>
                    <br/>
                </form>
                    <button className='logbtn' onClick={chalo}>try button</button>
            </div>
        </>
    )
}

export default AddProperty
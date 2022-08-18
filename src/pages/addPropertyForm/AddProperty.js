import axios from 'axios'
import { ethers } from "ethers";
import {ERC721ABI,ERC72FACTORYABI,ERC72FACTORYContractAddress} from "../../Redux/constants/erc721ABI"
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addProperty } from '../../Redux/actions/propertyActions'
import './AddProperty.css'
// import { Clone } from '../../Redux/actions/connectWalletAction'
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
    const [numberOfSupplies, setNumberOfSupplies] = useState(0)
    const [propertyAddress, setPropertyAddress] = useState('')
    const [propertyPrice, setPropertyPrice] = useState(0)
    const [propertyImages, setPropertyImages] = useState([])
    const [numberOfTokenPerWallet, setNumberOfTokenPerWallet] = useState(0)
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
    const [CloneAddress, setCloneAddress] = useState(null)
    const [CloneOwner, setCloneOwner] = useState(null)
    const [Pricepertoken, setPricepertoken] = useState(null)

    // var _cloneOwner
    // var _cloneAdd


 
    const Clone = async (_propertyAddress,_ownerName,_totalSupply, _tokensPerWallet) => {
		try {
			let pricePerToken = (propertyPrice/ETHpriceToUSD).toString()
			setPricepertoken(pricePerToken)
			pricePerToken = ethers.utils.parseEther(pricePerToken, 18)
			 console.log(pricePerToken)
            const accounts = await window.ethereum.request({ method: "eth_requestAccounts" })
            const address = accounts[0]
            let provider = new ethers.providers.Web3Provider(window.ethereum)
            let signer = provider.getSigner()
        const erc721Factory = new ethers.Contract(ERC72FACTORYContractAddress,ERC72FACTORYABI,signer,{gas: 2100000, gasPrice: 8000000000})
       
        const txResponse = await erc721Factory.cloneContract(_propertyAddress,_ownerName,_totalSupply, pricePerToken,_tokensPerWallet)
			erc721Factory.on("CloneCreatedAt",  (from,cloneAdd) => {
				setCloneAddress(prevAdd=>(prevAdd = from))
				setCloneOwner(prevAdd=>(prevAdd = cloneAdd))
				
			})
			// console.log("owner 1111", cloneOwner)
			// console.log("Address 11111", cloneAddress)
			
								
			
		



    } 
    catch (error) {
        console.log(error)
    }
    
	}
	
	useEffect(() => {
		
		getEth()
		if (CloneOwner !== null && CloneAddress !== null && Pricepertoken !== null) {
			submitHandler()
			console.log(CloneAddress)
			console.log(CloneOwner)
			console.log(Pricepertoken)
		}
			
		// console.log(ETHpriceToUSD)

	
	  }, [CloneOwner,CloneAddress,Pricepertoken]);


   const handleCloneValues = async (from,cloneAdd)=>{
	//    submitHandler(from, cloneAdd)
	   let cloneOwner = await from
	   let cloneAddress = await cloneAdd
	   setCloneAddress(()=>cloneAddress)
	   setCloneOwner(()=>cloneOwner)
	   

   }

    const getEth = async ()=>{
        const  {data}  = await axios.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD' )
		setETHpriceToUSD(data.RAW.ETH.USD.PRICE)
		// console.log(data.RAW.ETH.USD.PRICE)
      }

	  // let value=new BigNumber(pricePerToken).shiftedBy(18).toString()
      
      
      
      const submitHandler = async (e) => {
		//   e.preventDefault()
		  if (e && e.preventDefault) { e.preventDefault(); }
		  
		//   Clone(propertyAddress,ownerName,numberOfSupplies, pricePerToken,numberOfTokenPerWallet)
      
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
        
        // var pr = pricePerToken.toString();
        // console.log(typeof pr)
        
        for(let i = 0; i < arr.length; i++){
            formData.append('propertyImages',arr[i])
        }  
        for(let i = 0; i < arr1.length; i++){
            formData.append('propertyDocuments',arr1[i])
        }
		  formData.append('ownerName', ownerName)
        formData.append('cloneAddress',CloneAddress)
        formData.append('cloneOwner',CloneOwner)
        formData.append('numberOfSupplies',numberOfSupplies)
        formData.append('propertyAddress',propertyAddress)
        formData.append('propertyPrice',propertyPrice)
        formData.append('PricePerToken',Pricepertoken)
        formData.append('NumberOfTokenPerWallet',numberOfTokenPerWallet)
        formData.append('beds',beds)
        formData.append('baths',baths)
        formData.append('country',country)
        formData.append('size',size)
        formData.append('city',city)
        formData.append('postalcode',postalcode)
        console.log(formData)
       
		if(CloneAddress !== null && CloneOwner !== null){
        dispatch(addProperty(formData))
        alert("successfully submitted property")
			// navigate('/')
		}

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
                        type="Number"
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
                        min='0'
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
                        type="Number"
                        name="NumberOfTokenPerWallet"
                        value={numberOfTokenPerWallet}
                        className="inputs"
                        min='0'
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
                        type="Number"
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
                    {/* <button className='logbtn' onClick={submitHandler}>try button</button> */}
                    <button className='logbtn' onClick={()=>Clone(propertyAddress,ownerName,numberOfSupplies,numberOfTokenPerWallet)}>try button</button>
            </div>
        </>
    )
}
// propertyAddress,ownerName,numberOfSupplies, pricePerToken,numberOfTokenPerWallet

export default AddProperty
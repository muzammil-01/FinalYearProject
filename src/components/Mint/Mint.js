import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { ethers } from "ethers";
import { BigNumber } from 'ethers';
import { ERC721ABI } from "../../Redux/constants/erc721ABI"

    
    
function Mint({id}) {

    const [CloneAddress, setCloneAddress] = useState(null)
    const [CloneOwner, setCloneOwner] = useState()
    const [TokenPrice, setTokenPrice] = useState()
    useEffect(() => {
        getDetail()
    }, [CloneAddress,CloneOwner,TokenPrice])
    
    const getDetail = async ()=>{
        const { data } = await axios.get(`http://localhost:3001/api/property/${id}`)
      data.cloneAddress &&  setCloneAddress(data.cloneAddress)
      data.cloneOwner && setCloneOwner(data.cloneOwner)
      data.PricePerToken && setTokenPrice(data.PricePerToken)  
    }
    CloneAddress && console.log(CloneAddress)
    CloneOwner && console.log(CloneOwner)
    TokenPrice && console.log(TokenPrice)

        
        
        const Mint=async (_quantity)=>{
            try{
            console.log("TokenPrice",TokenPrice)
            console.log("_quantity",_quantity)
            console.log("CloneOwner",CloneAddress)
            let price=(TokenPrice*_quantity)
            console.log("price",price)
            let value=ethers.utils.parseEther(`${price}`, 18)
            console.log(value)
            const accounts = await window.ethereum.request({ method: "eth_requestAccounts" })
            const address = accounts[0]
            let provider = new ethers.providers.Web3Provider(window.ethereum)
            let signer = provider.getSigner()
        const erc721= new ethers.Contract(CloneOwner, ERC721ABI, signer)
        const mint= await erc721.mint(CloneAddress,`${_quantity}`,{value: value })
        erc721.on("Mint", (owner, quantity) => {
console.log(owner)
console.log(quantity)
})
console.log(mint)
 
}
catch (error) {
    console.log(error)
}
    }

    return (
    <div>Mint <button onClick={()=>Mint(2)}>Mint</button></div>
  )
}

export default Mint
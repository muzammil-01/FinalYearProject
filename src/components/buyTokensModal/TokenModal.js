import React , {useState} from 'react'
import './TokenModal.css'
import {useEffect} from 'react'
import axios from 'axios'
import { ethers } from "ethers";
import { BigNumber } from 'ethers';
import { ERC721ABI } from "../../Redux/constants/erc721ABI"

export default function TokenModal({setOpenModal}) {
    const [calculate, setCalculate] = useState(0)
    const [selectTokens, setSelectTokens] = useState(0)
    const [tokenPrice, setTokenPrice] = useState(0)

// ______________________Fetch______________________
  //   const getDetail = async ()=>{
  //     const { data } = await axios.get(`http://localhost:3001/api/property/${id}`)
  //   data.cloneAddress &&  setCloneAddress(data.cloneAddress)
  //   data.cloneOwner && setCloneOwner(data.cloneOwner)
  //   data.PricePerToken && setTokenPrice(data.PricePerToken)  
  // }

//   const Transfer=async (_quantity)=>{
//     try{
//     // console.log("TokenPrice",TokenPrice)
//     // console.log("_quantity",_quantity)
//     // console.log("CloneOwner",CloneAddress)
//     let price=(TokenPrice*_quantity)
//     console.log("price",price)
//     let value=ethers.utils.parseEther(`${price}`, 18)
//     console.log(value)
//     const accounts = await window.ethereum.request({ method: "eth_requestAccounts" })
//     const address = accounts[0]
//     let provider = new ethers.providers.Web3Provider(window.ethereum)
//     let signer = provider.getSigner()
// const erc721= new ethers.Contract(CloneOwner, ERC721ABI, signer)
// const mint= await erc721.mint(CloneAddress,`${_quantity}`,{value: value })
// erc721.on("Mint", (owner, quantity) => {
// console.log(owner)
// console.log(quantity)
// })
// console.log(mint)

// }
// catch (error) {
// console.log(error)
// }
// }


  return (
    
        <div className="modalBackground">
          <div className="modalContainer">
            <div className="titleCloseBtn">
              <button
                onClick={() => {
                  setOpenModal(false);
                }}
              >
                X
              </button>
            </div>
            <div className="title">
              <p>Enter No of tokens you want to buy and price of 1 token</p>
            </div>
            <div className="body">
            <p>TOKEN STOCK : 8980 </p>
            <p> Enter Tokens: <input type="number"  min={0} onChange={(e)=> setSelectTokens(e.target.value)}/> X 1 token price = <input type="number" min={0} onChange={(e)=> setTokenPrice(e.target.value)}/> = <span>{calculate}</span>
                </p>
            </div>
            <div className="footer">
              <button
                onClick={() => {
                  setCalculate(selectTokens*tokenPrice)
                }}
               id="calculateBtn"
              >
                Calculate
              </button>
              <button>Buy tokens</button>
            </div>
          </div>
        </div>
    
  )
}

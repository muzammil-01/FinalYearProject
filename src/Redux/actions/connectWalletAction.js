import { ethers } from "ethers";
import {ERC721ABI,ERC72FACTORYABI,ERC72FACTORYContractAddress} from "../constants/erc721ABI"

import {
    ACCOUNT_CONNECT_SUCCESS,
    ACCOUNT_CONNECT_FAIL,
    GET_SIGNER_SUCCESS,
    GET_SIGNER_FAIL,
    SELLER_WALLET_AND_CLONE_ADDRESS_SUCCESS,
    SELLER_WALLET_AND_CLONE_ADDRESS_FAIL
} from '../constants/walletConstants'

let provider;
let signer;
let CurrentWalletAddress;
// let clone={cloneAddress,cloneOwner}
let cloneAddress
let cloneOwner 
 


export const connect = () => async (dispatch) => {
    try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" })
        const address = accounts[0]
        provider = new ethers.providers.Web3Provider(window.ethereum)
        signer = provider.getSigner()
        CurrentWalletAddress= await signer.getAddress()
        console.log(provider)
        console.log(signer)
        console.log(CurrentWalletAddress)///save in state
        show()
        dispatch({
         type: ACCOUNT_CONNECT_SUCCESS,
         payload : address,signer,address
        })
    } 
    catch(error){
        // dispatch({
        //     type: ACCOUNT_CONNECT_FAIL,
        //     payload: error
        // })
    }
   }
    // function connectContract(){
    //     return erc721Factory;
    // }
    // function ERC721Contract(erc721Add){
        //     let erc721 = new ethers.Contract(erc721Add, erc721ABI, provider)
        //     return erc721
        // }
        
        export const Clone = (_propertyAddress,_ownerName,_totalSupply, _pricePerToken,_tokensPerWallet) => async (dispatch) => {
            try {
            const erc721Factory = new ethers.Contract(ERC72FACTORYContractAddress,ERC72FACTORYABI,provider)
           
            const txResponse = await erc721Factory.cloneContract(_propertyAddress,_ownerName,_totalSupply, _pricePerToken,_tokensPerWallet)
            let receipt = await txResponse.wait();
            let logs = receipt.events;
            erc721Factory.on("CloneCreatedAt", (from, cloneAdd) => {
                console.log(`contract was created by${from} `)
                console.log(`clone is deployed at ${cloneAdd}`)
                cloneAddress=cloneAdd
                cloneOwner=from
            })
            dispatch({
                 type: SELLER_WALLET_AND_CLONE_ADDRESS_SUCCESS,
                 payload : cloneAddress, cloneOwner
                }) 
        } 
        catch (error) {
            console.log(error)
            // dispatch({
            //     type:SELLER_WALLET_AND_CLONE_ADDRESS_FAIL ,
            //     payload: {error:"error detected"}
            // })
        }
    }

    // export const mint = (ownerWalletAddress,quantity,amount) => async (dispatch) => {
    //     try {
    //         let erc721=ERC721Contract(erc721Add)
    //         const txResponse=await erc721.mint(ownerWalletAddress,quantity,{value : ethers.utils.parseEther(amount)})
    //     } catch (error) {
            
    //     }
    // }
    // export const listForsale = (quantity) => async (dispatch) => {
    //     try {
    //         let erc721=ERC721Contract(erc721Add)
    //         const txResponse=await erc721.listForsale(quantity)
    //     } catch (error) {
            
    //     }
    // }
    // export const transfer = (SellerWalletAddress,BuyerWalletAddress,quantity,amount) => async (dispatch) => {
    //     try {
    //         let erc721=ERC721Contract(erc721Add)
    //         const txResponse=await erc721.transfer(SellerWalletAddress,BuyerWalletAddress,quantity,{value : ethers.utils.parseEther(amount)})
    //         erc721Factory.on("ListedTokenSold", (Seller,Buyer, quantity) => {
    //             console.log(`contract was created by${from} `)
    //             console.log(`clone is deployed at ${cloneAdd}`)
    //             clone.cloneAddress=cloneAdd
    //             clone.cloneOwner=from
    //         })
    //     } catch (error) {
            
    //     }
    // }

export const show = () =>{

    console.log(provider)
    console.log(signer)
    // console.log(addressTo)
}



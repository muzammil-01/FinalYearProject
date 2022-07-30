import { ethers } from "ethers";

import {
    ACCOUNT_CONNECT_SUCCESS,
    ACCOUNT_CONNECT_FAIL,
    GET_SIGNER_SUCCESS,
    GET_SIGNER_FAIL
} from '../constants/walletConstants'


export const connect = () => async (dispatch) => {
    try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" })
        const address = accounts[0]
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const addressTo= await signer.getAddress()
        console.log(addressTo)
        console.log(signer)
        console.log(address)
      dispatch({
         type: ACCOUNT_CONNECT_SUCCESS,
         payload : address,signer,addressTo
        })
    } 
    catch(error){
        // dispatch({
        //     type: ACCOUNT_CONNECT_FAIL,
        //     payload: error
        // })
    }
}
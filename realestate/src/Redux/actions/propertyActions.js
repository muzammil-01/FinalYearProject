import {
    ADD_PROPERTY_REQUEST,
    ADD_PROPERTY_SUCCESS,
    ADD_PROPERTY_FAIL,
    LIST_PROPERTY_REQUEST,
    LIST_PROPERTY_SUCCESS,
    LIST_PROPERTY_FAIL,
    PROPERTY_DETAILS_REQUEST,
    PROPERTY_DETAILS_SUCCESS,
    PROPERTY_DETAILS_FAIL,
    LIST_USER_SPECIFIC_PROPERTY_REQUEST,
    LIST_USER_SPECIFIC_PROPERTY_SUCCESS,
    LIST_USER_SPECIFIC_PROPERTY_FAIL
} from '../constants/propertyConstants'

import axios from 'axios'

var a = localStorage.getItem('userInfo')
if(a){
  var token = JSON.parse(a).authToken
}

// Add new property
export const addProperty = (propertyName, propertyLocation, beds, baths, size, country, city, postalcode, streetAddress) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_PROPERTY_REQUEST
    })
    const config = {
      headers: {
        'Content-Type': 'application/json',
        "auth-token":token
      }
    }
   
    const  {data}  = await axios.post('http://localhost:3001/api/property/addproperty', {propertyName, propertyLocation, beds, baths, size, country, city, postalcode, streetAddress} ,
     config)
    console.log(data)

    dispatch({
      type: ADD_PROPERTY_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ADD_PROPERTY_FAIL,
      payload: error.response.data
    })
  }
}



// Get All properties
export const getAllProperties = () => async (dispatch) => {
  try {
    dispatch({
      type: LIST_PROPERTY_REQUEST
    })
   
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const {data} = await axios.get("http://localhost:3001/api/property/allproperties",config)

    dispatch({
      type: LIST_PROPERTY_SUCCESS,
      payload: data,
    })

  } catch (error) {
    dispatch({
      type: LIST_PROPERTY_FAIL,
      payload: error.response.data
    })
  }
}


// Get user specific properties
export const getUserSpecificProperties = () => async (dispatch) => {
  try {
    dispatch({
      type: LIST_USER_SPECIFIC_PROPERTY_REQUEST
    })
   
    const config = {
      headers: {
        "auth-token":token
      }
    }
    const {data} = await axios.get("http://localhost:3001/api/property/userproperties",config)
    console.log(data)

    dispatch({
      type: LIST_USER_SPECIFIC_PROPERTY_SUCCESS,
      payload: data,
    })

  } catch (error) {
    dispatch({
      type: LIST_USER_SPECIFIC_PROPERTY_FAIL,
      payload: error.response.data
    })
  }
}

export const listPropertyDetails = (id) => async (dispatch) => {
  try {
    dispatch({
       type: PROPERTY_DETAILS_REQUEST 
      })

    const { data } = await axios.get(`http://localhost:3001/api/property/${id}`)
    console.log(data)

    dispatch({
      type: PROPERTY_DETAILS_SUCCESS,
      payload: data
    })
  } catch (error) {
    console.error("hello world")
    // dispatch({
     
    //   type: PROPERTY_DETAILS_FAIL,
    //   payload: error.response && error.response.data.message ? error.response.data.message : error.message,
     
    // })
  }
}


import {
    ADD_PROPERTY_REQUEST,
    ADD_PROPERTY_SUCCESS,
    ADD_PROPERTY_FAIL,
} from '../constants/propertyConstants'

import axios from 'axios'

// Add new property
export const addProperty = (propertyName, propertyLocation, beds, baths, size, country, city, postalcode, streetAddress) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_PROPERTY_REQUEST
    })
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const  {data}  = await axios.post('http://localhost:3001/api/property/addproperty', {propertyName, propertyLocation, beds, baths, size, country, city, postalcode, streetAddress} ,
     config)
    console.log(data)

    dispatch({
      type: ADD_PROPERTY_SUCCESS,
      payload: data,
    })

    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: ADD_PROPERTY_FAIL,
      payload: error.response.data
    })
  }
}
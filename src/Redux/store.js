import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";

import {
    userLoginReducer,
    userRegisterReducer,
} from './reducers/userReducers'

import {
    addPropertyReducer,
    allPropertiesReducer,
    propertyDetailsReducer
} from './reducers/propertyReducers'

const reducer = combineReducers({
    userRegister: userRegisterReducer,
    userLogin: userLoginReducer,
    propertyAdd: addPropertyReducer,
    listAll: allPropertiesReducer,
    propertyDetails: propertyDetailsReducer
})

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    userLogin: { userInfo: userInfoFromStorage}
}
const middleware = [thunk]

const store = createStore(
    reducer,
   initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store
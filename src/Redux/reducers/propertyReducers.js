import {
    ADD_PROPERTY_REQUEST,
    ADD_PROPERTY_SUCCESS,
    ADD_PROPERTY_FAIL,
} from '../constants/propertyConstants'


export const addPropertyReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_PROPERTY_REQUEST:
            return { loading: true }
        case ADD_PROPERTY_SUCCESS:
            return { loading: false, propertyData: action.payload }
        case ADD_PROPERTY_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}
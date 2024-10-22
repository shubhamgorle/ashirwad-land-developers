import { GET_DATA_FAIL, GET_DATA_REQUEST, GET_DATA_SUCCESS, NEW_DATA_FAIL, NEW_DATA_REQUEST, NEW_DATA_SUCCESS } from "./newDataActionTypes";

export const newDataReducer = ((state = { Entry: {} }, action) => {
    switch (action.type) {
        case NEW_DATA_REQUEST:
            return {
                ...state,
                loading: true
            }
        case NEW_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,  
                Entry: action.payload
            }
        case NEW_DATA_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
})

export const getAllDataReducer = ((state = { AllData: [] }, action) => {
    switch (action.type) {
        case GET_DATA_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,  
                AllData: action.payload
            }
        case GET_DATA_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
})
import { NEW_DATA_SUCCESS, NEW_DATA_FAIL, NEW_DATA_REQUEST, GET_DATA_REQUEST, GET_DATA_SUCCESS, GET_DATA_FAIL } from "./newDataActionTypes";
import axios from 'axios'
export const createNewData = (formData) => async (dispatch, getState) => {
    try {
        const config = {
            headers: { "Content-Type": "application/json" }
        }
        dispatch({ type: NEW_DATA_REQUEST })
        let { data } = await axios.post('/ashirwad/mendhepathar/new', formData, config);
        dispatch({
            type: NEW_DATA_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: NEW_DATA_FAIL,
            payload: error
        })
    }
}

export const getAllData = () => async (dispatch, getState) => {
    try {
       
        dispatch({ type: GET_DATA_REQUEST })
        let { data } = await axios.get('/ashirwad/mendhepathar/get');
        dispatch({
            type: GET_DATA_SUCCESS,
            payload: data.data
        })
    } catch (error) {
        dispatch({
            type: GET_DATA_FAIL,
            payload: error
        })
    }
}
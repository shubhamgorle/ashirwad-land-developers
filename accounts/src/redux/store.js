import { deleteDataReducer, detailsDataReducer, getAllDataReducer, newDataReducer } from "./newDataReducer";
import {legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
const reducer = combineReducers({
    newData : newDataReducer,
    getAllData : getAllDataReducer,
    deleteData : deleteDataReducer,
    getDetails : detailsDataReducer
})
const middleware = [thunk];

const store = createStore(reducer,composeWithDevTools(applyMiddleware(...middleware)));

export default store

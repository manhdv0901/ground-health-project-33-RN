import { createStore, applyMiddleware } from "redux";
import combineReducers from './reducers/index';
import thunk from "redux-thunk";

const initialState = {};
const middleware = [thunk];

export default createStore(
    combineReducers,
    initialState,
    applyMiddleware(...middleware),
);
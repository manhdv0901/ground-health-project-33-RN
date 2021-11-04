import { combineReducers } from "redux";
import reducerLogin from "./reducerLogin";
import reducerNameUser from "./reducerNameUser";

export default combineReducers({
    login: reducerLogin,
    name: reducerNameUser,
});
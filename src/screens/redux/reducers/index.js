import { combineReducers } from "redux";
import reducerLogin from "./reducerLogin";
import reducerNameUser from "./reducerNameUser";
import reducerLoading from "./reducerLoading";

export default combineReducers({
    login: reducerLogin,
    name: reducerNameUser,
    load: reducerLoading,
});
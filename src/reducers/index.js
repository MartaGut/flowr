import { combineReducers } from "redux";
import authReducer from "./authReducer";
import flowerReducer from "./flowerReducer";

export default combineReducers({
    flowers: flowerReducer,
    authReducer: authReducer
});
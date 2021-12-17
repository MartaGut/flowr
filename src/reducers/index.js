import { combineReducers } from "redux";
import authReducer from "./authReducer";
import flowerReducer from "./flowerReducer";
import sightingReducer from "./sightingReducer";

export default combineReducers({
    flowers: flowerReducer,
    authReducer: authReducer,
    sighting: sightingReducer
});
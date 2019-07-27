import { combineReducers } from "redux";
import heroReducer from "./herosReducer";

export default combineReducers({
    heros: heroReducer
});

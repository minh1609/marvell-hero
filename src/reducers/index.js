import { combineReducers } from "redux";
import heroReducer from "./herosReducer";
import totalNumber from "./totalNumber";

export default combineReducers({
    heros: heroReducer,
    totalNumberOfHero: totalNumber
});

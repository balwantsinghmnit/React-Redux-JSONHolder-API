import postReducer from "./postReducer";
import {combineReducers} from "redux";

export default combineReducers({
    posts:postReducer
});
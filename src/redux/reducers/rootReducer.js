import {combineReducers} from "redux";
import {loginReducer} from "./loginReducer";
import {myReducer} from "./myReducer";

export const rootReducer = combineReducers({
    login : loginReducer,
    my : myReducer
})
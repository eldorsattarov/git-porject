import {CHANGE_MODAL} from "../types/myType";
import {toast} from "react-toastify";


export const updateState = (data) =>{
    return{
        type : CHANGE_MODAL,
        payload : data
    }
}
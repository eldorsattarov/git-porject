import {CHANGE_MODAL} from "../types/myType";
import {toast} from "react-toastify";


const initialState ={
    modalOpen : false
}

export const myReducer = (state=initialState,action) =>{
    if (action.type === CHANGE_MODAL){
        return {
            ...state,
            ...action.payload
        }
        toast.success("chiqdi")
    } 
    return state;
}
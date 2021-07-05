import axios from "axios";
import {API_NAME,TOKEN_NAME} from "../../tools/constans";
import {toast} from "react-toastify";

export const signIn = (event,values) =>{
    axios.post(API_NAME + "auth/login", values)
        .then((res)=>{
            localStorage.setItem(TOKEN_NAME, res.data.tokenType + " " + res.data.accessToken)
        })
}


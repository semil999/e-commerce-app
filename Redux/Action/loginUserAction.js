import axios from "axios"
import { LOGINUSER } from "../Types/types"

export const getLoginUser = () => {
    return (dispatch) => {
        axios.get('http://192.168.29.148:3001/loginUser').then(res => {
            dispatch({
                type : LOGINUSER,
                data : res.data
            })
        })
    }
}

export const addLoginUser = (obj) => {
    return (dispatch) => {
        axios.post('http://192.168.29.148:3001/loginUser' , obj).then(() => {
            dispatch(getLoginUser())
        })
    }
}

export const logoutUser = (id) => {
    return (dispatch) => {
        axios.delete(`http://192.168.29.148:3001/loginUser/${id}`).then(() => {
            dispatch(getLoginUser())
        })
    }
}
import axios from "axios"
import { USER } from "../Types/types"

export const getUserData = () => {
    return (dispatch) => {
        axios.get('http://192.168.29.148:3001/user').then(res => {
            dispatch({
                type : USER,
                data : res.data
            })
        })
    }
}

export const addUserData = (obj) => {
    return (dispatch) => {
        axios.post('http://192.168.29.148:3001/user' , obj).then(() => {
            dispatch(getUserData())
        })
    }
}
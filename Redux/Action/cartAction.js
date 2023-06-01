import axios from "axios"
import { CARTDATA } from "../Types/types"

export const getCartData = () => {
    return (dispatch) => {
        axios.get('http://192.168.29.148:3001/cartdata').then(res => {
            dispatch({
                type : CARTDATA,
                data : res.data
            })
        })
    }
}

export const addCartData = (obj) => {
    return (dispatch) => {
        axios.post('http://192.168.29.148:3001/cartdata' , obj).then(() => {
            dispatch(getCartData())
        })
    }
}

export const updateCartData = (obj) => {
    return (dispatch) => {
        axios.put(`http://192.168.29.148:3001/cartdata/${obj.id}` , obj).then(() => {
            dispatch(getCartData())
        })
    }
}

export const deleteCartData = (id) => {
    return (dispatch) => {
        axios.delete(`http://192.168.29.148:3001/cartdata/${id}`).then(() => {
            dispatch(getCartData())
        })
    }
}
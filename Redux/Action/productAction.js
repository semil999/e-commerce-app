import axios from "axios";
import { PRODUCT } from "../Types/types";
// import { PRODUCT } from "../Types/types";

// export const getServerSideProps = async () => {
//     const res = await fetch('http://192.168.29.148:3001/products');
//     const data = await res.json();
//     return { props: {} };
// };

export const getProductData = () => {
    return (dispatch) => {
        axios.get('http://192.168.29.148:3001/products').then(res => {
            dispatch({
                type : PRODUCT,
                data : res.data
            })
        })
    }
}

export const updateProductData = (obj) => {
    return (dispatch) => {
        axios.put(`http://192.168.29.148:3001/products/${obj.id}` , obj).then(() => {
            dispatch(getProductData())
        })
    }
}
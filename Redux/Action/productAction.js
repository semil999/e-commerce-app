import axios from "axios";
import { PRODUCT } from "../Types/types";

// export const getServerSideProps = async () => {
//     const res = await fetch('http://localhost:3001/products');
//     const data = await res.json();
//     return { props: {} };
// };

export const getProductData = () => {
    return (dispatch) => {
        axios.get('http://localhost:3001/products').then(res => {
            dispatch({
                type : PRODUCT,
                data : res.data
            })
        })
    }
}
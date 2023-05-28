import { PRODUCT } from "../Types/types"

const initialState = {
    products : []
}
const productReducer = (state = initialState , action) => {
    switch(action.type){
        case PRODUCT :
            return {
                products : action.data
            }

        default :
            return state
    }
}

export default productReducer
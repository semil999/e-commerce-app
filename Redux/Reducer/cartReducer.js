import { CARTDATA } from "../Types/types"

let initialState = {
    cartData : []
}

const cartReducer = (state = initialState , action) => {
    switch(action.type){
        case CARTDATA :
            return {
                cartData : action.data
            }
            
        default :
            return state
    }
}

export default cartReducer
import { USER } from "../Types/types"

const initialState = {
    user : []
}

const userReducer = (state = initialState , action) => {
    switch(action.type){
        case USER :
            return {
                user : action.data
            }

        default :
            return state
    }
}

export default userReducer
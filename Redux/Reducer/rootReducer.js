import { combineReducers } from "redux";
import productReducer from "./productReducer";
import loginUserReducer from "./loginUserReducer";
import userReducer from "./userReducer";
import cartReducer from "./cartReducer";

export const rootReducer = combineReducers({
    products : productReducer,
    loginUser : loginUserReducer,
    user : userReducer,
    cartData : cartReducer
})
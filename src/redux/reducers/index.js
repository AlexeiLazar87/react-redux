import {combineReducers} from "redux";
import {productsReducer} from "./productsReduser";

export const rootReducer = combineReducers({
    products: productsReducer
});
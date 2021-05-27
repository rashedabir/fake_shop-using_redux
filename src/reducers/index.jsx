import { combineReducers } from "redux"
import { productReducer, viewProductReducer } from "./productReducer"

const reducers = combineReducers({
    allProducts: productReducer,
    product: viewProductReducer,
})

export default reducers;
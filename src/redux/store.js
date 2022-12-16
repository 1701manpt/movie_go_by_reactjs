import { configureStore } from "@reduxjs/toolkit"
import customerReducer from "./slices/customer"
import authReducer from "./slices/auth"
import productReducer from "./slices/product"
import orderReducer from "./slices/order"

//Global store
export const store = configureStore({
    reducer: {
        //reducers are defined here
        customer: customerReducer,
        auth: authReducer,
        product: productReducer,
        order: orderReducer,
    },
})
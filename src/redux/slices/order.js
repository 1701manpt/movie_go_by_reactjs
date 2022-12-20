import { createSlice } from "@reduxjs/toolkit"
import { getAll } from "../callApi/order"

const initialState = {
    orders: {
        loading: false,
        error: false,
        list: null,
    }
}

export const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // get all
        builder.addCase(getAll.pending, (state, action) => {
            state.orders.loading = true
            state.orders.list = null
        })
        builder.addCase(getAll.fulfilled, (state, action) => {
            state.orders.loading = false
            state.orders.list = action.payload.data
            state.orders.error = false
        })
        builder.addCase(getAll.rejected, (state, action) => {
            state.orders.loading = false
            state.orders.error = false
            state.orders.list = null
        })
    }
})

export default orderSlice.reducer
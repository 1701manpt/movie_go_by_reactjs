import { createSlice } from "@reduxjs/toolkit"
import { getAll } from "../callApi/product"

const initialState = {
    loading: false,
    error: null,
    data: null,
}

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // get all
        builder.addCase(getAll.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(getAll.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
            state.error = null
        })
        builder.addCase(getAll.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
})

export default productSlice.reducer
import { createSlice } from "@reduxjs/toolkit"
import { getAll, getById } from "../callApi/product"

const initialState = {
    list: {
        loading: false,
        products: null,
    },
    detail: {
        loading: false,
        product: null
    }
}

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // get all
        builder.addCase(getAll.pending, (state, action) => {
            state.list.loading = true
        })
        builder.addCase(getAll.fulfilled, (state, action) => {
            state.list.loading = false
            state.list.products = action.payload.data
        })
        builder.addCase(getAll.rejected, (state, action) => {
            state.list.loading = false
            state.list.products = null
        })

        // get by id
        builder.addCase(getById.pending, (state, action) => {
            state.detail.loading = true
        })
        builder.addCase(getById.fulfilled, (state, action) => {
            state.detail.loading = false
            state.detail.product = action.payload.data
        })
        builder.addCase(getById.rejected, (state, action) => {
            state.detail.loading = false
            state.detail.product = null
        })
    }
})

export default productSlice.reducer
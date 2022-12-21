import { createSlice } from "@reduxjs/toolkit"
import { getAll, getById, getProductsByCategory } from "../callApi/category"

const initialState = {
    list: {
        loading: false,
        categories: null,
    },
    detail: {
        loading: false,
        category: null
    },
    productList: {
        loading: false,
        products: null,
    }
}

export const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // get all
        builder.addCase(getAll.pending, (state, action) => {
            state.list.loading = true
        })
        builder.addCase(getAll.fulfilled, (state, action) => {
            state.list.loading = false
            state.list.categories = action.payload.data
        })
        builder.addCase(getAll.rejected, (state, action) => {
            state.list.loading = false
            state.list.categories = null
        })

        // get by id
        builder.addCase(getById.pending, (state, action) => {
            state.detail.loading = true
        })
        builder.addCase(getById.fulfilled, (state, action) => {
            state.detail.loading = false
            state.detail.category = action.payload.data
        })
        builder.addCase(getById.rejected, (state, action) => {
            state.detail.loading = false
            state.detail.category = null
        })

        // get products by category
        builder.addCase(getProductsByCategory.pending, (state, action) => {
            state.productList.loading = true
        })
        builder.addCase(getProductsByCategory.fulfilled, (state, action) => {
            state.productList.loading = false
            state.productList.products = action.payload.data
        })
        builder.addCase(getProductsByCategory.rejected, (state, action) => {
            state.productList.loading = false
            state.productList.products = null
        })
    }
})

export default categorySlice.reducer
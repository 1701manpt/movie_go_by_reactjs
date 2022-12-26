import { createSlice } from '@reduxjs/toolkit'
import {
    getAll,
    getById,
    getProductsByCategory,
} from '~/redux/callApi/category'

const initialState = {
    list: {
        loading: false,
        data: null,
        message: null,
        error: null,
    },
    detail: {
        loading: false,
        data: null,
        message: null,
        error: null,
    },
    productList: {
        loading: false,
        data: null,
        message: null,
        error: null,
    },
}

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // get all
        builder.addCase(getAll.pending, (state, action) => {
            state.list.loading = true
            state.list.data = null
            state.list.message = null
            state.list.error = null
        })
        builder.addCase(getAll.fulfilled, (state, action) => {
            state.list.loading = false
            state.list.data = action.payload.data
            state.list.message = action.payload.message
            state.list.error = null
        })
        builder.addCase(getAll.rejected, (state, action) => {
            state.list.loading = false
            state.list.data = null
            state.list.message = action.payload.message
            state.list.error = action.payload.error
        })

        // get by id
        builder.addCase(getById.pending, (state, action) => {
            state.detail.loading = true
            state.detail.data = null
            state.detail.message = null
            state.detail.error = null
        })
        builder.addCase(getById.fulfilled, (state, action) => {
            state.detail.loading = false
            state.detail.data = action.payload.data
            state.detail.message = action.payload.message
            state.detail.error = null
        })
        builder.addCase(getById.rejected, (state, action) => {
            state.detail.loading = false
            state.detail.data = null
            state.detail.message = action.payload.message
            state.detail.error = action.payload.error
        })

        // get products by category
        builder.addCase(getProductsByCategory.pending, (state, action) => {
            state.productList.loading = true
            state.productList.data = null
            state.productList.message = null
            state.productList.error = null
        })
        builder.addCase(getProductsByCategory.fulfilled, (state, action) => {
            state.productList.loading = false
            state.productList.data = action.payload.data
            state.productList.message = action.payload.message
            state.productList.error = null
        })
        builder.addCase(getProductsByCategory.rejected, (state, action) => {
            state.productList.loading = false
            state.productList.data = null
            state.productList.message = action.payload.message
            state.productList.error = action.payload.error
        })
    },
})

export default categorySlice.reducer

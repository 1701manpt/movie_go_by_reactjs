import { createSlice } from '@reduxjs/toolkit'
import { getAll } from '../callApi/order'

const initialState = {
    list: {
        loading: false,
        data: null,
        message: null,
        error: false,
    },
}

export const orderSlice = createSlice({
    name: 'order',
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
    },
})

export default orderSlice.reducer

import { createSlice } from '@reduxjs/toolkit'
import { getById } from '~/redux/callApi/customer'

const initialState = {
    personal: {
        loading: false,
        info: null,
        message: null,
        error: null,
    },
}

export const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getById.pending, (state, action) => {
            state.personal.loading = true
            state.personal.info = null
            state.personal.message = null
            state.personal.error = null
        })
        builder.addCase(getById.fulfilled, (state, action) => {
            state.personal.loading = false
            state.personal.info = action.payload?.data
            state.personal.message = action.payload?.message
            state.personal.error = null
        })
        builder.addCase(getById.rejected, (state, action) => {
            state.personal.loading = false
            state.personal.info = null
            state.personal.message = action.payload.message
            state.personal.error = action.payload.error
        })
    },
})

export default customerSlice.reducer

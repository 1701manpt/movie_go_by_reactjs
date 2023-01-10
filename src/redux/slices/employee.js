import { createSlice } from '@reduxjs/toolkit'
import { getAll, getById, add } from '~/redux/callApi/employee'

const initialState = {
    personal: {
        loading: false,
        info: null,
        message: null,
        error: null,
    },
    list: {
        loading: false,
        data: null,
        message: null,
        error: null,
    },
    add: {
        data: null,
        loading: false,
        message: null,
        error: null,
    },
}

export const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // get by id
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

        // add
        builder.addCase(add.pending, (state, action) => {
            state.add.data = null
            state.add.loading = true
            state.add.message = null
            state.add.error = null
        })
        builder.addCase(add.fulfilled, (state, action) => {
            state.add.data = action.payload.data
            state.add.loading = false
            state.add.message = action.payload.message
            state.add.error = null
        })
        builder.addCase(add.rejected, (state, action) => {
            state.add.data = null
            state.add.loading = false
            state.add.message = action.payload.message
            state.add.error = action.payload.error
        })
    },
})

export default employeeSlice.reducer

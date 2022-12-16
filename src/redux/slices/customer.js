import { createSlice } from "@reduxjs/toolkit"
import Cookies from "js-cookie"
import { login, register } from "../callApi/customer"

const initialState = {
    loading: false,
    error: null,
    data: null,
}

export const customerSlice = createSlice({
    name: "customer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // login
        builder.addCase(login.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(login.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
            if (action.payload.data.token) {
                Cookies.set('token', action.payload.data.token)
            }
            state.error = null
        })
        builder.addCase(login.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })

        // register
        builder.addCase(register.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(register.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
            state.error = null
        })
        builder.addCase(register.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
})

export default customerSlice.reducer
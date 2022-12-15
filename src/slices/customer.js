import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import Cookies from "js-cookie"

const initialState = {
    loading: false,
    error: null,
    data: null,
}

export const login = createAsyncThunk(
    'customer/login',
    async (body, thunkAPI) => {
        const res = await fetch(`http://localhost:7000/api/customers/signin`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await res.json()

        return data
    }
)

export const register = createAsyncThunk(
    'customer/register',
    async (body, thunkAPI) => {
        const res = await fetch(`http://localhost:7000/api/customers/signup`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await res.json()

        return data
    }
)

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
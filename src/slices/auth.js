import { createSlice } from "@reduxjs/toolkit"

import Cookies from "js-cookie"

const initialState = {
    token: null,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = Cookies.get('token') || null
        },
    },
})

export const { setToken } = authSlice.actions

export default authSlice.reducer
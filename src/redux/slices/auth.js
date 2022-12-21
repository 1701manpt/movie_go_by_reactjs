import { createSlice } from "@reduxjs/toolkit"
import { login, register, logout } from "../callApi/auth"

const initialState = {
    login: {
        currentUser: null,
        status: 'idle', // 'idle', 'loading', 'successed', 'failed'
        message: null,
        validation: null
    },
    register: {
        currentUser: null,
        status: 'idle', // 'idle', 'loading', 'successed', 'failed'
        message: null,
        validation: null
    },
    logout: {
        status: 'idle', // 'idle', 'loading', 'successed', 'failed'
        message: null,
    },
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reLogin: (state, action) => {
            state.currentUser = action.payload
        }
    },
    extraReducers: (builder) => {
        // login
        builder.addCase(login.pending, (state, action) => {
            state.login.status = 'loading'
            state.login.currentUser = null
            state.login.message = null
            state.login.validation = null
        })
        builder.addCase(login.fulfilled, (state, action) => {
            if (action.payload.status === 200) {
                state.login.status = 'successed'
                state.login.currentUser = action.payload.data
                state.login.message = action.payload.message
                state.login.validation = null
            }

            if (action.payload.status !== 200) {
                state.login.status = 'failed'
                state.login.currentUser = null
                state.login.message = action.payload.message
                state.login.validation = action.payload.error
            }
        })
        builder.addCase(login.rejected, (state, action) => {
            state.login.status = 'failed'
            state.login.currentUser = null
            state.login.message = action.error.message || ''
            state.login.validation = null
        })

        // register
        builder.addCase(register.pending, (state, action) => {
            state.register.loading = true
        })
        builder.addCase(register.fulfilled, (state, action) => {
            if (action.payload.status === 200) {
                state.register.status = 'successed'
                state.register.currentUser = action.payload.data
                state.register.message = action.payload.message
                state.register.validation = null
            }

            if (action.payload.status !== 200) {
                state.register.status = 'failed'
                state.register.currentUser = null
                state.register.message = action.payload.message
                state.register.validation = action.payload.error
            }
        })
        builder.addCase(register.rejected, (state, action) => {
            state.register.loading = false
            state.register.error = true
        })

        // log out
        builder.addCase(logout.pending, (state, action) => {
            state.logout.status = 'loading'
        })
        builder.addCase(logout.fulfilled, (state, action) => {

            if (action.payload.status === 200) {
                state.logout.status = 'successed'
                state.login.status = 'idle'
                state.login.currentUser = null
                state.logout.message = action.payload.message
            }

            if (action.payload.status !== 200) {
                state.logout.status = 'failed'
                state.logout.message = action.payload.message
            }
        })
        builder.addCase(logout.rejected, (state, action) => {
            state.logout.status = 'failed'
            state.logout.message = action.error.message || ''
        })
    }
})

export const { reLogin } = authSlice.actions

export default authSlice.reducer
import { createSlice } from '@reduxjs/toolkit'
import {
    login,
    register,
    logout,
    refreshToken,
    loginAdmin,
} from '~/redux/callApi/auth'

const initialState = {
    login: {
        currentUser: null,
        loading: false,
        message: null,
        error: null,
    },
    register: {
        newUser: null,
        loading: false,
        message: null,
        error: null,
    },
    logout: {
        loading: false,
        message: null,
        error: null,
    },
    refresh: {
        loading: false,
        message: null,
        error: null,
    },
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // login
        builder.addCase(login.pending, (state, action) => {
            state.login.currentUser = null
            state.login.loading = true
            state.login.message = null
            state.login.error = null
        })
        builder.addCase(login.fulfilled, (state, action) => {
            state.login.currentUser = action.payload.data
            state.login.loading = false
            state.login.message = action.payload.message
            state.login.error = null
        })
        builder.addCase(login.rejected, (state, action) => {
            state.login.currentUser = null
            state.login.loading = false
            state.login.message = action.payload.message
            state.login.error = action.payload.error
        })

        // register
        builder.addCase(register.pending, (state, action) => {
            state.register.newUser = null
            state.register.loading = true
            state.register.message = null
            state.register.error = null
        })
        builder.addCase(register.fulfilled, (state, action) => {
            state.register.newUser = action.payload.data
            state.register.loading = false
            state.register.message = action.payload.message
            state.register.error = null
        })
        builder.addCase(register.rejected, (state, action) => {
            state.register.result = null
            state.register.loading = false
            state.register.message = action.payload.message
            state.register.error = action.payload.error
        })

        // log out
        builder.addCase(logout.pending, (state, action) => {
            state.logout.loading = true
            state.logout.message = null
            state.logout.error = null
        })
        builder.addCase(logout.fulfilled, (state, action) => {
            state.logout.loading = false
            state.logout.message = action.payload.message
            state.logout.error = null

            // login
            state.login.currentUser = null
            state.login.message = action.payload.message
            state.login.error = null
        })
        builder.addCase(logout.rejected, (state, action) => {
            state.logout.loading = false
            state.logout.message = action.payload.message
            state.logout.error = action.payload.error
        })

        // refresh token
        builder.addCase(refreshToken.pending, (state, action) => {
            state.refresh.loading = true
            state.refresh.message = null
            state.refresh.error = null
        })
        builder.addCase(refreshToken.fulfilled, (state, action) => {
            state.refresh.loading = false
            state.refresh.message = action.payload.message
            state.refresh.error = null

            // login
            state.login.currentUser = {
                ...state.login.currentUser,
                token: action.payload.data.token,
            }
            state.login.message = null
            state.login.error = null
        })
        builder.addCase(refreshToken.rejected, (state, action) => {
            if (action.payload.status === 403) {
                // login
                state.login.currentUser = null
                state.login.message = null
                state.login.error = null
            }
            state.refresh.loading = false
            state.refresh.message = action.payload.message
            state.refresh.error = action.payload.error
        })

        // login admin
        builder.addCase(loginAdmin.pending, (state, action) => {
            state.login.currentUser = null
            state.login.loading = true
            state.login.message = null
            state.login.error = null
        })
        builder.addCase(loginAdmin.fulfilled, (state, action) => {
            state.login.currentUser = action.payload.data
            state.login.loading = false
            state.login.message = action.payload.message
            state.login.error = null
        })
        builder.addCase(loginAdmin.rejected, (state, action) => {
            state.login.currentUser = null
            state.login.loading = false
            state.login.message = action.payload.message
            state.login.error = action.payload.error
        })
    },
})

export default authSlice.reducer

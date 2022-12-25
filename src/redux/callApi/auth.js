import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios'

// utils
import handleError from '../../utils/handleError'

export const login = createAsyncThunk('auth/login', async (data, { rejectWithValue }) => {
    try {
        const res = await axios({
            method: 'POST',
            url: `/auth/login`,
            data: data,
            withCredentials: true,
        })

        return res.data
    } catch (error) {
        return handleError({ error, rejectWithValue })
    }
})

export const register = createAsyncThunk('auth/register', async (data, { rejectWithValue }) => {
    try {
        const res = await axios({
            method: 'POST',
            url: `/auth/register`,
            data: data,
        })

        return res.data
    } catch (error) {
        return handleError({ error, rejectWithValue })
    }
})

export const logout = createAsyncThunk('auth/logout', async ({ user, axiosPrivate }, { rejectWithValue }) => {
    try {
        const res = await axiosPrivate({
            method: 'POST',
            url: `/auth/logout`,
            withCredentials: true,
        })

        return res.data
    } catch (error) {
        return handleError({ error, rejectWithValue })
    }
})

export const refreshToken = createAsyncThunk('auth/refreshToken', async (user, { rejectWithValue }) => {
    try {
        const res = await axios({
            method: 'POST',
            url: `/auth/refresh`,
            withCredentials: true,
        })

        return res.data
    } catch (error) {
        return handleError({ error, rejectWithValue })
    }
})

import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "../../axios"

export const login = createAsyncThunk(
    'auth/login',
    async (data, { dispatch }) => {
        try {
            const res = await axios({
                method: 'POST',
                url: `/auth/login`,
                data: data,
            })

            return res.data
        } catch (error) {
            return error.response.data
        }
    }
)

export const register = createAsyncThunk(
    'auth/register',
    async (data, thunkAPI) => {
        try {
            const res = await axios({
                method: 'POST',
                url: `/auth/register`,
                data: data,
            })

            return res
        } catch (error) {
            return error.response.data
        }
    }
)

export const logout = createAsyncThunk(
    'auth/logout',
    async (data) => {
        try {
            const res = await axios({
                method: 'POST',
                url: `/auth/logout`,
                headers: {
                    token: `Bearer ${data.accessToken}`,
                }
            })

            return res.data
        } catch (error) {
            return error.response.data
        }
    }
)
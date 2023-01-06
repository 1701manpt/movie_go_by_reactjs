import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from '~/axiosHttp'
import handleError from '~/utils/handleError'

export const getAll = createAsyncThunk(
    'product/getAll',
    async (body, { rejectWithValue }) => {
        try {
            const res = await axios({
                method: 'GET',
                url: `/products`,
            })

            return res.data
        } catch (error) {
            return handleError({ error, rejectWithValue })
        }
    },
)

export const getById = createAsyncThunk(
    'product/getById',
    async (id, { rejectWithValue }) => {
        try {
            const res = await axios({
                method: 'GET',
                url: `/products/${id}`,
            })

            return res.data
        } catch (error) {
            return handleError({ error, rejectWithValue })
        }
    },
)

export const add = createAsyncThunk(
    'product/add',
    async (data, { rejectWithValue }) => {
        try {
            console.log(data);
            const res = await axios({
                method: 'POST',
                url: `/products`,
                data: data,
            })

            return res.data
        } catch (error) {
            return handleError({ error, rejectWithValue })
        }
    },
)
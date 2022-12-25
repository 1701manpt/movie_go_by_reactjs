import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios'
import handleError from '../../utils/handleError'

export const getAll = createAsyncThunk('product/getAll', async (body, { rejectWithValue }) => {
    try {
        const res = await axios({
            method: 'GET',
            url: `/products`,
        })

        return res.data
    } catch (error) {
        return handleError({ error, rejectWithValue })
    }
})

export const getById = createAsyncThunk('product/getById', async (id, { rejectWithValue }) => {
    try {
        const res = await axios({
            method: 'GET',
            url: `/products/${id}`,
        })

        return res.data
    } catch (error) {
        return handleError({ error, rejectWithValue })
    }
})

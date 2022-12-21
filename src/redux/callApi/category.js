import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "../../axios"

export const getAll = createAsyncThunk(
    'category/getAll',
    async (body, thunkAPI) => {
        try {
            const res = await axios({
                method: 'GET',
                url: `/categories`
            })

            return res.data
        } catch (error) {
            return error.response.data
        }
    }
)

export const getById = createAsyncThunk(
    'category/getById',
    async (id, thunkAPI) => {
        try {
            const res = await axios({
                method: 'GET',
                url: `/categories/${id}`
            })

            return res.data
        } catch (error) {
            return error.response.data
        }
    }
)

export const getProductsByCategory = createAsyncThunk(
    'category/getProductsByCategory',
    async (id, thunkAPI) => {
        try {
            const res = await axios({
                method: 'GET',
                url: `/categories/${id}/products`
            })

            return res.data
        } catch (error) {
            return error.response.data
        }
    }
)
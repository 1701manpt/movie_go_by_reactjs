import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "../../config/axios"

export const getAll = createAsyncThunk(
    'product/getAll',
    async (body, thunkAPI) => {
        const res = await axios({
            method: 'GET',
            url: `/products`
        })

        return res.data
    }
)
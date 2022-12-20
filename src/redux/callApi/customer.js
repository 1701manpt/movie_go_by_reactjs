import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "../../config/axios"

export const getById = createAsyncThunk(
    'customer/getById',
    async (data, thunkAPI) => {
        const res = await axios({
            method: 'GET',
            url: `/customers/${data.id}`,
            headers: {
                token: `Bearer ${data.accessToken}`
            }
        })

        return res.data
    }
)
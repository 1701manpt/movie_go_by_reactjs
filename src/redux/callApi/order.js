import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "../../config/axios"
import axiosPrivate from "../../hooks/useRefreshToken"

export const getAll = createAsyncThunk(
    'order/getAll',
    async (data, thunkAPI) => {
        const res = await axiosPrivate({
            method: 'GET',
            url: `/customers/${data.id}/orders`,
            headers: {
                token: `Bearer ${data.accessToken}`,
            }
        })

        return res.data
    }
)
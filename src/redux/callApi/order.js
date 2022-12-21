import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "../../axios"

export const getAll = createAsyncThunk(
    'order/getAll',
    async (user) => {
        const res = await axios({
            method: 'GET',
            url: `/customers/${user.id}/orders`,
            headers: {
                token: `Bearer ${user.accessToken}`,
            }
        })

        return res.data
    }
)
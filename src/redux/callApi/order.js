import { createAsyncThunk } from "@reduxjs/toolkit"
import Cookies from "js-cookie"

export const getAll = createAsyncThunk(
    'order/getAll',
    async (body, thunkAPI) => {
        const token = Cookies.get('token')

        const res = await fetch(`http://localhost:7000/api/customers/1/orders`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        })

        const data = await res.json()

        return data
    }
)
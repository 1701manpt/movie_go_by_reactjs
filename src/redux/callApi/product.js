import { createAsyncThunk } from "@reduxjs/toolkit"

export const getAll = createAsyncThunk(
    'product/getAll',
    async (body, thunkAPI) => {
        const res = await fetch(`http://localhost:7000/api/products`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await res.json()

        return data
    }
)
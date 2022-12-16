import { createAsyncThunk } from "@reduxjs/toolkit"

export const login = createAsyncThunk(
    'customer/login',
    async (body, thunkAPI) => {
        const res = await fetch(`http://localhost:7000/api/customers/signin`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await res.json()

        return data
    }
)

export const register = createAsyncThunk(
    'customer/register',
    async (body, thunkAPI) => {
        const res = await fetch(`http://localhost:7000/api/customers/signup`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await res.json()

        return data
    }
)
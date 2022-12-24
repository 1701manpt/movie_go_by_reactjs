import { createAsyncThunk } from "@reduxjs/toolkit"
import axios, { axiosPrivate } from "../../axios"
import handleError from "../../utils/handleError"

export const getAll = createAsyncThunk(
    'order/getAll',
    async (user, { rejectWithValue }) => {
        try {
            const res = await axios({
                method: 'GET',
                url: `/customers/${user?.id}/orders`,
                headers: {
                    token: `Bearer ${user?.token}`,
                }
            })

            return res.data
        } catch (error) {
            return handleError({ error, rejectWithValue })
        }
    }
)
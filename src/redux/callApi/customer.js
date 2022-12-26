import { createAsyncThunk } from '@reduxjs/toolkit'
import handleError from '~/utils/handleError'

export const getById = createAsyncThunk(
    'customer/getById',
    async ({ user, axiosPrivate }, { rejectWithValue }) => {
        try {
            const res = await axiosPrivate({
                method: 'GET',
                url: `/customers/${user?.id}`,
            })

            return res.data
        } catch (error) {
            return handleError({ error, rejectWithValue })
        }
    },
)

import { createAsyncThunk } from '@reduxjs/toolkit'
import handleError from '~/utils/handleError'

export const getAll = createAsyncThunk(
    'role/getAll',
    async ({ axiosPrivate }, { rejectWithValue }) => {
        try {
            const res = await axiosPrivate({
                method: 'GET',
                url: `/roles`,
            })

            return res.data
        } catch (error) {
            return handleError({ error, rejectWithValue })
        }
    },
)

import { createAsyncThunk } from '@reduxjs/toolkit'
import handleError from '~/utils/handleError'

export const getById = createAsyncThunk(
    'employee/getById',
    async ({ user, axiosPrivate }, { rejectWithValue }) => {
        try {
            const res = await axiosPrivate({
                method: 'GET',
                url: `/employees/${user?.id}`,
            })

            return res.data
        } catch (error) {
            return handleError({ error, rejectWithValue })
        }
    },
)

export const getAll = createAsyncThunk(
    'employee/getAll',
    async ({ axiosPrivate }, { rejectWithValue }) => {
        try {
            const res = await axiosPrivate({
                method: 'GET',
                url: `/employees`,
            })

            return res.data
        } catch (error) {
            return handleError({ error, rejectWithValue })
        }
    },
)

export const add = createAsyncThunk(
    'employee/add',
    async ({ data, axiosPrivate }, { rejectWithValue }) => {
        try {
            const res = await axiosPrivate({
                method: 'POST',
                url: `/employees`,
                data: data,
            })

            return res.data
        } catch (error) {
            return handleError({ error, rejectWithValue })
        }
    },
)

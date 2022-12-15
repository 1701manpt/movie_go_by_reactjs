import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading: false,
    error: null,
    data: null,
}

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

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // get all
        builder.addCase(getAll.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(getAll.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
            state.error = null
        })
        builder.addCase(getAll.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
})

export default productSlice.reducer
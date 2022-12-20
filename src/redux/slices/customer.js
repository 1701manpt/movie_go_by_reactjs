import { createSlice } from "@reduxjs/toolkit"
import { getById } from "../callApi/customer"

const initialState = {
    myAccount: {
        loading: false,
        user: null
    }
}

export const customerSlice = createSlice({
    name: "customer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(getById.pending, (state, action) => {
            state.myAccount.loading = true
        })
        builder.addCase(getById.fulfilled, (state, action) => {
            state.myAccount.loading = false
            state.myAccount.user = action.payload.data
        })
        builder.addCase(getById.rejected, (state, action) => {
            state.myAccount.loading = false
        })
    }
})

export default customerSlice.reducer
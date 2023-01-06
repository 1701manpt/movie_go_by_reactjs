import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    toggleMenu: false
}

export const orderSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        toggleMenu: (state, action) => {
            state.toggleMenu = !state.toggleMenu
        }
    },
})

export const { toggleMenu } = orderSlice.actions

export default orderSlice.reducer

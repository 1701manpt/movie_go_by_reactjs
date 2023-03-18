import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    menu: {
        status: false,
    },
    alert: {
        status: false,
    },
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleMenu: (state, action) => {
            state.menu.status = !state.menu.status
        },
        toggleAlert: (state, action) => {
            state.alert.status = action.payload.status
        },
    },
})

export const { toggleMenu, toggleAlert } = uiSlice.actions

export default uiSlice.reducer

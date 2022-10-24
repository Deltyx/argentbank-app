import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: { user: null, token: null},
    reducers: {
        logIn: (state, action) => {
            const {user, accessToken } = action.payload
            state.user = user
            state.token = accessToken
            console.log(state.user, state.token)
        },
        logOut: (state, action) => {
            state.user = null
            state.token = null
            console.log(state.user, state.token)
        }
    }
})

export const { logIn, logOut } = authSlice.actions

export default authSlice.reducer
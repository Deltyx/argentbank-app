import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: { token: null},
    reducers: {
        setCredentials: (state, action) => {
            state.token = action.payload.body.token
            console.log(state.token)
        },
        logOut: (state, action) => {
            state.token = null
        },
        setUserInfo: (state, action) => {
            state.user = {
                firstName: action.payload.currentData.body.firstName,
                lastName: action.payload.currentData.body.lastName,
                email: action.payload.currentData.body.email,
                id: action.payload.currentData.body.id
            }
        }
    }
})

export const { setCredentials, logOut, setUserInfo } = authSlice.actions

export default authSlice.reducer
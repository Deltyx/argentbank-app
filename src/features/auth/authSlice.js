import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: { user: null, token: null},
    reducers: {
        setCredentials: (state, action) => {
            state.token = action.payload.body.token
            console.log(state.token)
        },
        logOut: (state, action) => {
            state.token = null
            state.user = null
            localStorage.removeItem('token')
            localStorage.removeItem('email')
            localStorage.removeItem('id')
            localStorage.removeItem('remember')
        },
        setUserInfo: (state, action) => {
            state.user = {
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                email: action.payload.email,
                id: action.payload.id
            }
        }
    }
})

export const { setCredentials, logOut, setUserInfo } = authSlice.actions

export default authSlice.reducer
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:3001/api/v1',

    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token
        headers.set("Content-Type", "application/json")
        if(token) {
            headers.set("authorization", `Bearer ${token}`)
        }
        return headers
    }
})

export const apiSlice = createApi({
    baseQuery: baseQuery,
    endpoints: builder => ({
        
    })
})
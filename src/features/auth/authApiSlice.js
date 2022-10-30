import { apiSlice } from "../../api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: 'user/login',
                method: 'POST',
                body: {...credentials}
            })
        }),
        getUserProfile: builder.query({
            query: userInfo => ({
                url: 'user/profile',
                method: 'POST',
                body: {...userInfo}
            })
        })
    })
})

export const { useLoginMutation, useGetUserProfileQuery } = authApiSlice;
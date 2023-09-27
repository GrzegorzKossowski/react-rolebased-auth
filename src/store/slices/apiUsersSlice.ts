import { USERS_URL } from '../../config/constants';
import { UserType } from '../../types';
import { apiSlice } from './apiSlice';

export const apiUsersSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUsers: builder.query<UserType[], void>({
            query: () => ({
                url: USERS_URL,
            }),
            providesTags: ['User'],
            keepUnusedDataFor: 5,
        }),
    }),
});

export const { useGetUsersQuery } = apiUsersSlice;

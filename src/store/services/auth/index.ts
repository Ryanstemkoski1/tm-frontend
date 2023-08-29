import { createApi } from '@reduxjs/toolkit/query/react';
import type { User } from '@app/types/user';
import fetchBaseQuery from '../../base-query';
import type { SigninPayload, SigninResponse, SignupPayload } from './type';
import type { CommonResponse, ErrorResponse } from '../type';
import { setLogin } from '../../reducers/auth';
import { openInform } from '../../reducers/inform';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery,
  endpoints: (builder) => ({
    signup: builder.mutation<User, SignupPayload>({
      query(body) {
        return {
          url: `auth/signup`,
          method: 'POST',
          body,
        };
      },
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(openInform({ show: true, type: 'success', message: 'Register successfully.' }));
        } catch (err) {
          console.log(err);
          const { error } = err as ErrorResponse;

          dispatch(openInform({ show: true, type: 'error', message: error?.data?.message || '' }));
        }
      },
    }),
    signin: builder.mutation<SigninResponse, SigninPayload>({
      query(body) {
        return {
          url: `auth/login`,
          method: 'POST',
          body,
        };
      },
      transformResponse: (response: SigninResponse) => response,
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setLogin(data));
          dispatch(openInform({ show: true, type: 'success', message: 'Logined successfully.' }));
        } catch (err) {
          console.log(err);
          const { error } = err as ErrorResponse;

          dispatch(openInform({ show: true, type: 'error', message: error?.data?.message || '' }));
        }
      },
    }),
  }),
});

export const { useSigninMutation, useSignupMutation } = authApi;

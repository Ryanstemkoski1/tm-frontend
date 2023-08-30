import { createApi } from '@reduxjs/toolkit/query/react';
import type { User } from '@app/types/user';
import fetchBaseQuery from '../../base-query';
import type { SigninPayload, SigninResponse, SignupPayload } from './type';
import { Event } from '@app/types/event';

export const eventApi = createApi({
  reducerPath: 'eventApi',
  baseQuery: fetchBaseQuery,
  endpoints: (builder) => ({
    fetch: builder.query<Event[], {}>({
      query: () => ({ url: `ticket-master` }),
    }),
  }),
});

export const { useFetchQuery } = eventApi;

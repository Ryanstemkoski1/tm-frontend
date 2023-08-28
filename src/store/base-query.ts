import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { baseUrl } from '@app/config';
import type { RootState } from './';

export default fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }

    return headers;
  },
});

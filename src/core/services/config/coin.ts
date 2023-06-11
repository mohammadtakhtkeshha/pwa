import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

export const coinApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https:/',
  }),
  endpoints: () => ({}),
});


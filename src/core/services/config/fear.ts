import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

export const fearApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.coin-stats.com/v2',
  }),
  endpoints: () => ({}),
});

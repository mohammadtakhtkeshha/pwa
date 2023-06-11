import { api } from 'core/services/config/api';
import { authUrl } from 'core/urls/auth.urls';

export const apiAuth = api.injectEndpoints({
  endpoints: builder => ({
    getAllPost: builder.query({
      query: () => ({
        url: authUrl,
        method: 'get',
      }),
    }),
    createPost: builder.mutation({
      query: newPost => {
        const { url, ...data } = newPost;
        return {
          url: url,
          method: 'post',
          body: data,
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllPostQuery, useCreatePostMutation } = apiAuth;

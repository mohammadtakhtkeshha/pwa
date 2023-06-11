import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { clearStorage, getStorage } from 'lib/local-storage';

import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import { errorSwal } from 'lib/sweetalert';
import i18n from 'i18next';
const baseQuery = fetchBaseQuery({
  // baseUrl:'http://192.168.10.50:5000/api/',
   baseUrl:'https://nezarat.moi.ir/',
  prepareHeaders: headers => {
    const user: any = getStorage('user');
    const parsedUser = user && JSON.parse(user);
    if (parsedUser) {
      const { token } = parsedUser;
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});
const baseQueryWithCamelize: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions = {}) => {
  const result: any = await baseQuery(args, api, extraOptions);
  const status = result?.meta?.response?.status;
  const lang = i18n.language;
  switch (status) {
    case 403:
      const error = result?.error?.data?.error;
      const errorText403 = lang === 'en' ? error.message : error.text;
      errorSwal({ text: errorText403 });
      break;
    case 401:
      const errorUnauthorized = result?.error?.data?.error;
      const errorText401 =
        lang === 'en'
          ? errorUnauthorized.message
          : errorUnauthorized.text;
      errorSwal({ text: errorText401 });
      clearStorage();
      window.location.replace('/');
      break;
    case 404:
      const errorNotfound = result?.error?.data?.error;
      const errorText404 =
        lang === 'en' ? errorNotfound.message : errorNotfound.text;
      errorSwal({ text: errorText404 });
      break;
    case 400:
      const { text, message } = result?.error?.data?.error;
      const errorText = lang === 'en' ? message : text;
      // clearStorage();
      errorSwal({ text: errorText });
      break;
    case 500:
      errorSwal({ text: 'server Error' });
      break;
    default:
      break;
  }
  return result;
};
export const api = createApi({
  baseQuery: baseQueryWithCamelize,
  endpoints: () => ({}),
});

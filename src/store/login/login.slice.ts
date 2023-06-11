import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { setStorage, removeStorage } from 'lib/local-storage';
import { RootState } from 'store/store';

export interface AuthSate {
  name: string | null;
  token: string | null;
  metaData: any | null;
}

const initialState: AuthSate = {
  name: '',
  token: '',
  metaData: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{
        name: string;
        token: string;
        metaData: any;
      }>
    ) => {
      setStorage(
        'user',
        JSON.stringify({
          name: action.payload.name,
          token: action.payload.token,
          metaData: action.payload.metaData,

        })
      );
      state.name = action?.payload?.name;
      state.token = action?.payload?.token;
      state.metaData = action?.payload?.metaData;

    },
    logout: state => {
      localStorage.clear();
      removeStorage('persist:root');
      state.name = null;
      state.token = null;
      state.metaData = null;
    },
  },
});

export const selectAuth = (state: RootState) => state.auth;

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { api } from 'core/services/config/api';
import authReduser from 'store/login/login.slice';
import roleReducer from 'store/role/role.slice';
import commonReduser from 'store/common/common.slice';
import authorReducer from 'store/author/author.slice';
import { combineReducers } from 'redux';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [api.reducerPath],
};

const rootReducer = combineReducers({
  auth: authReduser,
  common: commonReduser,
  author: authorReducer,
  role: roleReducer,
  [api.reducerPath]: api.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
      },
    }).concat([api.middleware]),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
setupListeners(store.dispatch);

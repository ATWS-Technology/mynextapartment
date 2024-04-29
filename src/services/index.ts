/* eslint-disable prettier/prettier */
import {configureStore} from '@reduxjs/toolkit';
import authReducer from './auth';
import {authApi} from './auth/api';
import plateReducer from './features/traySlice';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
    plate: plateReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(authApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

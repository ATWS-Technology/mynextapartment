/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '..';

export interface User {
  email: string;
  phone: string;
}

export interface Category {
  catName: string;
  imageUrl: string;
  slug: string;
}

export interface Auth {
  user?: User | null;
  token?: string | null;
  didOnboard?: boolean;
  categories?: Category[];
}

const initialState: Auth = {
  isLoading: true,
  didOnboard: false,
  categories: [],
} as Auth;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredential(state, {payload: {user, token}}: PayloadAction<Auth>) {
      AsyncStorage.setItem('@user', JSON.stringify({user, token}));
      state.user = user;
      state.token = token;
    },
    setDidOnboard(state, {payload: val}: PayloadAction<boolean>) {
      state.didOnboard = true;
      AsyncStorage.setItem('onboard', JSON.stringify(val));
    },
  },
});

export const {setCredential, setDidOnboard} = authSlice.actions;
export default authSlice.reducer;
export const useSelectUser = (state: RootState): User | null | undefined =>
  state.auth.user;
export const useSelectToken = (state: RootState): string | null | undefined =>
  state.auth.token;
export const onboardStatus = (state: RootState) => state.auth.didOnboard;
export const useSelectCategories = (state: RootState) => state.auth.categories;

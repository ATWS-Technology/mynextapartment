import {createApi} from '@reduxjs/toolkit/query/react';
import {API_BASE_URL} from '../../../env.json';
import {Category} from '.';
import {axiosBaseQuery} from '../../utils/axiosQuery/axiosBaseQuery';

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  phone: string;
  isPhoneVerified: boolean;
  gender: string;
  token: string;
}

export interface UserResponse {
  data: User | null;
  token: string | null;
}

export interface LoginRequest {
  phone: string;
  password: string;
  social: boolean;
}

export interface CreateAccountRequest {
  firstName: string;
  lastName: string;
  phone: string;
  social: boolean;
  email: string;
  password: string;
}

export interface SendOtpRequest {
  phone: string;
}

export interface VerifyOtpRequest {
  token: string;
  phone: string;
}
export interface StoreAddressRequest {
  lng: number;
  lat: number;
  address: string;
  isDefault: boolean;
  addressTitle: string;
}

export interface UserResponse {
  message: string;
  statusCode: number;
  error: boolean;
  data: User | null;
}

export interface SendOtpResponse {
  message: string;
  statusCode: number;
  error: boolean;
  data: null;
}

export interface VerifyOtpResponse {
  message: string;
  statusCode: number;
  error: boolean;
  data: User | null;
}
export interface StoreAddressResponse {
  message: string;
  statusCode: number;
  error: boolean;
  data: User | null;
}

export interface CategoriesType {
  data: Category[];
}

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: axiosBaseQuery({baseUrl: `${API_BASE_URL}`}),
  endpoints: builder => ({
    login: builder.mutation<UserResponse, LoginRequest>({
      query: credentials => ({
        url: 'users/login',
        method: 'POST',
        body: credentials,
      }),
    }),

    createAccount: builder.mutation<UserResponse, CreateAccountRequest>({
      query: credentials => ({
        url: 'users/createAccount',
        method: 'POST',
        body: credentials,
      }),
    }),

    sendOtp: builder.mutation<SendOtpResponse, SendOtpRequest>({
      query: credentials => ({
        url: 'users/send/otp',
        method: 'POST',
        body: credentials,
      }),
    }),

    verifyOtp: builder.mutation<VerifyOtpResponse, VerifyOtpRequest>({
      query: credentials => ({
        url: 'users/verify/otp',
        method: 'POST',
        body: credentials,
      }),
    }),

    storeAddress: builder.mutation<StoreAddressResponse, StoreAddressRequest>({
      query: credentials => ({
        url: 'users/store/delivery_address',
        method: 'POST',
        body: credentials,
      }),
    }),

    logout: builder.mutation<any, void>({
      query: () => ({
        url: 'logout',
        method: 'POST',
      }),
    }),

    //

    getCategories: builder.query<CategoriesType, void>({
      query: () => ({
        url: 'category',
        method: 'GET',
      }),
    }),
  }),
});
export const {
  useLoginMutation,
  useCreateAccountMutation,
  useSendOtpMutation,
  useVerifyOtpMutation,
  useStoreAddressMutation,
  useLogoutMutation,
  useGetCategoriesQuery,
} = authApi;

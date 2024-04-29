import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {Auth} from '../../src/services/auth';

export const initInterceptors = () => {
  axios.interceptors.request.use(
    async config => {
      const {getItem} = useAsyncStorage('@user');
      const result = await getItem();
      const token = result ? (JSON.parse(result) as Auth).token : null;

      if (token) config.headers.Authorization = `Bearer ${token}`;

      config.headers = {...config.headers};
      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );
};

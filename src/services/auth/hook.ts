/* eslint-disable prettier/prettier */
import {useMemo} from 'react';
import {
  onboardStatus,
  setCredential,
  useSelectCategories,
  useSelectToken,
  useSelectUser,
} from '.';
import {useAppSelector, useAppDispatch} from '../hooks';

export const useAuth = () => {
  const user = useAppSelector(useSelectUser);
  const token = useAppSelector(useSelectToken);
  const didOnboard = useAppSelector(onboardStatus);

  return useMemo(
    () => ({user: user ? user : null, didOnboard}),
    [user, didOnboard],
  );
};

export const useApp = () => {
  const categories = useAppSelector(useSelectCategories);

  return useMemo(
    () => ({categories: categories ? categories : []}),
    [categories],
  );
};

export const useLogout = () => {
  const dispatch = useAppDispatch();
  return () => dispatch(setCredential({}));
};

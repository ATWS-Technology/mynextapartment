import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {Auth, setCredential, setDidOnboard} from '../services/auth';
import {useAuth} from '../services/auth/hook';
import AppTabAndStack from './AppStack';
import AuthenticationStack from './AuthenticationStack';

const RootNavigator: React.FC = () => {
  const dispatch = useDispatch();
  const [visited, setVisited] = useState(false);
  const {user, didOnboard} = useAuth();
  const {getItem} = useAsyncStorage('@user');
  const {getItem: getOnboard} = useAsyncStorage('onboard');

  console.log(user, 'the user');

  const [user_data, setUserData] = useState<Auth>({
    user: null,
    token: null,
  });

  const retrieveStoredToken = async () => {
    const json = await getItem();

    const user_da: Auth = json != null ? JSON.parse(json) : {};

    dispatch(setCredential(user_data));

    setUserData(user_da);
    console.log(user_data, 'user data');

    // console.log(JSON.parse(visit as string), 'visited');
  };

  const getOnboardStatus = async () => {
    const onboardStatus = await getOnboard();
    const status = onboardStatus !== null ? JSON.parse(onboardStatus) : false;

    if (status) {
      dispatch(setDidOnboard(status));
    }

    console.log(status, 'main onboard status');
  };

  useEffect(() => {
    getOnboardStatus();
    // retrieveStoredToken();
  }, [didOnboard]);
  return <>{user !== null ? <AppTabAndStack /> : <AuthenticationStack />}</>;
};

export default RootNavigator;

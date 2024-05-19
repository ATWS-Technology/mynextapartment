import React, {useLayoutEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ProfileRoutes} from '../../Routes';
import {
  getFocusedRouteNameFromRoute,
  NavigationProp,
  RouteProp,
} from '@react-navigation/native';
import EditProfile from '../../screens/app/profile/EditProfile';
import SavedAddresses from '../../screens/app/profile/SavedAddresses';
import Wallet from '../../screens/app/profile/Wallet';
import Settings from '../../screens/app/profile/Settings';
import FundWallet from '../../screens/app/profile/FundWallet';
import RateApp from '../../screens/app/profile/RateApp';
import Profile from '../../screens/app/profile/profile';

const Stack = createStackNavigator<ProfileRoutes>();

interface ProfileProps {
  navigation: NavigationProp<ProfileRoutes, 'Profile'>;
  route: RouteProp<ProfileRoutes, 'Profile'>;
}

function ProfileStack({route, navigation}: ProfileProps) {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === 'Profile' || routeName === undefined) {
      //
      navigation?.setOptions({headerShown: false});
      navigation?.setOptions({tabBarStyle: {display: 'flex'}});
      //
    } else {
      //
      navigation?.setOptions({headerShown: false});
      navigation?.setOptions({tabBarStyle: {display: 'none'}});
      //
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'Profile'}>
      <Stack.Screen name={'Profile'} component={Profile} key={'Profile'} />
      <Stack.Screen
        name={'EditProfile'}
        component={EditProfile}
        key={'EditProfile'}
      />
      <Stack.Screen
        name={'SavedAddresses'}
        component={SavedAddresses}
        key={'SavedAddresses'}
      />
      <Stack.Screen name={'Wallet'} component={Wallet} key={'Wallet'} />
      <Stack.Screen
        name={'FundWallet'}
        component={FundWallet}
        key={'FundWallet'}
      />
      <Stack.Screen name={'Settings'} component={Settings} key={'Settings'} />
      <Stack.Screen name={'RateApp'} component={RateApp} key={'RateApp'} />
    </Stack.Navigator>
  );
}

export default ProfileStack;

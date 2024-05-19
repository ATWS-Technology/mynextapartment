import {ActivityIndicator, View} from 'react-native';
import React from 'react';
import LoginScreen from '../Screens/MainScreen/LoginScreen';
import OtpVerifyScreen from '../Screens/MainScreen/OtpVerifyScreen';
import SplashScreen from '../Screens/MainScreen/SplashScreen';
import OnBoardingScreen from '../Screens/Onboarding/OnboardingScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from '../Screens/MainScreen/SignUpScreen';
import ForgotPassword from '../Screens/MainScreen/ForgotPassword';

const Stack = createNativeStackNavigator<rootStackParamList>();

export type rootStackParamList = {
  Splash: undefined;
  SignUp: undefined;
  Login: undefined;
  OTPVerify: undefined;
  Onboarding: undefined;
  ForgotPassword: undefined;
};

const Loading = () => {
  <View>
    <ActivityIndicator size={'large'} />
  </View>;
};

const AuthenticationStack = () => {
  const didOnboard = false;
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={!didOnboard ? 'Onboarding' : 'LogIn'}>
      {!didOnboard && (
        <Stack.Screen
          name={'Onboarding'}
          component={OnBoardingScreen}
          key={'Onboarding'}
        />
      )}

      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{headerShown: false, presentation: 'modal'}}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{headerShown: false, presentation: 'modal'}}
      />
      <Stack.Screen name="OTPVerify" component={OtpVerifyScreen} />
    </Stack.Navigator>
  );
};
export default AuthenticationStack;

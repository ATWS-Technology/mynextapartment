/* eslint-disable react-native/no-inline-styles */
import {
  ActionSheetIOS,
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
} from 'react-native';
import {
  LoginRequest,
  useLoginMutation,
  UserResponse,
} from '../../services/auth/api';
import React, {useEffect, useState} from 'react';
import {rootStackParamList} from '../../../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styled from 'styled-components/native';
import {COLORS, FONTS, SIZES} from '../../theme/theme';
import {useNavigation} from '@react-navigation/native';
import AuthLayout from '../../components/AuthLayout';
import FormInput from '../../components/FormInput';
import {useCustomNotificationContext} from '../../components/contexts/notification-context';
import {RegularText} from '../../components/text/text';
import {Image} from 'react-native-svg';
import {fontSz, hp} from '../../utils';
import {Button} from '../../components/common/Button';
import {useDispatch} from 'react-redux';
import utils from '../../utils/utils';
import {setCredential} from '../../services/auth';

export type NavigationProp = NativeStackNavigationProp<
  rootStackParamList,
  'Login'
>;

interface AuthProps {
  navigation: NavigationProp<AuthRoutes, 'LogIn'>;
  route: RouteProp<AuthRoutes, 'LogIn'>;
}

const LoginScreen = ({route, navigation}: AuthProps) => {
  const {navigate, goBack} = navigation;
  const notificationContext = useCustomNotificationContext();

  const [email, setEmail] = useState<string>('');

  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  const [emailError, setEmailError] = useState('');
  const [userName, setUserName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [loginFunction, {isError}] = useLoginMutation();

  function isEnableSignIn() {
    return phoneNumber != '' && password != '' && passwordError == '';
  }

  const dispatch = useDispatch();

  const login = () => {
    // Reset error messages
    setEmailError('');
    setPasswordError('');

    // Validate email
    const emailCheck = utils.isValidEmail(email);
    if (!emailCheck) {
      setEmailError('Please enter a valid email');
    }

    // Validate password
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
    }

    // If both fields are valid, proceed with the login
    if (emailCheck && password.length >= 6) {
      setIsLoading(true);
      // Simulate successful login
      // const fakeUserResponse: UserResponse = {
      //   data: {
      //     token: 'fakeToken',
      //     // Add other user data as needed
      //   },
      // };

      // Dispatch action to set user credentials (token)
      // dispatch(
      //   setCredential({
      //     user: fakeUserResponse.data,
      //     token: fakeUserResponse.data.token,
      //   }),
      // );

      // Navigate to the dashboard screen
      navigate('AppLanding');
    } else {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout
      title={'Login'}
      subTitle=""
      titleContainerStyle={{paddingTop: 20}}
      children={
        <>
          <View style={{flex: 1}}>
            <FormInput
              containerStyle={undefined}
              value={email}
              label={'Email Address'}
              placeholder={'Phone No or email address'}
              inputStyle={undefined}
              prependComponent={undefined}
              appendComponent={undefined}
              onChange={(value: React.SetStateAction<string>) => {
                setEmail(value);
                const emailCheck = utils.isValidEmail(value);
                if (emailCheck || value.length === 0) {
                  setEmailError('');
                } else {
                  setEmailError('Please enter a valid email');
                }
              }}
              onEndEditing={() => {}}
              onFocus={() => {}}
              secureTextEntry={undefined}
              errorMsg={emailError}
            />

            <FormInput
              label={'Passworddddd'}
              containerStyle={{marginTop: 20}}
              secureTextEntry={!showPassword}
              keyboardType="default"
              autoCompleteType="password"
              onChange={(value: React.SetStateAction<string>) => {
                setPassword(value);
                if (value.length < 6 && value.length > 0) {
                  // setPasswordError('Pasword');
                } else if (
                  value.length > 6 ||
                  value.length === 6 ||
                  value.length === 0
                ) {
                  setPasswordError('');
                }
              }}
              errorMsg={passwordError}
              appendComponent={
                <View
                  style={{
                    justifyContent: 'center',
                  }}>
                  {showPassword ? (
                    <Pressable onPress={() => setShowPassword(!showPassword)}>
                      <RegularText
                        color={COLORS.purple}
                        style={{fontWeight: '400'}}
                        fontSize={14}>
                        {'Hide'}
                      </RegularText>
                    </Pressable>
                  ) : (
                    <Pressable onPress={() => setShowPassword(!showPassword)}>
                      <RegularText
                        color={COLORS.purple}
                        style={{fontWeight: '400'}}
                        fontSize={14}>
                        {'Show'}
                      </RegularText>
                    </Pressable>
                  )}
                </View>
              }
              placeholder={'Password'}
              inputStyle={undefined}
              prependComponent={undefined}
              onFocus={() => {}}
              value={password}
              onEndEditing={() => {}}
            />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <TouchableOpacity
                style={{
                  marginTop: 10,
                }}
                onPress={() => {}}>
                <Text
                  style={{
                    color: COLORS.purple,
                  }}>
                  Remember me
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  marginTop: 10,
                }}
                onPress={() => {
                  navigate('ForgotPassword');
                }}>
                <Text
                  style={{
                    color: COLORS.purple,
                  }}>
                  Forgotten password ?
                </Text>
              </TouchableOpacity>
            </View>

            {/* login-button */}
            <Button
              title="Log In"
              style={{
                backgroundColor: COLORS.purple,
                marginTop: hp(55),
              }}
              textStyle={{
                fontWeight: '700',
                color: COLORS.primaryBg,
              }}
              onPress={login}
              isLoading={isLoading}
              prependComponent={undefined}
              appendComponent={undefined}
            />

            <Button
              title="Sign in Google"
              style={{
                backgroundColor: COLORS.purple,
                marginTop: hp(35),
              }}
              textStyle={{
                fontWeight: '700',
                color: COLORS.primaryBg,
              }}
              // onPress={() => {
              //   setIsLoading(true);
              // }}
              // isLoading={isLoading}
              prependComponent={undefined}
              appendComponent={undefined}
            />
            <Button
              title="Sign in Facebook"
              style={{
                backgroundColor: COLORS.purple,
                marginTop: hp(15),
              }}
              textStyle={{
                fontWeight: '700',
                color: COLORS.primaryBg,
              }}
              // onPress={() => {
              //   setIsLoading(true);
              // }}
              // isLoading={isLoading}
              prependComponent={undefined}
              appendComponent={undefined}
            />
            <View style={styles.already}>
              <Text style={styles.alreadyText}>I don’t have an account? </Text>
              <TouchableOpacity
                onPress={() => {
                  navigate('SignUp');
                }}>
                <Text
                  style={{
                    color: COLORS.purple,
                    fontFamily: FONTS.fontFamilyExtraBold,
                    fontSize: SIZES.font,
                  }}>
                  Create account
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      }
    />
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  button: {
    marginTop: 40,
    color: COLORS.placeholder,
  },
  divider: {
    marginTop: 40,
  },
  already: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingTop: 160,
  },
  alreadyText: {
    color: COLORS.primary,
    fontFamily: FONTS.fontFamilyRegular,
    fontSize: SIZES.font,
  },
  buttonGoogle: {
    marginTop: 40,
    borderColor: COLORS.black,
    borderWidth: 1,
    backgroundColor: COLORS.white,
  },
});

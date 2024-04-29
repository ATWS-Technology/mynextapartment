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
import {fontSz, hp, wp} from '../../utils';
import {Button} from '../../components/common/Button';
import {useDispatch} from 'react-redux';

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

  const [loginFunction, {isLoading, isError}] = useLoginMutation();

  function isEnableSignIn() {
    return phoneNumber != '' && password != '' && passwordError == '';
  }

  const dispatch = useDispatch();

  const login = (val: LoginRequest) => {
    loginFunction(val)
      .unwrap()
      .then((res: UserResponse) => {
        console.log('login function', res);
        dispatch(
          setCredential({
            user: res?.data,
            token: res?.data?.token,
          }),
        );
      })
      .catch(err => {
        notificationContext.showNotification(
          `${err?.data?.message}.`,
          'warning',
        );
      });
  };

  // function navigate(arg0: string) {
  //   throw new Error('Function not implemented.');
  // }

  return (
    <AuthLayout
      title={'Login'}
      subTitle="Kindly provide the following information to login to your account"
      titleContainerStyle={undefined}
      children={
        <>
          <View style={{flex: 1}}>
            <FormInput
              containerStyle={undefined}
              value={email}
              label={''}
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
            />

            <FormInput
              // label="Password"
              secureTextEntry={!showPassword}
              keyboardType="default"
              containerStyle={{marginTop: 10}}
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
              value={undefined}
              onEndEditing={() => {}}
              label={undefined}
            />

            <TouchableOpacity
              style={{marginTop: 10}}
              onPress={() => {
                navigate('ForgotPassword');
              }}>
              <Text style={{color: COLORS.purple}}>Forgotten password ?</Text>
            </TouchableOpacity>

            {/* login-button */}
            <Button
              title="Log In"
              style={{
                backgroundColor: COLORS.purple,
                marginTop: hp(55),
              }}
              textStyle={{
                fontWeight: '700',
                color: COLORS.primary,
              }}
              onPress={() => {
                isEnableSignIn()
                  ? login({
                      phone: phoneNumber,
                      password,
                      social: false,
                    })
                  : null;
              }}
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
                color: COLORS.primary,
              }}
              onPress={() => {}}
              isLoading={isLoading}
              prependComponent={undefined}
              appendComponent={undefined}
            />
            <View style={styles.already}>
              <Text style={styles.alreadyText}>I don’t have an account.</Text>
              <TouchableOpacity
                onPress={() => {
                  navigate('CreateAccount');
                }}>
                <Text style={{color: '#79477d', fontFamily: 'Besley-Regular'}}>
                  {' '}
                  Create free account
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
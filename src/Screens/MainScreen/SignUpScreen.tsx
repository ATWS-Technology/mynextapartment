/* eslint-disable react-native/no-inline-styles */
import {
  Dimensions,
  // Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {rootStackParamList} from '../../../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {COLORS, FONTS, SIZES} from '../../theme/theme';
import {Button} from '../../components/common/Button';
import {hp} from '../../utils';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {RegularText} from '../../components/text/text';
import FormInput from '../../components/FormInput';
import AuthLayout from '../../components/AuthLayout';
import DatePicker from 'react-native-date-picker';
import utils from '../../utils/utils';

export type NavigationProp = NativeStackNavigationProp<
  rootStackParamList,
  'SignUp'
>;

const SignUpScreen = () => {
  const [form, setForm] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    bvn: string;
  }>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    bvn: '',
  });

  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [dob, setDob] = useState<Date>(new Date());
  const [bvnError, setBvnError] = useState<string>('');
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleDateChange = (selectedDate: Date) => {
    setDob(selectedDate);
    setOpen(false);
  };
  const [errors, setErrors] = useState({
    phoneNumber: '',
    bvn: '',
    email: '',
  });

  const handleInputChange = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const handleBvnChange = value => {
    const numericValue = value.replace(/\D/g, '');
    const trimmedValue = numericValue.slice(0, 11);
    setForm({...form, bvn: trimmedValue}); // Update the state for BVN field

    if (trimmedValue.length !== 11) {
      setBvnError('BVN must be exactly 11 characters');
    } else {
      setBvnError('');
    }
  };

  return (
    <AuthLayout
      title={'Sign Up '}
      subTitle="Create an Account! Please enter your  details"
      titleContainerStyle={{paddingTop: 20}}
      children={
        <>
          <View style={{flex: 1}}>
            <FormInput
              containerStyle={{marginTop: 20}}
              // value={form.firstName}
              label={'First Name'}
              placeholder={'Enter your First Name'}
              keyboardType="default"
              inputStyle={undefined}
              prependComponent={undefined}
              appendComponent={undefined}
              onChange={value => handleInputChange('firstName', value)}
              onFocus={() => {}}
              secureTextEntry={undefined}
              autoCompleteType="username"
            />

            <FormInput
              containerStyle={{marginTop: 20}}
              // value={form.lastName}
              label={'Last Name'}
              placeholder={'Enter your Last Name'}
              keyboardType="default"
              inputStyle={undefined}
              prependComponent={undefined}
              appendComponent={undefined}
              onChange={value => handleInputChange('lastName', value)}
              onFocus={() => {}}
              secureTextEntry={undefined}
              autoCompleteType="name-family"
            />

            <FormInput
              containerStyle={{marginTop: 20}}
              label={'Email'}
              placeholder={'Enter your Email Address'}
              inputStyle={undefined}
              prependComponent={undefined}
              appendComponent={undefined}
              onChange={value => {
                setForm({...form, email: value});
                const emailCheck = utils.isValidEmail(value);
                if (emailCheck || value.length === 0) {
                  setErrors({...errors, email: ''}); // Clear email error
                } else {
                  setErrors({...errors, email: 'Please enter a valid email'});
                }
              }}
              onEndEditing={() => {}}
              onFocus={() => {}}
              secureTextEntry={undefined}
            />

            <FormInput
              label="Phone Number"
              keyboardType="number-pad"
              containerStyle={{marginTop: 20}}
              // value={form.phoneNumber}
              // onChange={(value: React.SetStateAction<string>) => {
              //   setPhoneNumber(value);
              //   if (
              //     (value.length < 11 && value.length > 0) ||
              //     value.length > 11
              //   ) {
              //     setPhoneNumberError('Number must be 11 characters');
              //   } else if (value.length === 11 || value.length === 0) {
              //     setPhoneNumberError('');
              //   }
              // }}
              onChange={value => {
                // Remove any non-numeric characters from the input value
                const numericValue = value.replace(/\D/g, '');
                // Check if the numeric value starts with '234' (Nigeria country code)
                const isNigerianNumber = numericValue.startsWith('234');
                // Limit the phone number to 11 characters
                const formattedValue = numericValue.slice(0, 11);

                // Update the form state and handle errors
                setForm({
                  ...form,
                  phoneNumber: isNigerianNumber ? formattedValue : '',
                });

                // Check if the formatted value meets the length criteria
                if (formattedValue.length !== 11) {
                  setPhoneNumberError('Number must be 11 characters');
                } else {
                  setPhoneNumberError('');
                }
              }}
              errorMsg={phoneNumberError}
              appendComponent={undefined}
              placeholder={'Enter your Phone Number'}
              inputStyle={undefined}
              prependComponent={undefined}
              secureTextEntry={undefined}
              onFocus={() => {}}
              maxLength={11}
            />

            <FormInput
              containerStyle={{marginTop: 20}}
              value={form.bvn}
              label={'BVN'}
              placeholder={'Enter BVN'}
              keyboardType="number-pad"
              maxLength={11}
              inputStyle={undefined}
              prependComponent={undefined}
              appendComponent={undefined}
              onChange={handleBvnChange}
              onFocus={() => {}}
              secureTextEntry={undefined}
            />
            {bvnError ? <Text style={{color: 'red'}}>{bvnError}</Text> : null}

            <DatePicker
              modal
              open={open}
              mode="date"
              date={dob}
              onConfirm={handleDateChange}
              onCancel={() => setOpen(false)}
            />

            <FormInput
              containerStyle={{marginTop: 20}}
              value={dob ? dob.toDateString() : ''}
              label={'Date of Birth'}
              placeholder={'Select your Date of Birth'}
              inputStyle={undefined}
              prependComponent={undefined}
              appendComponent={undefined}
              onFocus={() => setOpen(true)}
              secureTextEntry={undefined}
              onChange={undefined}
            />

            {/* login-button */}
            <Button
              title="Continue"
              style={{
                backgroundColor: COLORS.purple,
                marginTop: hp(55),
              }}
              textStyle={{
                fontWeight: '700',
                color: COLORS.primaryBg,
              }}
              onPress={() => {
                console.log(dob, 'this is the date of birth selected');
                console.log(form, '@@@@@@@@@@@@');
                setIsLoading(false);
              }}
              // isLoading={!isLoading}
              prependComponent={undefined}
              appendComponent={undefined}
            />
          </View>
        </>
      }
    />
  );
};

export default SignUpScreen;

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

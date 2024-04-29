import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {fontSz} from '../../../utils';
import {COLORS, FONTS, SIZES} from '../../constants/theme';

const FormInput = (props: {
  containerStyle: any;
  label: any;
  placeholder: any;
  inputStyle: any;
  prependComponent: any;
  appendComponent: any;
  onChange: any;
  onFocus: any;
  secureTextEntry: any;
  keyboardType?:
    | 'default'
    | 'email-address'
    | 'numeric'
    | 'phone-pad'
    | 'number-pad'
    | 'decimal-pad'
    | undefined;
  autoCompleteType?:
    | 'off'
    | 'birthdate-day'
    | 'birthdate-full'
    | 'birthdate-month'
    | 'birthdate-year'
    | 'cc-csc'
    | 'cc-exp'
    | 'cc-exp-day'
    | 'cc-exp-month'
    | 'cc-exp-year'
    | 'cc-number'
    | 'email'
    | 'gender'
    | 'name'
    | 'name-family'
    | 'name-given'
    | 'name-middle'
    | 'name-middle-initial'
    | 'name-prefix'
    | 'name-suffix'
    | 'password'
    | 'password-new'
    | 'postal-address'
    | 'postal-address-country'
    | 'postal-address-extended'
    | 'postal-address-extended-postal-code'
    | 'postal-address-locality'
    | 'postal-address-region'
    | 'postal-code'
    | 'street-address'
    | 'sms-otp'
    | 'tel'
    | 'tel-country-code'
    | 'tel-national'
    | 'tel-device'
    | 'username'
    | 'username-new'
    | 'off'
    | undefined;
  autoCapitalize?: 'none' | undefined;
  errorMsg?: string | undefined;
}) => {
  const {
    containerStyle,
    label,
    placeholder,
    inputStyle,
    prependComponent,
    appendComponent,
    onChange,
    onFocus,
    secureTextEntry,
    keyboardType = 'default',
    autoCompleteType = 'off',
    autoCapitalize = 'none',
    errorMsg = ' ',
  } = props;
  return (
    <View style={{...containerStyle}}>
      {/* Label and error message */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            color: COLORS.textDark,
            fontFamily: FONTS.fontFamily,
            fontSize: SIZES.radius,
            // fontStyle: FONTS.fontStyle,
            fontWeight: '500',
          }}>
          {label}
        </Text>
        <Text
          style={{
            color: COLORS.red,
            fontFamily: FONTS.fontFamily,
            fontSize: SIZES.radius,
            // fontStyle: FONTS.fontStyle,
            fontWeight: '500',
          }}>
          {errorMsg}
        </Text>
      </View>

      {/* Text Input */}
      <View
        style={{
          flexDirection: 'row',
          height: 50,
          paddingHorizontal: SIZES.h4,
          marginTop: SIZES.base,
          borderRadius: SIZES.base,
          borderColor: COLORS.createOne,
          borderWidth: fontSz(1),
          backgroundColor: 'rgba(179, 179, 179, 0.05)',
        }}>
        {prependComponent}

        <TextInput
          style={{
            flex: 1,
            ...inputStyle,
            color: COLORS.black,
          }}
          placeholder={placeholder}
          placeholderTextColor={COLORS.deepAsh}
          onChangeText={text => onChange(text)}
          onFocus={text => onFocus()}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoComplete={autoCompleteType}
          autoCapitalize={autoCapitalize}
        />

        {appendComponent}
      </View>
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({});

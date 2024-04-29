import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {fontSz} from '../../../utils';
import {COLORS, FONTS, SIZES} from '../../constants/theme';

const SearchInput = (props: {
  containerStyle: any;
  placeholder: string | undefined;
  inputStyle: any;
  prependComponent: any;
  appendComponent: any;
  onChange: any;
  onFocus: any;
  autoFocus: boolean;
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
}) => {
  const {
    containerStyle,
    placeholder,
    inputStyle,
    prependComponent,
    appendComponent,
    onChange,
    onFocus,
    autoFocus,
    secureTextEntry,
    keyboardType = 'default',
    autoCompleteType = 'off',
    autoCapitalize = 'none',
  } = props;
  return (
    <View style={{...containerStyle}}>
      {/* Text Input */}
      <View
        style={{
          flexDirection: 'row',
          height: 50,
          paddingHorizontal: SIZES.h4,
          marginTop: SIZES.base,
          borderRadius: 50 / 2,
          backgroundColor: COLORS.searchBackgroundColor,
          shadowColor: 'rgba(0,0,0,0.3)',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.5,
          shadowRadius: 20,
          elevation: 5,
        }}>
        {prependComponent}

        <TextInput
          style={{
            flex: 1,
            ...inputStyle,
            color: COLORS.black,
          }}
          placeholder={placeholder}
          autoFocus={autoFocus}
          placeholderTextColor={COLORS.lightCreateOne}
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

export default SearchInput;

const styles = StyleSheet.create({});

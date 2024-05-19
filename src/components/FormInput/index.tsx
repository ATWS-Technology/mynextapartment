import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../theme/theme';
import {fontSz, wp} from '../../utils';

const FormInput = (props: {
  containerStyle: any;
  value: any;
  label: any;
  placeholder: any;
  inputStyle: any;
  prependComponent: any;
  appendComponent: any;
  onChange: any;
  onEndEditing: any;
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
  multiline?: boolean | undefined;
  numberOfLines?: number;
  isLoading?: boolean;
}) => {
  const {
    value,
    containerStyle,
    label,
    placeholder,
    inputStyle,
    prependComponent,
    appendComponent,
    onChange,
    onEndEditing,
    onFocus,
    secureTextEntry,
    keyboardType = 'default',
    autoCompleteType = 'off',
    autoCapitalize = 'none',
    errorMsg = ' ',
    multiline = false,
    numberOfLines = 1,
    isLoading = false,
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
            fontSize: SIZES.font,
            fontWeight: '500',
          }}>
          {label}
        </Text>
        <Text
          style={{
            color: COLORS.error,
            fontFamily: FONTS.fontFamilyRegular,
            fontSize: SIZES.font,
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
          marginTop: SIZES.base,
          borderBottomColor: COLORS.divider,
          borderBottomWidth: fontSz(1),
          backgroundColor: COLORS.white,
        }}>
        {prependComponent}

        {isLoading ? (
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            {/* <FormInputLoader /> */}
          </View>
        ) : (
          <TextInput
            style={{
              flex: 1,
              ...inputStyle,
              color: COLORS.black,
            }}
            placeholder={placeholder}
            value={value}
            placeholderTextColor={COLORS.placeholder}
            onChangeText={text => onChange(text)}
            onFocus={text => onFocus()}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            autoComplete={autoCompleteType}
            autoCapitalize={autoCapitalize}
            multiline={multiline}
            numberOfLines={numberOfLines}
          />
        )}

        {appendComponent}
      </View>
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({});

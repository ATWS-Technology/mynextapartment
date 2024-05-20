/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../theme/theme';
import {fontSz, wp} from '../../utils';

const FormInput = props => {
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
    inputHeight = 40,
  } = props;

  return (
    <View style={{...containerStyle}}>
      {/* Label */}
      <Text
        style={{
          color: COLORS.textDark,
          fontFamily: FONTS.fontFamily,
          fontSize: SIZES.font,
          fontWeight: '500',
        }}>
        {label}
      </Text>

      {/* Text Input */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: SIZES.base,
          borderBottomColor: COLORS.divider,
          borderBottomWidth: fontSz(1),
          backgroundColor: COLORS.white,
        }}>
        {prependComponent}

        {isLoading ? (
          <View style={{flex: 1, alignItems: 'center', alignSelf: 'center'}}>
            {/* <FormInputLoader /> */}
          </View>
        ) : (
          <TextInput
            style={{
              flex: 1,
              ...inputStyle,
              color: COLORS.black,
              height: inputHeight,
              fontSize: SIZES.InputFont,
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

      {/* Error Message */}
      <Text
        style={{
          color: COLORS.error,
          fontFamily: FONTS.fontFamilyRegular,
          fontSize: SIZES.font,
          fontWeight: '500',
          marginTop: SIZES.base,
        }}>
        {errorMsg}
      </Text>
    </View>
  );
};

export default FormInput;

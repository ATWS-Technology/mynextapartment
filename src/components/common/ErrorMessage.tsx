import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../theme/theme';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({message}) => {
  if (!message) {
    return null;
  }

  return <Text style={styles.errorText}>{message}</Text>;
};

const styles = StyleSheet.create({
  errorText: {
    color: COLORS.error,
    fontFamily: FONTS.fontFamilyRegular,
    fontSize: SIZES.font - 2,
    marginTop: 5,
    marginLeft: 5,
  },
});

export default ErrorMessage;

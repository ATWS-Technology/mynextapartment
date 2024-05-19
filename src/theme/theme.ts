import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  primary: '#04100F',
  primaryBg: '#ffffff',
  buttonDisabled: '#EFFBF9',
  primaryLight: 'rgba(42, 157, 143, 0.1)',
  primaryLightBg: '#F7FDFC',
  primaryAccent: '#E76F51', //default primary Orange used
  primaryTint: '#FDF0ED', //default primary used
  textDark: '#04100F', // default for texts
  textMid: '#525252',
  textLight: '#383838',
  divider: '#EBEBEB',
  placeholder: '#6B6B6B',
  inActiveTab: '#858585',
  black: '#000000',
  white: '#ffffff',
  success: 'rgba(28, 219, 47, 1)',
  error: '#EE404C',
  logout: '#FEF8F6',
  transparent: 'transparent',
  purple: '#222831',
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,
  bodySmall: 20,
  // app dimensions
  width,
  height,
};

export const FONTS = {
  fontFamilyBlack: 'Karla-Regular',
  fontFamilyBlackItalic: 'Karla-BlackItalic',
  fontFamilyBold: 'Karla-Bold',
  fontFamilyBoldItalic: 'Karla-BoldItalic',
  fontFamilyExtraBold: 'Karla-ExtraBold',
  fontFamilyItalic: 'Karla-Italic',
  fontFamilyMedium: 'Karla-Medium',
  fontFamilyMediumItalic: 'Karla-MediumItalic',
  fontFamily: 'Karla-Regular',
  fontFamilyRegular: 'Karla-Regular',
  fontFamilySemiBold: 'Karla-SemiBold',
  fontFamilySemiBoldItalic: 'Karla-SemiBoldItalic',
};

export const DARKTHEME = {
  mode: 'dark',
  primary: '#ffffff',
  primaryBackground: '#212121',
  primaryLightBg: '#F7FDFC',
  statusBar: 'light-content',
  button: '#ffffff',
};
export const LIGHTTHEME = {
  mode: 'light',
  primary: '#04100F',
  buttonDisabled: '#EFFBF9',
  primaryBackground: 'rgba(42, 157, 143, 0.1)',
  primaryLightBg: '#F7FDFC',
  statusBar: 'default',
  button: '#000',
};

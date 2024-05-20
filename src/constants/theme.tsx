import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  primaryYellow: 'rgba(251, 176, 60, 1)', //default primary yellow used
  primaryOrange: 'rgba(215, 27, 91, 1)', //default primary Orange used
  primaryButtonText: 'rgba(5, 5, 7, 1)', //default primary used
  textDark: 'rgba(18, 18, 18, 1)', // default for texts
  primaryBg: '#F8F8FA',
  dontHaveAccount: 'rgba(31, 31, 31, 1)',
  createOne: 'rgba(179, 179, 179, 1)',
  createOneYellow: 'rgba(209, 147, 50, 1)',
  lightCreateOne: 'rgba(102, 102, 102, 1)',
  success: 'rgba(36, 189, 134, 1)',
  black: '#000000',
  authLayoutSubtitle: 'rgba(77, 77, 77, 1)',
  backgroundColor: 'rgba(249, 249, 249, 1)',
  white: '#FFFFFF',
  filterBorderColor: 'rgba(186, 186, 186, 1)',
  filterModalColor: 'rgba(230, 230, 230, 1)',
  searchBackgroundColor: 'rgba(238, 239, 241, 1)',
  red: 'rgba(240, 44, 44, 1)',
  vendorCategory: 'rgba(128, 128, 128, 1)',
  borderColor: 'rgba(217, 217, 217, 1)',
  modalHandleColor: 'rgba(204, 204, 204, 1)',
  disabledButton: 'rgba(209, 209, 211, 1)',
  disabledButtonText: 'rgba(139, 140, 145, 1)',
  transparentPrimary: '#73e8ff',
  transparentPrimray: '#90e0ef',
  secondary: '#00b4d8',
  orange: '#FFA133',
  lightOrange: '#FFA133',
  lightOrange2: '#FDDED4',
  lightOrange3: '#FFD9AD',
  deepGreen: '#27AE60',
  green: '#60dc94',
  blue: '#0064C0',
  darkBlue: '#111A2C',
  darkGray: '#525C67',
  darkGray2: '#757D85',
  gray: '#898B9A',
  gray2: '#BBBDC1',
  gray3: '#CFD0D7',
  lightGray1: '#DDDDDD',
  lightGray2: '#F5F5F8',
  white2: '#FBFBFB',
  inputText: '#4F4F4F',
  ash: '#F2F2F2',
  deepAsh: '#C4C4C4',
  divider: '##E5E5E5',
  primary: '#04100F',


  transparent: 'transparent',
  transparentBlack1: 'rgba(0, 0, 0, 0.1)',
  transparentBlack7: 'rgba(0, 0, 0, 0.7)',
};
export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,
  bodySmall: 20,

  // font sizes
  largeTitle: 40,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  h5: 12,
  body1: 28,
  body2: 24,
  body3: 20,
  body4: 18,
  body5: 10,

  // app dimensions
  width,
  height,
};
export const FONTS = {
  h2: {
    fontFamily: 'Karla-Medium',
    fontSize: SIZES.body5,
    color: COLORS.black,
  },
  h3: {
    fontFamily: 'Karla-SemiBold',
    fontSize: SIZES.h3,
    lineHeight: 22,
    color: COLORS.black,
  },
  h4: {
    fontFamily: 'Karla-SemiBold',
    fontSize: SIZES.body5,
    color: COLORS.black,
  },
  h5: {
    fontFamily: 'Karla-Light',
    fontSize: SIZES.base,
    color: COLORS.black,
  },
  h6: {
    fontFamily: 'Karla-Italic',
    fontSize: SIZES.base,
    color: COLORS.black,
  },
  likes: {
    fontFamily: 'Karla-Bold',
    fontSize: SIZES.base,
    marginHorizontal: SIZES.base,
    color: COLORS.black,
  },
  conatactName: {
    fontFamily: 'Karla-Bold',
    fontSize: SIZES.body5,
    marginHorizontal: SIZES.base,
    marginVertical: 2,
    color: COLORS.black,
  },
  contactOccupation: {
    fontFamily: 'Karla-SemiBold',
    fontSize: SIZES.base,
    marginHorizontal: SIZES.base,
    marginVertical: 1,
    color: COLORS.black,
  },
  contactPosition: {
    fontFamily: 'Karla-Light',
    fontSize: SIZES.base,
    marginHorizontal: SIZES.base,
    marginVertical: 1,
    color: COLORS.black,
  },
  add: {
    fontFamily: 'Karla-Bold',
    fontSize: SIZES.body5,
    marginHorizontal: SIZES.base,
    color: COLORS.black,
  },
  fontFamily: 'Karla-Regular',
  fontFamilyBlack: 'Karla-Bold',
  fontStyle: 'normal',
  fontStyleBold: 'bold',
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;

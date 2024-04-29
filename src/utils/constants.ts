import {
  Dimensions,
  StatusBar,
  Platform,
  PixelRatio,
  Easing,
  UIManager,
  LayoutAnimation,
} from 'react-native';
import {CardStyleInterpolators} from '@react-navigation/stack';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wdp,
  heightPercentageToDP as hdp,
} from 'react-native-responsive-screen';

export const WIDTH = Dimensions.get('screen').width;
export const HEIGHT = Dimensions.get('screen').height;

const customWidth = 1133;
const customHeight = 744;

export const IOS = Platform.OS === 'ios';
export const ANDROID = Platform.OS === 'android';

export const FADE = {
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
};

export const layoutAnimation = () => {
  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  LayoutAnimation.configureNext(LayoutAnimation?.Presets?.easeInEaseOut);
};

export const springLayoutAnimation = () => {
  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  LayoutAnimation.configureNext(LayoutAnimation?.Presets?.spring);
};

export const linearLayoutAnimation = () => {
  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  LayoutAnimation.configureNext(LayoutAnimation?.Presets?.linear);
};

const transitionSpec = {
  open: {
    animation: 'timing',
    config: {
      duration: 250,
      easing: Easing.inOut(Easing.ease),
    },
  },
  close: {
    animation: 'timing',
    config: {
      duration: 250,
      easing: Easing.inOut(Easing.ease),
    },
  },
};

const springTransitionSpec = {
  open: {
    animation: 'spring',
    config: {
      duration: 250,
      easing: Easing.inOut(Easing.ease),
    },
  },
  close: {
    animation: 'timing',
    config: {
      duration: 250,
      easing: Easing.inOut(Easing.ease),
    },
  },
};

export const BottomSheetTransition = {
  transitionSpec,
  cardStyleInterpolator: CardStyleInterpolators.forBottomSheetAndroid,
};

export const HorizontalTransition = {
  transitionSpec,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

export const ModalTransition = {
  transitionSpec: springTransitionSpec,
  cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
};

const widthPercentageToDP = (widthPercent: number | string) => {
  // Parse string percentage input and convert it to number.
  const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((WIDTH * elemWidth) / 100);
};

const heightPercentageToDP = (heightPercent: number | string) => {
  // Parse string percentage input and convert it to number.
  const elemHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((HEIGHT * elemHeight) / 100);
};

export const hp = (val: number) => {
  // get scaled height equivalent of design height
  // const num = val / 8.44;
  // return heightPercentageToDP(num);
  const dimension = (val / customHeight) * 100;
  return hdp(`${dimension}%`);
};

export const wp = (val: number) => {
  // get scaled width equivalent of design width
  // const num = val / 3.88;
  // return widthPercentageToDP(num);
  const dimension = (val / customWidth) * 100;
  return wdp(`${dimension}%`);
};

export const fontSz = (val: number) => RFPercentage(val / 8.5);

export const HITSLOP = {
  right: wp(10),
  left: wp(10),
  top: hp(10),
  bottom: hp(10),
};

export const STATUS_BAR_HEIGHT = StatusBar.currentHeight || hp(28);

export const getCloser = (
  value: number | undefined,
  checkOne: number,
  checkTwo: number,
) =>
  Math.abs(value - checkOne) < Math.abs(value - checkTwo) ? checkOne : checkTwo;

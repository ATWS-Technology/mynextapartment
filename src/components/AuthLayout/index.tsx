import React from 'react';
import {
  Image,
  Text,
  View,
  Platform,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import {fontSz} from '../../utils';

const AuthLayout = (props: {
  title: string;
  subTitle: string | JSX.Element;
  titleContainerStyle: any | null;
  children: JSX.Element;
}) => {
  const {title, subTitle, titleContainerStyle, children} = props;
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: COLORS.white,
          paddingVertical:
            Platform.OS === 'ios' ? SIZES.height / 22 : SIZES.padding,
        }}>
        <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
        <KeyboardAwareScrollView
          keyboardDismissMode="on-drag"
          contentContainerStyle={{
            flex: 1,
            paddingHorizontal: SIZES.padding,
          }}>
          {/* title & subtitle */}
          <View
            style={{
              ...titleContainerStyle,
            }}>
            <Text
              style={{
                fontFamily: FONTS.fontFamily,
                fontSize: fontSz(22),
                color: COLORS.black,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              {title}
            </Text>
            <Text
              style={{
                fontFamily: FONTS.fontFamily,
                fontSize: fontSz(16),
                color: COLORS.textLight,
                fontWeight: 'normal',
                marginTop: SIZES.base * 1.5,
              }}>
              {subTitle}
            </Text>
          </View>

          {/* children */}
          {children}
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </>
  );
};
export default AuthLayout;

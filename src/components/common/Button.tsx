/* eslint-disable react-native/no-inline-styles */
import React, {memo, ComponentProps} from 'react';
import {
  StyleSheet,
  StyleProp,
  ViewStyle,
  Pressable,
  Button as BaseButton,
  TextStyle,
  View,
} from 'react-native';
import {Text} from './Text';
import {Plane, Wave, Flow} from 'react-native-animated-spinkit';
import {fontSz, hp, wp} from '../../utils';
import {COLORS} from '../../constants/theme';

type ButtonProps = ComponentProps<typeof BaseButton> & {
  title: string;
  isLoading?: boolean;
  loaderColor?: string;
  outlined?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  fontSize?: number;
  prependComponent: any;
  appendComponent: any;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  containerStyle?: StyleProp<ViewStyle>;
};

export const Button = memo(
  ({
    title,
    loaderColor = '#fff',
    isLoading = false,
    outlined,
    style,
    textStyle,
    fontWeight = 'bold',
    fontSize = fontSz(14),
    containerStyle,
    prependComponent,
    appendComponent,
    ...rest
  }: ButtonProps) => {
    return (
      <Pressable
        disabled={isLoading}
        style={[
          styles.btn,
          {
            backgroundColor: outlined ? 'transparent' : COLORS.black,
            borderWidth: outlined ? 1 : 0,
            borderColor: outlined ? COLORS.black : 'transparent',
          },
          style,
        ]}
        {...rest}>
        {!isLoading ? (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            {prependComponent}
            <Text
              text={title}
              fontSize={fontSize}
              color={outlined ? COLORS.textDark : COLORS.primaryBg}
              fontWeight={fontWeight}
              style={textStyle}
            />
            {appendComponent}
          </View>
        ) : (
          <Flow
            size={wp(75)}
            color={outlined ? COLORS.textDark : COLORS.primaryBg}
          />
        )}
      </Pressable>
    );
  },
);

const styles = StyleSheet.create({
  btn: {
    borderRadius: hp(8),
    width: '100%',
    height: hp(36),
    marginTop: hp(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

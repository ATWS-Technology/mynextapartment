import React, {ComponentProps, memo, useMemo} from 'react';
import {StyleProp, TextStyle, Text as BaseText} from 'react-native';
import {COLORS} from '../../constants/theme';
import {fontSz} from '../../utils';

type TextProps = ComponentProps<typeof BaseText> & {
  text: string;
  fontSize?: number;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  color?: string;
  fontFamily?:
    | 'Karla-Black'
    | 'Karla-Bold'
    | 'Karla-ExtraLight'
    | 'Karla-Light'
    | 'Karla-Medium'
    | 'Karla-Regular'
    | 'Karla-SemiBold'
    | 'Karla-Thin';
  lineHeight?: number;
  numberOfLines?: number;
  textDecorationLine?:
    | 'none'
    | 'underline'
    | 'line-through'
    | 'underline line-through'
    | undefined;
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
  style?: StyleProp<TextStyle>;
};

export const Text = memo(
  ({
    text,
    fontSize = fontSz(15),
    lineHeight,
    numberOfLines = 0,
    onPress,
    textAlign,
    color = COLORS.textDark,
    fontWeight = '400',
    fontFamily = 'Karla-Regular',
    textDecorationLine = 'none',
    style,
    ...rest
  }: TextProps) => {
    const propsStyle = useMemo(
      () => ({
        color,
        fontSize,
        textAlign,
        lineHeight,
        fontWeight,
        fontFamily,
        textDecorationLine,
      }),
      [
        color,
        textAlign,
        textDecorationLine,
        fontWeight,
        fontFamily,
        lineHeight,
        fontSize,
      ],
    );

    return (
      <BaseText
        numberOfLines={numberOfLines}
        onPress={onPress}
        style={[propsStyle, style]}
        {...rest}>
        {text}
      </BaseText>
    );
  },
);

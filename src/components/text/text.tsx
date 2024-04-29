/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import styled from '@emotion/native';
import {TextStyle, ViewStyle, useWindowDimensions} from 'react-native';
import {fontSz} from '../../utils';
import {FONTS} from '../../theme/theme';

export const RegularText = styled.Text<{
  fontFamily?: TextStyle['fontFamily'];
  fontSize?: TextStyle['fontSize'];
  lineHeight?: TextStyle['lineHeight'];
  color?: string;
  marginLeft?: ViewStyle['marginLeft'];
  marginTop?: ViewStyle['marginTop'];
  marginBottom?: ViewStyle['marginBottom'];
  textAlign?: TextStyle['textAlign'];
  numberOfLines?: number;
}>(
  ({
    fontFamily = FONTS.fontFamily,
    fontSize = 12,
    lineHeight = fontSize * 1.7,
    color,
    marginTop,
    marginBottom,
    marginLeft,
    textAlign,
    theme,
  }) => ({
    fontFamily,
    fontSize: fontSz(fontSize),
    lineHeight: fontSz(lineHeight),
    color: color,
    marginTop,
    marginBottom,
    textAlign,
    marginLeft,
  }),
);

export const MediumText = styled(RegularText)({
  fontWeight: '500',
});

export const SemiBoldText = styled(RegularText)({
  fontWeight: '600',
});
export const ThickText = styled(RegularText)({
  fontWeight: '700',
});
export const BoldText = styled(RegularText)({
  fontWeight: 'bold',
});

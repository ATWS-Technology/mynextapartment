import React from 'react';
import {GestureResponderEvent, Pressable} from 'react-native';
import {fontSz, hp, wp} from '../../../utils';
import {globalStyles} from '../../../utils/globalStyles';
import {LocationIcon} from '../../assets/images/svg';
import {Text} from './Text';

const LocationCard = (props: {
  title: string | undefined;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}) => {
  return (
    <Pressable
      style={[globalStyles.rowStart, {marginTop: hp(5), marginBottom: hp(15)}]}
      onPress={props?.onPress}>
      <LocationIcon />
      <Text
        style={{fontWeight: '400', marginLeft: wp(10)}}
        fontSize={fontSz(15)}
        text={`${props?.title}`}
        numberOfLines={1}
      />
    </Pressable>
  );
};

export default LocationCard;

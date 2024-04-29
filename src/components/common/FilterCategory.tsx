import React from 'react';
import {GestureResponderEvent, Pressable, StyleSheet} from 'react-native';
import {fontSz, hp, wp} from '../../../utils';
import {Text} from './Text';
import {COLORS} from '../../constants/theme';
import {VendorCategory as HomeCategoryProps} from '../../../utils/Model';

const FilterCategory = (props: {
  name: string;
  active: boolean;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  category: HomeCategoryProps;
}) => {
  const {name, active, category, onPress} = props;
  return (
    <Pressable
      onPress={onPress}
      style={{
        paddingHorizontal: wp(40),
        paddingVertical: hp(0.75),
        marginRight: wp(15),
        marginBottom: wp(15),
        borderRadius: 4,
        borderWidth: 1,
        backgroundColor: COLORS.white,
        borderColor: active ? COLORS.primaryOrange : COLORS.modalHandleColor,
      }}>
      <Text
        style={{
          fontWeight: '400',
          paddingVertical: hp(6.5),
        }}
        fontSize={fontSz(14)}
        text={name.toUpperCase()}
        color={active ? COLORS.textDark : COLORS.vendorCategory}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({});

export default FilterCategory;

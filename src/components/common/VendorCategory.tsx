import React from 'react';
import {GestureResponderEvent, Pressable, StyleSheet} from 'react-native';
import {fontSz, hp, wp} from '../../../utils';
import {Text} from './Text';
import {COLORS} from '../../constants/theme';
import {VendorCategory as VendorCategoryProp} from '../../../utils/Model';

const VendorCategory = (props: {
  name: string;
  activeCategory: VendorCategoryProp | null;
  setActiveCategory: React.Dispatch<
    React.SetStateAction<VendorCategoryProp | null>
  >;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  category: VendorCategoryProp;
}) => {
  const {name, activeCategory, category, setActiveCategory, onPress} = props;
  return (
    <Pressable
      onPressIn={() => {
        setActiveCategory(category);
      }}
      onPress={onPress}
      style={{
        backgroundColor:
          activeCategory?.id === category?.id
            ? COLORS.primaryYellow
            : COLORS.white,
        paddingHorizontal: wp(40),
        paddingVertical: hp(1),
        marginRight: wp(15),
        borderRadius: 4,
      }}>
      <Text
        style={{
          fontWeight: '400',
          paddingBottom: hp(7.5),
          paddingTop: hp(10),
        }}
        fontSize={fontSz(14)}
        text={name.toUpperCase()}
        color={
          activeCategory?.id === category?.id
            ? COLORS.primaryButtonText
            : COLORS.vendorCategory
        }
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({});

export default VendorCategory;

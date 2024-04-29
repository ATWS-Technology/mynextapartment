import React from 'react';
import {
  GestureResponderEvent,
  ImageRequireSource,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import {fontSz, hp, wp} from '../../../utils';
import {globalStyles} from '../../../utils/globalStyles';
import {Text} from './Text';
import FastImage, {Source} from 'react-native-fast-image';
import {COLORS} from '../../constants/theme';
import {HomeCategory as HomeCategoryProps} from '../../../utils/Model';

const HomeCategory = (props: {
  name: string;
  image: Source | ImageRequireSource;
  activeCategory: HomeCategoryProps | null;
  setActiveCategory: React.Dispatch<
    React.SetStateAction<HomeCategoryProps | null>
  >;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  category: HomeCategoryProps;
}) => {
  const {image, name, activeCategory, category, setActiveCategory, onPress} =
    props;
  return (
    <Pressable
      onPressIn={() => {
        setActiveCategory(category);
      }}
      onPress={onPress}
      style={[
        globalStyles.colBetween,
        {
          // height: hp(100),
          marginRight: wp(50),
          alignItems: 'center',
        },
      ]}>
      <View
        style={{
          height: hp(75),
          width: hp(75),
          borderRadius: hp(75 / 2),
          backgroundColor:
            name === 'Swallow'
              ? 'rgba(204, 232, 204, 0.7)'
              : name === 'Rice'
              ? 'rgba(217, 189, 197, 0.7)'
              : name === 'Soup'
              ? 'rgba(177, 221, 241, 0.7)'
              : name === 'Drinks'
              ? 'rgba(163, 147, 191, 0.5)'
              : 'rgba(0, 0, 0, 0.05)',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <FastImage
          style={{
            width: hp(58),
            height: hp(58),
          }}
          source={image}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
      <Text
        style={{fontWeight: '400', paddingVertical: hp(5)}}
        fontSize={fontSz(17)}
        text={`${name}`}
      />
      {activeCategory?.id === category?.id ? (
        <View
          style={[
            styles.categoryPin,
            {
              backgroundColor: COLORS.primaryYellow,
            },
          ]}
        />
      ) : (
        <View
          style={[
            styles.categoryPin,
            {
              backgroundColor: COLORS.transparent,
            },
          ]}
        />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  categoryPin: {
    marginVertical: hp(2.5),
    height: hp(1.25),
    width: '20%',
    borderRadius: 8,
  },
});

export default HomeCategory;

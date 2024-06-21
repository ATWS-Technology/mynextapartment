/* eslint-disable react-native/no-inline-styles */
import React, {FunctionComponent} from 'react';
import {View, ViewStyle, Image, Pressable, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {fontSz} from '../../utils';
import {COLORS, SIZES} from '../../constants/theme';

type SearchBarProps = {
  style?: ViewStyle | ViewStyle[];
};

const SearchBarWithAutocomplete: FunctionComponent<SearchBarProps> = props => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Map');
  };

  return (
    <Pressable
      onPress={handlePress}
      style={{
        flexDirection: 'row',
        height: 50,
        paddingHorizontal: SIZES.h4,
        borderRadius: SIZES.padding,
        borderColor: COLORS.createOne,
        borderWidth: fontSz(1),
        backgroundColor: '#E3E3E7',
        alignItems: 'center',
      }}>
      <Image
        style={{
          height: 18,
          width: 18,
        }}
        source={require('../../asset/svg/search-normal.png')}
      />
      <Text
        style={{
          marginLeft: SIZES.h4,
          fontSize: fontSz(16),
          color: COLORS.textDark,
        }}>
        Search address, city, location
      </Text>
    </Pressable>
  );
};

export default SearchBarWithAutocomplete;

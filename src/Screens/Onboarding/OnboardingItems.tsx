import {StyleSheet, View, Image, useWindowDimensions, Text} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../../theme/theme';

const OnboardingItems = ({item}: any) => {
  const {width} = useWindowDimensions();
  return (
    <View style={[styles.container, {width}]}>
      <Image
        source={item.image}
        style={[styles.image, {width, resizeMode: 'contain'}]}
      />
      <View style={{flex: 0.3}}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

export default OnboardingItems;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    flex: 0.7,
    justifyContent: 'center',
  },
  title: {
    fontWeight: '800',
    fontSize: 25,
    fontFamily: FONTS.fontFamilyBlack,
    textAlign: 'center',
    justifyContent: 'flex-end',
    marginBottom: 10,
    color: COLORS.primary,
  },
  description: {
    fontWeight: '300',
    fontSize: SIZES.font,
    fontFamily: FONTS.fontFamilyBlack,
    textAlign: 'center',
    marginHorizontal: 20,
    color: COLORS.placeholder,
    // backgroundColor: 'red',
  },
});

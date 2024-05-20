/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS} from '../../theme/theme';
import {fontSz} from '../../utils';
import {Button} from './Button';

const ActiveCard = ({
  imageSource,
  rating,
  title,
  location,
  rooms,
  area,
  price,
}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>Want to host your own place?</Text>

        <Text style={styles.cardLocation}>
          Earn passive income by renting or selling your properties!
        </Text>

        <Button
          title="Active as Landlord"
          isLoading={false}
          loaderColor={undefined}
          outlined={undefined}
          style={{backgroundColor: 'white', borderRadius: 20}}
          textStyle={{color: COLORS.primary}}
          prependComponent={undefined}
          appendComponent={undefined}
          containerStyle={undefined}
        />
      </View>
      <View>
        <Image
          source={require('../../asset/svg/blockOfFlats5.png')}
          style={styles.cardImage}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    marginTop: 30,
    paddingHorizontal: 10,
    backgroundColor: '#222831',
    borderRadius: 10,
  },
  cardImage: {
    width: fontSz(150),
    height: fontSz(248),
    resizeMode: 'contain',
  },
  cardContent: {
    gap: 10,
    borderRadius: 10,
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  cardRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  cardTitle: {
    fontFamily: FONTS.fontFamilyExtraBold,
    fontSize: fontSz(24),
    color: '#ffffff',
    width: 200,
  },
  cardLocation: {
    fontFamily: FONTS.fontFamilyMedium,
    fontSize: fontSz(16),
    color: '#E3DDFF',
    width: 200,
  },
});

export default ActiveCard;

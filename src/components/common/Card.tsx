import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS} from '../../theme/theme';
import {fontSz} from '../../utils';

const Card = ({imageSource, rating, title, location, rooms, area, price}) => {
  const [isHeartSelected, setIsHeartSelected] = useState(false);

  const handleHeartPress = () => {
    setIsHeartSelected(!isHeartSelected);
  };

  return (
    <View style={styles.cardContainer}>
      <Image source={imageSource} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <View style={styles.cardRating}>
          <Image
            source={require('../../asset/svg/star.png')}
            style={styles.ratingIcon}
          />
          <Text style={styles.ratingText}>{rating}</Text>
        </View>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardLocation}>{location}</Text>
        <View style={styles.cardDetails}>
          <Image
            source={require('../../asset/svg/bedIcon.png')}
            style={styles.detailIcon}
          />
          <Text style={styles.detailText}>{rooms} rooms</Text>
          <Image
            source={require('../../asset/svg/areasqu.png')}
            style={styles.detailIcon}
          />
          <Text style={styles.detailText}>{area} m²</Text>
        </View>
        <View style={styles.cardPrice}>
          <Text style={styles.priceText}>₦{price}</Text>
          <Text style={styles.perMonthText}>/ month</Text>
          <TouchableOpacity
            onPress={handleHeartPress}
            style={styles.heartIconContainer}>
            <Image
              source={
                isHeartSelected
                  ? require('../../asset/svg/heartPink.png')
                  : require('../../asset/svg/heart.png')
              }
              style={styles.detailIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    marginRight: 10,
    borderRadius: 10,
  },
  cardImage: {
    width: 130,
    height: 250,
    resizeMode: 'contain',
  },
  cardContent: {
    marginHorizontal: 10,
    gap: 10,
    height: 200,
    paddingTop: 20,
    marginTop: 20,
    // justifyContent: 'space-between',
  },
  cardRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  ratingText: {
    paddingHorizontal: 10,
  },
  cardTitle: {
    fontFamily: FONTS.fontFamilyMedium,
    fontSize: fontSz(17),
    color: '#1A1E25',
    flexWrap: 'wrap',
    width: 200,
  },
  cardLocation: {
    fontFamily: FONTS.fontFamilyMedium,
    fontSize: fontSz(15),
    color: '#7D7F88',
  },
  cardDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  detailText: {
    paddingHorizontal: 10,
  },
  cardPrice: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceText: {
    fontFamily: FONTS.fontFamilyBold,
    fontSize: fontSz(18),
  },
  perMonthText: {
    fontFamily: FONTS.fontFamily,
    fontSize: fontSz(16),
    color: COLORS.textMid,
  },
  heartIconContainer: {
    position: 'absolute',
    top: 20,
    right: 5,
    zIndex: 1,
  },
  heartIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
});

export default Card;

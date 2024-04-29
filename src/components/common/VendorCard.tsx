import React, {useState} from 'react';
import {
  GestureResponderEvent,
  ImageRequireSource,
  Pressable,
  StyleSheet,
  View,
  Text as BaseText,
  Image,
} from 'react-native';
import {fontSz, hp, WIDTH, wp} from '../../../utils';
import {globalStyles} from '../../../utils/globalStyles';
import {Text} from './Text';
import FastImage, {Source} from 'react-native-fast-image';
import {COLORS} from '../../constants/theme';
import {SharedElement} from 'react-navigation-shared-element';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {Vendor} from '../../../utils/Model';

const VendorCard = (props: {
  id: string;
  vendorName: string;
  location: string;
  deliveryFee: string;
  rate: string;
  numOfRate: string;
  duration: string;
  image: Source | ImageRequireSource;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  vendor: Vendor;
  fullWidth: boolean | undefined;
}) => {
  const navigation = useNavigation();
  const {
    id,
    image,
    vendorName,
    location,
    deliveryFee,
    rate,
    numOfRate,
    duration,
    onPress,
    vendor,
    fullWidth,
  } = props;
  const [opacity, setOpacity] = useState(1);
  useFocusEffect(() => {
    if (navigation.isFocused()) {
      setOpacity(1);
    }
  });

  return (
    <Pressable
      style={[
        globalStyles.colBetween,
        {
          marginRight: fullWidth ? 0 : wp(50),
          marginVertical: fullWidth ? hp(5) : 0,
        },
      ]}
      onPress={() => {
        setOpacity(0);
        navigation.navigate('Vendor', {vendor});
      }}>
      <SharedElement id={id}>
        <View
          style={{
            height: hp(150),
            width: fullWidth ? WIDTH * 0.93 : WIDTH * 0.75,
            borderRadius: 8,
            opacity,
          }}>
          <Pressable
            style={{
              top: 10,
              right: 15,
              zIndex: 9999,
              position: 'absolute',
            }}>
            <Image
              style={{
                height: 24,
                width: 24,
              }}
              source={require('../../assets/icons/heart.png')}
            />
          </Pressable>
          <FastImage
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 8,
            }}
            source={image}
            resizeMode={FastImage.resizeMode.cover}
          />
          <View
            style={{
              bottom: 10,
              right: 15,
              zIndex: 9999,
              position: 'absolute',
              backgroundColor: 'rgba(18, 18, 18, 0.7)',
              borderRadius: 8,
            }}>
            <Text
              style={{
                fontWeight: '500',
                paddingHorizontal: wp(20),
                paddingVertical: hp(4),
              }}
              fontSize={fontSz(14)}
              text={`${duration} mins`}
              color={COLORS.white}
            />
          </View>
        </View>
      </SharedElement>
      <View
        style={[
          globalStyles.colBetween,
          {
            paddingVertical: hp(7.5),
          },
        ]}>
        <View
          style={[
            globalStyles.rowBetween,
            {
              paddingVertical: hp(2.5),
            },
          ]}>
          <Text
            style={{fontWeight: '500'}}
            fontSize={fontSz(17.5)}
            text={vendorName}
          />
          <Text
            style={{fontWeight: '400'}}
            fontSize={fontSz(17.5)}
            text={location}
            color={COLORS.lightCreateOne}
          />
        </View>
        <View
          style={[
            globalStyles.rowBetween,
            {
              paddingVertical: hp(2.5),
            },
          ]}>
          <View style={globalStyles.rowStart}>
            <Image
              style={{
                height: 22,
                width: 22,
                marginRight: wp(20),
              }}
              source={require('../../assets/icons/delivery_bike.png')}
            />
            <View
              style={{
                backgroundColor: 'rgba(247, 209, 222, 0.5)',
                borderRadius: 4,
              }}>
              <Text
                style={{
                  fontWeight: '400',
                  paddingHorizontal: wp(20),
                  paddingVertical: hp(4),
                }}
                fontSize={fontSz(14)}
                text={`${
                  deliveryFee !== 'Free delivery' ? '\u20A6' : ''
                } ${deliveryFee}`}
                color={COLORS.authLayoutSubtitle}
              />
            </View>
          </View>
          <BaseText
            style={{
              color: COLORS.lightCreateOne,
              fontSize: fontSz(14),
              fontWeight: '400',
              fontFamily: 'Karla-Regular',
            }}>
            {rate}
            <BaseText>{` (${numOfRate})`}</BaseText>
          </BaseText>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({});

export default VendorCard;

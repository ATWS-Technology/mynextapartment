import React from 'react';
import {
  GestureResponderEvent,
  Image,
  ImageRequireSource,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import {fontSz, hp, WIDTH, wp} from '../../../utils';
import {Text} from './Text';
import {COLORS} from '../../constants/theme';
import {globalStyles} from '../../../utils/globalStyles';
import FastImage, {Source} from 'react-native-fast-image';
import {
  addToPlate,
  selectPlateItemsWithId,
} from '../../services/features/traySlice';
import {useAppDispatch, useAppSelector} from '../../services/hooks';
import {InfoIcon} from '../../assets/images/svg';

export const ITEM_HEIGHT = wp(230);
export const ITEM_WIDTH = WIDTH * 0.93;

export interface ItemModel {
  id: string;
  name: string;
  showInfo: boolean;
  amount: number;
  image:
    | Source
    | ImageRequireSource
    | ImageSourcePropType
    | AnimatedNode<ImageSourcePropType | undefined>;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  onPressInfo: ((event: GestureResponderEvent) => void) | undefined;
}

const FoodItemCard = (props: {
  id: string;
  name: string;
  showInfo: boolean;
  image:
    | Source
    | ImageRequireSource
    | ImageSourcePropType
    | AnimatedNode<ImageSourcePropType | undefined>;
  amount: number;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  onPressInfo: ((event: GestureResponderEvent) => void) | undefined;
}) => {
  const {
    id,
    name,
    showInfo = true,
    image,
    amount,
    onPress,
    onPressInfo,
  } = props;

  // function to add to tray
  const dispatch = useAppDispatch();
  const items = useAppSelector(state => selectPlateItemsWithId(state, id));

  console.log('==========', items);

  const addItemToPlate = () => {
    dispatch(
      addToPlate({
        id,
        name,
        amount,
        image,
      }),
    );
  };

  return (
    <View
      style={[
        globalStyles.rowBetween,
        {marginVertical: hp(7.5), height: wp(220), width: WIDTH * 0.93},
      ]}>
      <Pressable style={[globalStyles.rowStart]} onPress={onPress}>
        <View
          style={{
            height: wp(210),
            width: wp(265),
            borderRadius: 8,
            marginRight: wp(30),
          }}>
          <FastImage
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 8,
            }}
            source={image} //require('../../../assets/images/ofada.png')
            resizeMode={FastImage.resizeMode.cover}
          />
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Text
              style={{
                fontWeight: '500',
                paddingVertical: hp(3.5),
                paddingRight: hp(3.5),
              }}
              fontSize={fontSz(17)}
              text={`${name}`}
              color={COLORS.textDark}
            />
            {showInfo && (
              <Pressable onPress={onPressInfo}>
                <InfoIcon />
              </Pressable>
            )}
          </View>
          <Text
            style={{fontWeight: '400', paddingVertical: hp(3.5)}}
            fontSize={fontSz(14)}
            text={`${'\u20A6'} ${String(amount)}${'/portion'}`}
            color={COLORS.vendorCategory}
          />
        </View>
      </Pressable>
      <View
        style={[
          globalStyles.rowBetween,
          {
            width: '25%',
          },
        ]}>
        <Pressable
          style={{
            backgroundColor: COLORS.borderColor,
            padding: hp(2.5),
            borderRadius: 4,
          }}
          onPress={addItemToPlate}>
          <Image
            style={{
              height: 18,
              width: 18,
            }}
            source={require('../../assets/icons/add.png')}
          />
        </Pressable>
        <View>
          <Text
            style={{
              fontWeight: '400',
              paddingVertical: hp(5),
              paddingHorizontal: wp(25),
            }}
            fontSize={fontSz(17.5)}
            text={`${String(items.length)}`}
            color={COLORS.textDark}
          />
        </View>
        <Pressable
          style={{
            backgroundColor: COLORS.borderColor,
            padding: hp(2.5),
            borderRadius: 4,
          }}
          onPress={() => {}}>
          <Image
            style={{
              height: 18,
              width: 18,
            }}
            source={require('../../assets/icons/remove.png')}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default FoodItemCard;

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
import {COLORS, SIZES} from '../../constants/theme';
import {globalStyles} from '../../../utils/globalStyles';
import {
  addToPlate,
  selectPlateItemsWithId,
} from '../../services/features/traySlice';
import {useAppDispatch, useAppSelector} from '../../services/hooks';
import {InfoIcon} from '../../assets/images/svg';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  PanGestureHandlerProps,
} from 'react-native-gesture-handler';

export const ITEM_HEIGHT = wp(220);
export const ITEM_WIDTH = WIDTH * 0.83;

const LIST_ITEM_HEIGHT = wp(220);
const LIST_ITEM_WIDTH = WIDTH * 0.83;
const TRANSLATE_X_THRESHOLD = -LIST_ITEM_WIDTH * 0.15;

interface FoodItemProps
  extends Pick<PanGestureHandlerProps, 'simultaneousHandlers'> {
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
  onPressDelete: ((event: GestureResponderEvent) => void) | undefined;
}

const FoodItemCardNoImage = (props: FoodItemProps) => {
  const {
    id,
    name,
    showInfo = true,
    image,
    amount,
    onPress,
    onPressInfo,
    onPressDelete,
    simultaneousHandlers,
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

  const translateX = useSharedValue(0);
  const itemHeight = useSharedValue(LIST_ITEM_HEIGHT);
  const marginVertical = useSharedValue(10);
  const opacity = useSharedValue(1);

  const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onActive: event => {
      translateX.value = event.translationX;
    },
    onEnd: () => {
      const shouldBeDismissed = translateX.value < TRANSLATE_X_THRESHOLD;
      if (shouldBeDismissed) {
        // translateX.value = withTiming(-SCREEN_WIDTH);
        // itemHeight.value = withTiming(0);
        // marginVertical.value = withTiming(0);
        // opacity.value = withTiming(0, undefined, (isFinished) => {
        //   if (isFinished && onDismiss) {
        //     runOnJS(onDismiss)(task);
        //   }
        // });
      } else {
        translateX.value = withTiming(0);
      }
    },
  });

  const rStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
    ],
  }));

  const rIconContainerStyle = useAnimatedStyle(() => {
    const opacity = withTiming(
      translateX.value < TRANSLATE_X_THRESHOLD ? 1 : 0,
    );
    return {opacity};
  });

  const rTaskContainerStyle = useAnimatedStyle(() => {
    return {
      height: itemHeight.value,
      marginVertical: marginVertical.value,
      opacity: opacity.value,
    };
  });

  return (
    <Animated.View style={[styles.taskContainer, rTaskContainerStyle]}>
      <Animated.View style={[styles.iconContainer, rIconContainerStyle]}>
        <Pressable onPress={onPressDelete}>
          <Image
            style={{
              height: 25,
              width: 25,
              tintColor: COLORS.white,
            }}
            source={require('../../assets/icons/delete.png')}
          />
        </Pressable>
      </Animated.View>
      <PanGestureHandler
        simultaneousHandlers={simultaneousHandlers}
        onGestureEvent={panGesture}>
        <Animated.View
          style={[
            globalStyles.rowBetween,
            {
              marginVertical: hp(5),
              height: LIST_ITEM_HEIGHT,
              width: LIST_ITEM_WIDTH,
              // backgroundColor: COLORS.primaryOrange,
            },
            rStyle,
          ]}>
          <Pressable style={[globalStyles.rowStart]} onPress={onPress}>
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
        </Animated.View>
      </PanGestureHandler>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    alignItems: 'center',
  },
  iconContainer: {
    height: LIST_ITEM_HEIGHT,
    width: LIST_ITEM_WIDTH * 0.25,
    backgroundColor: COLORS.red,
    position: 'absolute',
    right: '2%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(5),
    borderBottomEndRadius: 4,
    borderTopEndRadius: 4,
  },
});

export default FoodItemCardNoImage;

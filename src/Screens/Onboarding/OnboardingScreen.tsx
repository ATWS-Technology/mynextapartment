/* eslint-disable react-native/no-inline-styles */
import {Dimensions, StyleSheet, View, FlatList, Animated} from 'react-native';
import slides from '../../asset/svg/slides';
import React, {useRef, useState} from 'react';
import {rootStackParamList} from '../../../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {PrimaryButton} from '../../components/button';
import {COLORS, FONTS, SIZES} from '../../theme/theme';
import OnboardingItems from './OnboardingItems';
import {useNavigation} from '@react-navigation/native';
import Paginator from './Paginator';
import NextButton from './NextButton';

export type NavigationProp = NativeStackNavigationProp<
  rootStackParamList,
  'Onboarding'
>;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

interface MyProps {
  navigation: NavigationProp;
  viewableItems: number;
}

const OnBoardingScreen: React.FC<MyProps> = ({navigation}) => {
  const [currentViewIndex, setCurrentViewIndex] = useState(0);
  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentViewIndex(viewableItems[0].index);
  }).current;
  const slidesRef = useRef<FlatList>(null);
  // const viewconfig = useRef({
  //   viewAreaCoveragepercentThreshold: 50,
  // }).current;

  const scrollX = useRef(new Animated.Value(0)).current;

  const scrollTo = () => {
    // console.log('currentViewIndex', currentViewIndex, slides.length);
    if (currentViewIndex < slides.length - 1) {
      slidesRef.current.scrollToIndex({index: currentViewIndex + 1});
    }
  };
  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    slidesRef?.current.scrollToIndex({index: lastSlideIndex});
    setCurrentViewIndex(lastSlideIndex);
  };
  return (
    <View style={styles.container}>
      <View style={{flex: 3}}>
        <FlatList
          data={slides}
          ref={slidesRef}
          renderItem={({item}) => <OnboardingItems item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={item => item.id}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          onViewableItemsChanged={viewableItemsChanged}
          // viewabilityConfig={viewconfig}
          scrollEventThrottle={32}
        />
        <Paginator data={slides} scrollX={scrollX} />
        <NextButton
          scrollTo={scrollTo}
          percentage={(currentViewIndex + 1) * (100 / slides.length)}
          navigation={navigation}
          skip={skip}
          currentViewIndex={currentViewIndex}
        />
      </View>
    </View>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: windowWidth,
    height: windowHeight,
  },
  buttonGoogle: {
    marginTop: 40,
    borderColor: COLORS.black,
    borderWidth: 1,
    backgroundColor: COLORS.white,
  },
  containerB: {
    width: 318,
    height: 237,
    marginTop: -43,
  },
  textContainer: {
    alignSelf: 'center',
    width: 318,
    marginTop: 30,
    justifyContent: 'center',
  },
  text1: {
    textAlign: 'center',
    fontSize: 24,
    color: COLORS.primary,
  },
  text2: {
    textAlign: 'center',
    font: FONTS.fontFamilyBlack,
    // fontSize: FONTS.fontFamilyBlack,
    color: COLORS.placeholder,
  },
  button: {
    marginTop: 40,
    color: COLORS.placeholder,
  },
});

import {Dimensions, StyleSheet, View, FlatList, Animated} from 'react-native';
import slides from '../../asset/svg/slides';
import React, {useRef, useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {rootStackParamList} from '../../../App';
import {COLORS} from '../../theme/theme';
import OnboardingItems from './OnboardingItems';
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

  const scrollX = useRef(new Animated.Value(0)).current;

  const scrollTo = () => {
    if (currentViewIndex < slides.length - 1) {
      slidesRef?.current.scrollToIndex({index: currentViewIndex + 1});
    }
  };
  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    slidesRef?.current.scrollToIndex({index: lastSlideIndex});
    setCurrentViewIndex(lastSlideIndex);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        ref={slidesRef}
        renderItem={({item}) => (
          <View style={styles.slide}>
            <OnboardingItems item={item} />
          </View>
        )}
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
        scrollEventThrottle={32}
      />
      <View style={styles.bottomContainer}>
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
    flex: 1,
    backgroundColor: COLORS.white,
  },
  slide: {
    width: windowWidth,
    height: windowHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 50,
    paddingVertical: 20,
    justifyContent: 'center',
    gap: 20,
  },
});

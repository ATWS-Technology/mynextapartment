import {
  StyleSheet,
  View,
  Image,
  useWindowDimensions,
  Text,
  Animated,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {COLORS, FONTS, SIZES} from '../../theme/theme';
import Paginator from './Paginator';
import slides from '../../asset/svg/slides';
import NextButton from './NextButton';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {rootStackParamList} from '../../../App';

export type NavigationProp = NativeStackNavigationProp<
  rootStackParamList,
  'Onboarding'
>;

interface MyProps {
  navigation: NavigationProp;
  viewableItems: number;
}

const OnboardingItems: React.FC<MyProps> = ({
  item,
  navigation,
  slideRef,
}: any) => {
  const {width} = useWindowDimensions();
  const slidesRef = useRef<FlatList>(null);

  const [currentViewIndex, setCurrentViewIndex] = useState(0);

  const scrollX = useRef(new Animated.Value(0)).current;

  const scrollTo = () => {
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
    <View style={[styles.container, {width}]}>
      <Image
        source={item.image}
        style={[styles.image, {width, resizeMode: 'cover'}]}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        {/* <Text style={styles.description}>{item.description}</Text> */}
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
    position: 'relative',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    position: 'absolute',
    width: '100%',
  },
  title: {
    fontWeight: '800',
    fontSize: 30,
    fontFamily: FONTS.fontFamilyBlack,
    textAlign: 'center',
    // color: COLORS.primary,
    color: 'white',
    paddingHorizontal: 15,
  },
  description: {
    fontWeight: '400',
    fontSize: 16,
    fontFamily: FONTS.fontFamilyBlack,
    textAlign: 'center',
    color: 'white',
    marginTop: 5, // Add margin top for better separation between title and description
    paddingHorizontal: 20, // Add horizontal padding for better readability
  },
});

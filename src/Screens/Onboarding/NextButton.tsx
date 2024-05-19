/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Animated,
  Image,
  Text,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import Svg, {G, Circle} from 'react-native-svg';
import {COLORS} from '../../theme/theme';
import slides from '../../asset/svg/slides';

interface MyComponentProps {
  percentage: number;
  scrollTo: () => void;
  navigation: NavigationProp;
  skip: () => void;
  currentViewIndex: number;
}
const NextButton: React.FC<MyComponentProps> = ({
  percentage,
  scrollTo,
  navigation,
  skip,
  currentViewIndex,
}) => {
  const size = 60;
  const strokeWidth = 4;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;

  const circumference = 2 * Math.PI * radius;

  const progressAnimation = useRef(new Animated.Value(0)).current;
  const progressRef = useRef(null);

  const animation = (toValue: number) => {
    return Animated.timing(progressAnimation, {
      toValue,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animation(percentage);
  }, [percentage]);

  useEffect(() => {
    progressAnimation.addListener(
      value => {
        const strokeDashoffset =
          circumference - (circumference * value.value) / 100;
        if (progressRef?.current) {
          progressRef.current.setNativeProps({
            strokeDashoffset,
          });
        }
      },
      [percentage],
    );
    return () => {
      progressAnimation.removeAllListeners();
    };
  }, []);

  return (
    <>
      {currentViewIndex === slides.length - 1 ? (
        <View style={styles.container}>
          <TouchableOpacity
            style={[styles.btn, {width: 'auto'}]}
            onPress={() => navigation.navigate('Login')}>
            <Text style={{color: COLORS.placeholder}}>GET STARTED</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.container}>
          <View style={{position: 'relative'}}>
            <Svg width={size} height={size} margin={2}>
              <G rotation="-90" origin={center}>
                <Circle
                  stroke="#f3f3f3"
                  cx={center}
                  cy={center}
                  r={radius}
                  strokeWidth={strokeWidth}
                />
                <Circle
                  stroke="#0a6621"
                  ref={progressRef}
                  cx={center}
                  cy={center}
                  r={radius}
                  strokeWidth={strokeWidth}
                  strokeDasharray={circumference}
                />
              </G>
            </Svg>

            <TouchableOpacity
              onPress={scrollTo}
              style={styles.button}
              activeOpacity={1}>
              <Image
                source={require('../../../src/asset/images/next.png')}
                style={{
                  width: 20,
                  height: 20,
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.btn} onPress={skip}>
            <Text style={{color: COLORS.placeholder}}>Skip</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default NextButton;

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    gap: 50,
  },
  button: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  btn: {
    backgroundColor: 'white',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    shadowOffset: {width: 4, height: 4},
    shadowColor: 'black',
    shadowOpacity: 0.5,
    elevation: 5,
    width: 80,
    height: 40,
  },
});

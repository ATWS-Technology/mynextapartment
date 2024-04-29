import {
  Dimensions,
  // StatusBar,
  // useColorScheme,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  // View,
} from 'react-native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {rootStackParamList} from '../../../App';
import LottieView from 'lottie-react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export type NavigationProp = NativeStackNavigationProp<
  rootStackParamList,
  'Splash'
>;

const SplashScreen = ({navigation}: any) => {
  setTimeout(() => {
    navigation.replace('Onboarding');
  }, 2000);
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <LottieView
        source={require('../../asset/routine.json')}
        style={styles.imageContainer}
        autoPlay
        loop={false}
        resizeMode="cover"
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
  },
});

/* eslint-disable react-native/no-inline-styles */
import {
  Dimensions,
  // Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {rootStackParamList} from '../../../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {COLORS, FONTS, SIZES} from '../../theme/theme';
import {Button} from '../../components/common/Button';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export type NavigationProp = NativeStackNavigationProp<
  rootStackParamList,
  'SignUp'
>;

const SignUpScreen = () => {
  return (
    <SafeAreaView style={styles.containerMain}>
      <View
        style={{
          flexDirection: 'row',
          width: windowWidth,
          height: windowHeight / 10,
        }}>
        <Image
          source={require('../../asset/onBoarding/ellipse1.png')}
          alt="ellipse"
          style={{height: 178, width: 178, left: -100, top: -90}}
        />
        <Image
          source={require('../../asset/onBoarding/ellipse1.png')}
          alt="ellipse"
          style={{height: 68, width: 68, left: -80}}
        />
      </View>
      <Image
        source={require('../../asset/onBoarding/onboarding.png')}
        resizeMode="contain"
        style={styles.container}
      />
      <Button
        text={
          <>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: COLORS.white,
                  fontFamily: FONTS.fontFamilyRegular,
                  fontSize: SIZES.font,
                }}>
                Login
              </Text>
            </View>
          </>
        }
        style={styles.button}
        disabled={false}
        isLoading={false}
      />
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  containerMain: {
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1,
  },

  container: {
    width: 318,
    height: 237,
    marginTop: 2,
    // backgroundColor: 'blue',
  },
  button: {
    marginTop: 40,
    color: COLORS.placeholder,
  },
});

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {rootStackParamList} from '../../../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type NavigationProp = NativeStackNavigationProp<
  rootStackParamList,
  'OTPVerify'
>;

const OtpVerifyScreen = () => {
  return (
    <View style={styles.container}>
      <Text>OtpVerify</Text>
    </View>
  );
};

export default OtpVerifyScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
});

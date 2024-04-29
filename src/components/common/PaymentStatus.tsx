import React, {createContext} from 'react';
import {View, Text, StyleSheet, GestureResponderEvent} from 'react-native';
import LottieView from 'lottie-react-native';
import {hp, WIDTH} from '../../../utils';
import {COLORS} from '../../constants/theme';
import {Button} from './Button';
import {ErrorBg, PendingBg, SuccessBg} from '../../assets/images/svg';

export const PaymentStatus = (props: {
  title: string | undefined;
  text: string | undefined;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  onPressBack: ((event: GestureResponderEvent) => void) | undefined;
  label: string;
  status: 'success' | 'failed' | 'pending' | string;
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={{marginTop: -50}}>
          {props.status === 'success' ? (
            <SuccessBg />
          ) : props.status === 'pending' ? (
            <PendingBg />
          ) : props.status === 'failed' ? (
            <ErrorBg />
          ) : (
            <SuccessBg />
          )}
        </View>

        <View>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.text}>{props.text}</Text>
        </View>

        <Button
          title={props.label}
          style={{
            backgroundColor: COLORS.primaryYellow,
            marginTop: hp(40),
          }}
          textStyle={{
            fontWeight: '700',
            color: COLORS.primaryButtonText,
          }}
          onPress={props.onPress}
          prependComponent={undefined}
          appendComponent={undefined}
        />
        <Button
          title={'Done'}
          style={{
            backgroundColor: 'rgba(238, 236, 236, 1)',
            marginTop: hp(10),
          }}
          textStyle={{
            fontWeight: '700',
            color: COLORS.primaryButtonText,
          }}
          onPress={props.onPressBack}
          prependComponent={undefined}
          appendComponent={undefined}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
  },
  card: {
    paddingVertical: 100,
    backgroundColor: COLORS.white,
    marginHorizontal: 15,
    padding: 20,
    borderRadius: 5,
    elevation: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  text: {
    marginVertical: 10,
    color: COLORS.authLayoutSubtitle,
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    fontFamily: 'Karla-Medium',
  },
  title: {
    marginTop: 20,
    color: COLORS.textDark,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: 'Karla-Medium',
  },
});

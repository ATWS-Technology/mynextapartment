import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  View,
  Text as BaseText,
} from 'react-native';
import {fontSz, hp, wp} from '../../../utils';
import {globalStyles} from '../../../utils/globalStyles';
import {Text} from './Text';
import {COLORS} from '../../constants/theme';
import {Button} from './Button';

const OrdersListItem = (props: {
  id: string;
  status: string | undefined | null;
  vendor: string;
  amount: number;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  type: 'pending' | 'delivered' | string | undefined;
}) => {
  const {id, status, vendor, amount, onPress, type} = props;
  return (
    <View style={[globalStyles.colBetween, styles.container]}>
      <View style={globalStyles.rowBetween}>
        <Text
          style={{fontWeight: '400'}}
          fontSize={fontSz(17.5)}
          text={id}
          color={COLORS.lightCreateOne}
        />
        {type === 'pending' ? (
          <BaseText style={[styles.statusText]}>
            {'Status : '}
            <BaseText
              style={{
                color:
                  status === 'Awaiting'
                    ? COLORS.textDark
                    : status === 'In-transit'
                    ? COLORS.primaryYellow
                    : COLORS.primaryOrange,
              }}>
              {status}
            </BaseText>
          </BaseText>
        ) : (
          <Text
            style={{fontWeight: '500'}}
            fontSize={fontSz(15)}
            text={`${'\u20A6'} ${String(amount)}`}
          />
        )}
      </View>
      <View style={globalStyles.rowBetween}>
        <Text
          style={{fontWeight: '400'}}
          fontSize={fontSz(18.5)}
          text={vendor}
        />
        {type === 'pending' ? (
          <Text
            style={{fontWeight: '500'}}
            fontSize={fontSz(17)}
            text={`${'\u20A6'} ${String(amount)}`}
          />
        ) : (
          <Button
            title="Re-order"
            outlined={true}
            textStyle={{
              fontWeight: '700',
            }}
            onPress={() => {
              console.log('');
            }}
            style={{
              borderRadius: hp(6),
              borderWidth: 0.75,
              width: '25%',
              height: hp(25),
              marginTop: hp(0),
            }}
            prependComponent={undefined}
            appendComponent={undefined}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(20),
    paddingVertical: hp(7.5),
    marginHorizontal: 10,
    marginVertical: hp(7.5),
    backgroundColor: COLORS.white,
    height: hp(70),
    borderRadius: 9,
  },
  statusText: {
    color: COLORS.lightCreateOne,
    fontSize: fontSz(15),
    fontWeight: '400',
    fontFamily: 'Karla-Regular',
  },
});

export default OrdersListItem;

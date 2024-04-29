import React from 'react';
import {GestureResponderEvent, Pressable, StyleSheet, View} from 'react-native';
import {fontSz, hp, wp} from '../../../utils';
import {globalStyles} from '../../../utils/globalStyles';
import {EditIcon, LocationIcon} from '../../assets/images/svg';
import {COLORS} from '../../constants/theme';
import {Text} from './Text';

const AddressCard = (props: {
  label: string;
  address: string;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  editable: boolean;
}) => {
  const {onPress, label, address, editable} = props;
  return (
    <View style={styles.container} key={`${editable} ${label}`}>
      <Text
        style={{fontWeight: '400', paddingVertical: hp(3.5)}}
        fontSize={fontSz(13)}
        text={`${label}`}
        color={COLORS.lightCreateOne}
      />
      <View style={[globalStyles.rowBetween, {marginTop: hp(9.5)}]}>
        <View style={[globalStyles.rowStart]}>
          <LocationIcon />
          <Text
            style={{fontWeight: '400', paddingLeft: wp(17.5)}}
            fontSize={fontSz(15)}
            text={`${address}`}
            color={COLORS.textDark}
          />
        </View>
        {editable ? (
          <Pressable onPress={onPress}>
            <EditIcon />
          </Pressable>
        ) : (
          <View />
        )}
      </View>
    </View>
  );
};

export default AddressCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    paddingHorizontal: wp(30),
    paddingVertical: hp(7.5),
    marginVertical: hp(7.5),
  },
});

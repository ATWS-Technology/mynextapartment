import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  GestureResponderEvent,
  Image,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import {fontSz, hp, wp} from '../../../utils';
import {globalStyles} from '../../../utils/globalStyles';
import {Text} from './Text';
import {COLORS} from '../../constants/theme';

const Header = (props: {
  text: string;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  appendIcon: boolean;
  prependIcon: boolean;
}) => {
  const navigation = useNavigation();
  const {text, onPress, appendIcon, prependIcon} = props;
  return (
    <View
      style={[
        globalStyles.rowBetween,
        styles.centered,
        !appendIcon && !prependIcon
          ? {
              marginVertical: hp(10),
            }
          : {
              marginVertical: hp(5),
            },
      ]}>
      <View style={[globalStyles.rowBetween]}>
        {prependIcon && (
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              style={{
                height: 24,
                width: 24,
                transform: [{rotate: '90deg'}],
                marginRight: wp(15),
              }}
              source={require('../../assets/icons/expand_more.png')}
            />
          </Pressable>
        )}
        <Text style={styles.headerText} fontSize={fontSz(17.5)} text={text} />
      </View>
      {!appendIcon ? (
        <View />
      ) : (
        <Pressable onPress={onPress}>
          <Image
            style={{
              height: 24,
              width: 24,
            }}
            source={require('../../assets/icons/delete.png')}
          />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontWeight: '700',
  },
  centered: {
    alignItems: 'center',
    paddingHorizontal: wp(40),
    backgroundColor: COLORS.transparent,
  },
  text: {
    marginRight: hp(5),
    fontSize: hp(15),
  },
});

export default Header;

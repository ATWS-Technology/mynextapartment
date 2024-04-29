import React from 'react';
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

const HeaderTitle = (props: {
  text: string;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  appendIcon: boolean;
  icon: JSX.Element;
}) => {
  const {text, onPress, appendIcon, icon} = props;
  return (
    <View style={[globalStyles.rowBetween, styles.centered]}>
      <View style={[globalStyles.rowStart]}>
        <Text style={styles.headerText} fontSize={fontSz(18)} text={text} />
        {!!icon && icon}
      </View>
      {!appendIcon ? (
        <View />
      ) : (
        <Pressable style={[globalStyles.rowCenter]} onPress={onPress}>
          <Image
            style={{
              height: 24,
              width: 24,
              transform: [{rotate: '270deg'}],
            }}
            source={require('../../assets/icons/expand_more.png')}
          />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '60%',
    alignItems: 'flex-end',
  },
  headerText: {
    fontWeight: '500',
    paddingRight: wp(10),
  },
  centered: {
    alignItems: 'center',
    marginVertical: hp(10),
    paddingHorizontal: wp(40),
  },
  text: {
    marginRight: hp(5),
    fontSize: hp(15),
  },
});

export default HeaderTitle;

import React, {useState} from 'react';
import {
  GestureResponderEvent,
  Image,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import {fontSz, hp, WIDTH, wp} from '../../../utils';
import {globalStyles} from '../../../utils/globalStyles';
import {
  DeleteIcon,
  EditIcon,
  LocationIcon,
  MoreVertIcon,
} from '../../assets/images/svg';
import {COLORS} from '../../constants/theme';
import {Text} from './Text';

const ProfileAddressCard = (props: {
  label: string;
  address: string;
  onPressEdit: ((event: GestureResponderEvent) => void) | undefined;
  onPressDelete: ((event: GestureResponderEvent) => void) | undefined;
  icon: JSX.Element;
}) => {
  const {onPressEdit, onPressDelete, label, address, icon} = props;
  const [modal, setModal] = useState(false);

  return (
    <>
      <Pressable
        onPress={() => setModal(false)}
        style={[globalStyles.rowBetween, styles.container]}
        key={`${address} ${label}`}>
        <View style={[globalStyles.rowStart]}>
          {icon && icon}
          <View style={[globalStyles.rowBetween]}>
            <View
              style={[
                globalStyles.colStart,
                {
                  paddingLeft: wp(25),
                },
              ]}>
              <Text
                style={{fontWeight: '500', paddingVertical: hp(1.5)}}
                fontSize={fontSz(15)}
                text={`${label}`}
              />
              <Text
                style={{fontWeight: '400', paddingVertical: hp(1.5)}}
                fontSize={fontSz(13)}
                text={`${address}`}
                color={COLORS.lightCreateOne}
              />
            </View>
          </View>
        </View>
        <Pressable onPress={() => setModal(!modal)}>
          <MoreVertIcon />
        </Pressable>
        <View style={styles.modalUpperContainer}>
          {modal && (
            <View style={styles.modalShadow}>
              <Pressable
                onPress={() => {
                  setModal(!modal);
                }}
                style={styles.modalOptions}>
                <Text
                  style={{fontWeight: '400', paddingVertical: hp(5)}}
                  fontSize={fontSz(14)}
                  text={`${'Edit'}`}
                  color={COLORS.lightCreateOne}
                />
                <EditIcon />
              </Pressable>
              <Pressable
                style={styles.modalOptions}
                onPress={() => {
                  setModal(!modal);
                }}>
                <Text
                  style={{fontWeight: '400', paddingVertical: hp(5)}}
                  fontSize={fontSz(14)}
                  text={`${'Delete'}`}
                  color={COLORS.lightCreateOne}
                />
                <DeleteIcon />
              </Pressable>
            </View>
          )}
        </View>
      </Pressable>
    </>
  );
};

export default ProfileAddressCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.transparent,
    paddingHorizontal: wp(30),
    paddingVertical: hp(17.5),
    borderBottomColor: COLORS.filterModalColor,
    borderBottomWidth: 1,
  },
  modalUpperContainer: {
    marginVertical: hp(10),
    marginHorizontal: hp(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: hp(30),
    zIndex: 999,
  },
  modalShadow: {
    left: 195,
    width: WIDTH * 0.3,
    paddingHorizontal: wp(20),
    paddingVertical: hp(10),
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalOptions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: hp(1.5),
  },
});

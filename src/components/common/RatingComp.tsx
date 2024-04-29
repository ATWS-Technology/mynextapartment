import React from 'react';
import {Pressable, StyleSheet, TextInput, View} from 'react-native';
import {fontSz, hp, wp} from '../../../utils';
import {globalStyles} from '../../../utils/globalStyles';
import {
  CloseAllIcon,
  CommentIcon,
  Emoji0,
  Emoji1,
  Emoji2,
  Emoji3,
  Emoji4,
  Emoji5,
  StarRate,
  StarRateFilled,
} from '../../assets/images/svg';
import {COLORS, SIZES} from '../../constants/theme';
import {Button} from './Button';
import {Text} from './Text';

const RatingComp = (props: {
  label: string;
  subLabel: string;
  comment: string;
  setComment: React.Dispatch<React.SetStateAction<string>>;
  rate: number;
  setRate: React.Dispatch<React.SetStateAction<number>>;
  totalRate: number;
  setTotalRate: React.Dispatch<React.SetStateAction<number>>;
  goBack: any;
}) => {
  const {
    label,
    subLabel,
    comment,
    setComment,
    rate,
    setRate,
    totalRate,
    setTotalRate,
    goBack,
  } = props;

  const onChange = (text: React.SetStateAction<string>) => {
    setComment(text);
  };
  function ArraySize(size: number) {
    return Array(size).fill('');
  }
  return (
    <>
      <View style={[styles.wrapper]}>
        <Pressable
          onPress={() => {
            goBack();
          }}
          style={{
            marginHorizontal: wp(30),
            width: wp(40),
            height: wp(40),
            justifyContent: 'center',
            alignSelf: 'flex-end',
          }}>
          <CloseAllIcon />
        </Pressable>
        <Text
          style={{
            fontWeight: '700',
            paddingVertical: hp(15),
            width: '70%',
            alignSelf: 'center',
            textAlign: 'center',
          }}
          fontSize={fontSz(22)}
          text={`${label}`}
        />
        <Text
          style={{
            fontWeight: '400',
            paddingLeft: wp(7.5),
            alignSelf: 'center',
            textAlign: 'center',
            width: '80%',
          }}
          fontSize={fontSz(15)}
          text={`${subLabel}`}
          color={COLORS.authLayoutSubtitle}
        />
        {/* rate emoji */}
        <View style={styles.emojiContainer}>
          {rate === 1 ? (
            <Emoji1 />
          ) : rate === 2 ? (
            <Emoji2 />
          ) : rate === 3 ? (
            <Emoji3 />
          ) : rate === 4 ? (
            <Emoji4 />
          ) : rate === 5 ? (
            <Emoji5 />
          ) : (
            <Emoji0 />
          )}
          <View
            style={[
              globalStyles.rowCenter,
              {
                marginTop: hp(20),
              },
            ]}>
            {ArraySize(rate).map((item, index) => {
              return (
                <Pressable
                  key={index}
                  style={styles.emoji}
                  onPress={() => {
                    setRate(ArraySize(rate)?.length - 1);
                  }}>
                  <StarRateFilled />
                </Pressable>
              );
            })}
            {ArraySize(totalRate - rate).map((item, index) => {
              return (
                <Pressable
                  key={index}
                  style={styles.emoji}
                  onPress={() => {
                    setRate(ArraySize(rate)?.length + 1);
                  }}>
                  <StarRate />
                </Pressable>
              );
            })}
          </View>
          <View
            style={[
              globalStyles.rowBetween,
              {
                width: '65%',
                marginTop: hp(7.5),
              },
            ]}>
            <Text
              style={{
                fontWeight: '400',
                textAlign: 'center',
              }}
              fontSize={fontSz(15)}
              text={`${'Bad'}`}
              color={COLORS.disabledButtonText}
            />
            <Text
              style={{
                fontWeight: '400',
                textAlign: 'center',
              }}
              fontSize={fontSz(15)}
              text={`${'Love it'}`}
              color={COLORS.authLayoutSubtitle}
            />
          </View>
        </View>
      </View>
      <View style={[styles.wrapper]}>
        <View style={globalStyles.rowStart}>
          <CommentIcon />
          <Text
            style={{
              fontWeight: '400',
              paddingHorizontal: wp(20),
            }}
            fontSize={fontSz(15)}
            text={`${'Leave a review (Optional)'}`}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            height: hp(75),
            paddingHorizontal: SIZES.h4,
            marginVertical: hp(20),
            paddingVertical: hp(5),
            borderRadius: SIZES.base / 2,
            borderColor: COLORS.createOne,
            borderWidth: fontSz(1),
            backgroundColor: 'rgba(179, 179, 179, 0.05)',
          }}>
          <TextInput
            style={{
              flex: 1,
              color: COLORS.black,
            }}
            value={comment}
            placeholder={'Anything else you would like to let us know?'}
            placeholderTextColor={COLORS.deepAsh}
            onChangeText={text => {
              onChange(text);
            }}
            keyboardType={'default'}
            editable={true}
            multiline={true}
            numberOfLines={4}
          />
        </View>
        <Button
          title="Submit feedback"
          style={{
            backgroundColor: COLORS.primaryYellow,
            marginVertical: hp(10),
          }}
          textStyle={{
            fontWeight: '700',
            color: COLORS.primaryButtonText,
          }}
          onPress={() => {
            // navigate('OrderSummary');
          }}
          prependComponent={undefined}
          appendComponent={undefined}
        />
        <Text
          style={{
            fontWeight: '400',
            paddingVertical: hp(7.5),
            textAlign: 'center',
          }}
          fontSize={fontSz(15)}
          text={`${'I’ll give feedback later'}`}
          color={COLORS.createOneYellow}
        />
      </View>
    </>
  );
};

export default RatingComp;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: wp(40),
  },
  emojiContainer: {
    marginTop: hp(20),
    alignItems: 'center',
  },
  emoji: {
    marginHorizontal: wp(10),
    alignSelf: 'center',
    alignItems: 'center',
  },
});

import {StyleSheet} from 'react-native';
// import {COLORS} from '../src/constants/theme';
import {wp, hp} from './constants';
import {COLORS} from '../theme/theme';

export const globalStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.primaryBg,
  },
  wrapper_center: {
    flex: 1,
    backgroundColor: COLORS.primaryBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper_align: {
    flex: 1,
    backgroundColor: COLORS.primaryBg,
    alignItems: 'center',
  },
  container: {
    paddingHorizontal: wp(10),
    flexGrow: 1,
  },
  containerLess: {
    paddingHorizontal: wp(25),
    flexGrow: 1,
  },
  containerPad: {
    paddingHorizontal: wp(30),
  },
  itemContainer: {
    paddingHorizontal: wp(15),
  },
  scroll: {
    paddingVertical: hp(25),
  },
  colCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  colStart: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  colBetween: {
    justifyContent: 'space-between',
  },
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowBetweenNoCenter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowAround: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  rowStart: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  rowEnd: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  undeline: {
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
  },
  authTitle: {
    paddingTop: hp(80),
  },
  footerBtn: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: hp(15),
    paddingHorizontal: wp(15),
  },
  timesIcon: {
    position: 'absolute',
    right: wp(15),
    zIndex: 10,
  },
  marginBottom: {
    marginBottom: 100,
  },
  upperContainer: {
    backgroundColor: COLORS.primaryBg,
    minHeight: hp(105),
    borderRadius: hp(20),
    paddingHorizontal: wp(25),
    paddingTop: hp(15),
  },
  upComingContainer: {
    backgroundColor: '#4370D1',
    minHeight: wp(130),
    borderRadius: hp(20),
    marginVertical: hp(15),
    padding: wp(20),
  },
  homeTiles: {
    backgroundColor: '#4370D1',
    height: wp(80),
    width: wp(150),
    marginRight: hp(10),
    marginVertical: hp(10),
    borderRadius: hp(15),
    alignItems: 'center',
    justifyContent: 'center',
    padding: hp(5),
    overflow: 'hidden',
  },
  summaryCard: {
    backgroundColor: '#4370D1',
    height: wp(100),
    width: wp(160),
    marginHorizontal: hp(10),
    marginVertical: hp(10),
    borderRadius: hp(5),
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    padding: hp(10),
    overflow: 'hidden',
  },
  docImg: {
    flex: 1,
    borderRadius: hp(10),
  },
  docImgBox: {
    height: hp(40),
    width: hp(40),
    borderRadius: hp(10),
  },
  width80: {
    width: wp(200),
  },
  separator: {
    backgroundColor: COLORS.borderColor,
    height: 1,
    marginVertical: hp(5),
  },
  verticalSpacing: {
    marginVertical: hp(10),
  },
  floatingButton: {
    position: 'absolute',
    width: hp(60),
    height: hp(60),
    borderRadius: hp(30),
    backgroundColor: '#56AF69',
    bottom: hp(20),
    right: hp(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  planCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    borderWidth: 0.7,
    borderColor: '#DADADA',
    borderRadius: hp(8),
    padding: hp(10),
    marginVertical: hp(16),
    minHeight: hp(100),
    marginHorizontal: wp(10),
  },
  AccessControlCard: {
    width: '95%',
    height: hp(110),
    borderRadius: hp(10),
    alignSelf: 'center',
    marginTop: hp(10),
    backgroundColor: COLORS.primaryBg,
    alignItems: 'flex-start',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  AccessControlCardImg: {
    width: hp(110),
    height: hp(110),
  },
  AccessControlCardDetails: {
    marginLeft: hp(10),
    marginTop: hp(10),
    alignSelf: 'flex-start',
  },
  shadowWar: {
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOpacity: 0.7,
    elevation: 6,
    shadowRadius: 3,
    shadowOffset: {width: 0, height: 0},
  },
  dayCard: {
    // width: hp(100),
    // height: hp(50),
    width: hp(45),
    padding: hp(5),
    borderRadius: hp(10),
    borderWidth: hp(1),
    marginRight: hp(20),
    marginVertical: hp(15),
    borderColor: COLORS.success,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayCardSelected: {
    width: hp(45),
    padding: hp(5),
    borderRadius: hp(10),
    borderWidth: hp(1),
    marginRight: hp(20),
    marginVertical: hp(15),
    borderColor: COLORS.success,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.success,
  },
  timeCard: {
    width: hp(140),
    // height: hp(50),
    // padding: hp(10),
    paddingVertical: hp(15),
    borderRadius: hp(50),
    borderWidth: hp(1),
    marginRight: hp(15),
    marginTop: hp(15),
    borderColor: COLORS.success,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeCardSelected: {
    width: hp(140),
    // height: hp(50),
    paddingVertical: hp(15),
    borderRadius: hp(50),
    borderWidth: hp(1),
    marginRight: hp(15),
    marginTop: hp(15),
    borderColor: COLORS.success,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.success,
  },
  timeCardBetween: {
    width: hp(140),
    // height: hp(50),
    paddingVertical: hp(15),
    borderRadius: hp(50),
    borderWidth: hp(1),
    marginRight: hp(15),
    marginTop: hp(15),
    borderColor: COLORS.success,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(28, 43, 75, 0.2)',
  },
  labelPlaceholder: {
    height: hp(15),
    width: wp(170),
    borderRadius: 5,
    marginTop: hp(25),
  },
  lowerContainer: {
    width: '90%',
    paddingBottom: hp(15),
    alignSelf: 'center',
  },
  horizontal: {
    borderBottomColor: COLORS.filterModalColor,
    borderBottomWidth: 1,
    marginHorizontal: wp(40),
    marginVertical: hp(10),
  },
  horizontalNoMargin: {
    borderBottomColor: COLORS.filterModalColor,
    borderBottomWidth: 1,
  },
});

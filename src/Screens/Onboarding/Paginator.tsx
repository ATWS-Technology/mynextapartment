/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, View, Animated, useWindowDimensions} from 'react-native';
import React from 'react';
import {COLORS} from '../../theme/theme';

const Paginator = ({data, scrollX}: any) => {
  const {width} = useWindowDimensions();

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      {data.map((_: any, i: number) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [15, 30, 15],
          extrapolate: 'clamp',
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.4, 1, 0.4],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            style={[styles.dot, {width: dotWidth, opacity}]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
};

export default Paginator;

const styles = StyleSheet.create({
  dot: {
    height: 6,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    backgroundColor: COLORS.primary,
  },
});

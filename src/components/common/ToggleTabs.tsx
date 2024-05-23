/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {useState} from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import {fontSz} from '../../utils';
import {COLORS} from '../../constants/theme';

function ToggleTabs({
  selectedTab,
  currentTab,
  small,
  firstLabel,
  secondLabel,
}: {
  selectedTab: any;
  currentTab?: 'first' | 'second' | string;
  small?: boolean;
  firstLabel?: string;
  secondLabel?: string;
}) {
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);

  useEffect(() => {
    setFirst(currentTab === 'first');
    selectedTab(currentTab);
    setSecond(currentTab === 'second');
  }, [currentTab]);

  const toggle = (e: string) => {
    if (e === 'first') {
      setFirst(true);
      selectedTab('first');
      setSecond(false);
    } else if (e === 'second') {
      setFirst(false);
      setSecond(true);
      selectedTab('second');
    }
  };

  return (
    <View
      style={[
        styles.container,
        {
          width: small ? '50%' : '100%',
          height: small ? 30 : 45,
        },
      ]}>
      <Pressable
        style={[
          styles.pill,
          {
            backgroundColor: first
              ? COLORS.primary
              : COLORS.searchBackgroundColor,
            paddingHorizontal: small ? 10 : 20,
            paddingVertical: small ? 5 : 10,
          },
        ]}
        onPress={() => toggle('first')}>
        <Text
          style={[
            styles.title,
            {
              color: first ? '#ffffff' : COLORS.lightCreateOne,
              fontSize: small ? fontSz(13) : fontSz(13.5),
              fontWeight: first ? '500' : '400',
            },
          ]}>
          {firstLabel}
        </Text>
      </Pressable>
      <Pressable
        style={[
          styles.pill,
          {
            backgroundColor: second
              ? COLORS.primary
              : COLORS.searchBackgroundColor,
            paddingHorizontal: small ? 10 : 20,
            paddingVertical: small ? 5 : 10,
          },
        ]}
        onPress={() => toggle('second')}>
        <Text
          style={[
            styles.title,
            {
              color: second ? '#ffffff' : COLORS.lightCreateOne,
              fontSize: small ? fontSz(13) : fontSz(13.5),
              fontWeight: second ? '500' : '400',
            },
          ]}>
          {secondLabel}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
    backgroundColor: COLORS.searchBackgroundColor,
    borderRadius: 20,
    paddingVertical: 10,
    marginVertical: 10,
  },
  pill: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    flex: 1,
    marginHorizontal: 5,
    marginVertical: 20,
    height: 40,
  },
  title: {
    textAlign: 'center',
  },
});

export default ToggleTabs;

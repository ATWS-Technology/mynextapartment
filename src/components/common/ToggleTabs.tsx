import React, {useEffect} from 'react';
import {useState} from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import {fontSz} from '../../../utils';
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
  const [current, setCurrent] = useState('');
  const [first, setFirst] = useState(true);
  const [completed, setCompleted] = useState(false);
  const [second, setSecond] = useState(false);

  useEffect(() => {
    setFirst(currentTab === 'first' ? true : false);
    selectedTab(currentTab);
    setCompleted(false);
    setSecond(currentTab === 'second' ? true : false);
  }, [currentTab]);

  const toggle = (e: string) => {
    if (e === 'first') {
      console.log('first in toggle');
      setFirst(true);
      selectedTab('first');
      setCompleted(false);
      setSecond(false);
    } else if (e === 'second') {
      console.log('second in toggle');
      setFirst(false);
      setCompleted(false);
      setSecond(true);
      selectedTab('second');
    } else {
      return;
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
              ? COLORS.primaryYellow
              : COLORS.searchBackgroundColor,
            paddingHorizontal: small ? 10 : 60,
            paddingVertical: small ? 5 : 10,
          },
        ]}
        onPress={() => toggle('first')}>
        <Text
          style={[
            styles.title,
            {
              color: first ? 'rgba(5, 5, 7, 1)' : COLORS.lightCreateOne,
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
              ? COLORS.primaryYellow
              : COLORS.searchBackgroundColor,
            paddingHorizontal: small ? 10 : 60,
            paddingVertical: small ? 5 : 10,
          },
        ]}
        onPress={() => toggle('second')}>
        <Text
          style={[
            styles.title,
            {
              color: second ? 'rgba(5, 5, 7, 1)' : COLORS.lightCreateOne,
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
    height: 40,
    borderRadius: 9,
  },
  pill: {
    paddingHorizontal: 40,
    paddingVertical: 7.5,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
  },
});

export default ToggleTabs;

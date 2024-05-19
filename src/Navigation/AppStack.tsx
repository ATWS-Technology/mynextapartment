import React from 'react';
import {Image, Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS, FONTS} from '../constants/theme';
import {fontSz, hp} from '../../utils';
import {TabRoutes} from '../Routes';
import HomeStack from './app/HomeStack';
import OrderStack from './app/OrderStack';
import ProfileStack from './app/ProfileStack';
import {
  getFocusedRouteNameFromRoute,
  RouteProp,
} from '@react-navigation/native';
import SharedNavigator from './app/HomeStack';

const Tab = createBottomTabNavigator<TabRoutes>();

const AppTabAndStack = () => {
  return (
    <Tab.Navigator
      id="tabs"
      screenOptions={({route}) => ({
        // console.log(route);
        headerShown: false,
        tabBarActiveTintColor: COLORS.primaryOrange,
        tabBarLabelStyle: {
          fontSize: fontSz(12),
          fontFamily: FONTS.fontFamily,
          fontWeight: '500',
          paddingBottom: Platform.OS === 'android' ? hp(2.5) : 0,
        },
        // tabBarStyle: {
        //   display: currentRouteName === 'Vendor' ? 'none' : 'flex',
        // },
      })}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={({route}) => ({
          // const focusedRouteName = getFocusedRouteNameFromRoute(route);
          // console.log('xxxxxxxxxxxxx', focusedRouteName);
          // if (focusedRouteName === 'Home' || focusedRouteName === undefined) {
          //   return {
          //     tabBarStyle: {display: 'flex'},
          //     tabBarLabel: 'Home',
          //     tabBarIcon: ({focused}) => (
          //       <Image
          //         style={{
          //           width: 28,
          //           height: 28,
          //         }}
          //         source={
          //           focused
          //             ? require('../assets/icons/home_tab_filled.png')
          //             : require('../assets/icons/home_tab.png')
          //         }
          //       />
          //     ),
          //   };
          // } else {
          //   return {
          tabBarStyle: {display: 'flex'},
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                width: 28,
                height: 28,
              }}
              source={
                focused
                  ? require('../assets/icons/home_tab_filled.png')
                  : require('../assets/icons/home_tab.png')
              }
            />
          ),
          //   };
          // }
        })}
      />
      <Tab.Screen
        name="OrderStack"
        component={OrderStack}
        options={{
          tabBarLabel: 'My Orders',
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                width: 28,
                height: 28,
              }}
              source={
                focused
                  ? require('../assets/icons/orders_tab_filled.png')
                  : require('../assets/icons/orders_tab.png')
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                width: 28,
                height: 28,
              }}
              source={
                focused
                  ? require('../assets/icons/profile_tab_filled.png')
                  : require('../assets/icons/profile_tab.png')
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppTabAndStack;

import React, {useLayoutEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {HomeRoutes, SharedElementRoutes} from '../../Routes';
import Home from '../../screens/app/home/Home';
import Vendor from '../../screens/app/home/Vendor';
import AllRestaurants from '../../screens/app/home/AllRestaurants';
import Tray from '../../screens/app/home/Tray';
import {
  getFocusedRouteNameFromRoute,
  NavigationProp,
  RouteProp,
} from '@react-navigation/native';
import OrderSummary from '../../screens/app/home/OrderSummary';
import Checkout from '../../screens/app/home/Checkout';
import TrackOrder from '../../screens/app/home/TrackOrder';
import DeliveryAddress from '../../screens/app/home/DeliveryAddress';
import PaymentStatus from '../../screens/app/home/PaymentStatus';
import CompletionFeedback from '../../screens/app/home/CompletionFeedback';

const Stack = createStackNavigator<HomeRoutes>();
const SharedStack = createSharedElementStackNavigator<SharedElementRoutes>();

interface HomeProps {
  navigation: NavigationProp<SharedElementRoutes, 'Home'>;
  route: RouteProp<SharedElementRoutes, 'Home'>;
}

const SharedNavigator = ({route, navigation}: HomeProps) => {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === 'Home' || routeName === undefined) {
      //
      navigation.getParent()?.setOptions({headerShown: false});
      navigation.getParent()?.setOptions({tabBarStyle: {display: 'flex'}});
      //
    } else {
      //
      navigation.getParent()?.setOptions({headerShown: false});
      navigation.getParent()?.setOptions({tabBarStyle: {display: 'none'}});
      //
    }
  }, [navigation, route]);

  return (
    <SharedStack.Navigator
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
        cardOverlayEnabled: true,
        cardStyle: {backgroundColor: 'transparent'},
        // presentation: 'modal',
      }}
      initialRouteName={'Home'}>
      <SharedStack.Screen name="Home" component={Home} key={'Home'} />
      <SharedStack.Screen
        name="Vendor"
        component={Vendor}
        key={'Vendor'}
        sharedElements={route => {
          const {id} = route.params.vendor;
          return [id];
        }}
      />
      <SharedStack.Screen
        name="AllRestaurants"
        component={AllRestaurants}
        key={'AllRestaurants'}
        options={{
          gestureDirection: 'vertical',
          cardStyleInterpolator: ({current, layouts}) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateY: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.height, 0],
                    }),
                  },
                ],
              },
            };
          },
        }}
      />
      <SharedStack.Screen name="Tray" component={Tray} key={'Tray'} />
      <SharedStack.Screen
        name="DeliveryAddress"
        component={DeliveryAddress}
        key={'DeliveryAddress'}
        options={{
          gestureDirection: 'vertical',
          cardStyleInterpolator: ({current, layouts}) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateY: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.height, 0],
                    }),
                  },
                ],
              },
            };
          },
        }}
      />
      <SharedStack.Screen
        name="OrderSummary"
        component={OrderSummary}
        key={'OrderSummary'}
      />
      <SharedStack.Screen
        name="Checkout"
        component={Checkout}
        key={'Checkout'}
      />
      <SharedStack.Screen
        name="TrackOrder"
        component={TrackOrder}
        key={'TrackOrder'}
      />
      <SharedStack.Screen
        name="PaymentStatus"
        component={PaymentStatus}
        key={'PaymentStatus'}
      />
      <SharedStack.Screen
        name="CompletionFeedback"
        component={CompletionFeedback}
        key={'CompletionFeedback'}
      />
    </SharedStack.Navigator>
  );
};

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        //
        gestureEnabled: false,
        cardOverlayEnabled: true,
        cardStyle: {backgroundColor: 'transparent'},
      }}
      initialRouteName={'SharedNavigator'}>
      <Stack.Screen
        name={'SharedNavigator'}
        component={SharedNavigator}
        key={'SharedNavigator'}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;

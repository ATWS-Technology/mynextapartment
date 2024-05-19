import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {OrderRoutes} from '../../Routes';
import Orders from '../../screens/app/myOrders/Orders';

const Stack = createStackNavigator<OrderRoutes>();

function OrderStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'Orders'}>
      <Stack.Screen name={'Orders'} component={Orders} key={'Orders'} />
    </Stack.Navigator>
  );
}

export default OrderStack;

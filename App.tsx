import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import AuthenticationStack from './src/Navigation/AuthenticationStack';
import {Provider} from 'react-redux';
import {store} from './src/services';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthenticationStack />
      </NavigationContainer>
    </Provider>
  );
}

export default App;

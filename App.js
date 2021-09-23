import React from 'react';
import {StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Tabs from './src/navigation/tabs';

import {CryptoDetailsScreen, ExchangesScreen, NewsScreen} from './src/screens';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar translucent={false} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={'Home'}>
          <Stack.Screen name="Home" component={Tabs} />
          <Stack.Screen
            name="CryptoDetailsScreen"
            component={CryptoDetailsScreen}
          />
          <Stack.Screen name="ExchangesScreen" component={ExchangesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

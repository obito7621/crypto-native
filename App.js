import React from 'react';
import {StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Tabs from './src/navigation/tabs';

import {CryptoDetailsScreen, ExchangesScreen, NewsScreen} from './src/screens';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <SafeAreaProvider>
        <StatusBar translucent={false} />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName={'Home'}>
            <Stack.Screen name="HomeStack" component={Tabs} />
            <Stack.Screen
              name="CryptoDetailsScreen"
              component={CryptoDetailsScreen}
            />
            <Stack.Screen name="ExchangesScreen" component={ExchangesScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
};

export default App;

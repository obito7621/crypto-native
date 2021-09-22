import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Route, Switch, NavLink, Link} from 'react-router-dom';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Tabs from './src/navigation/tabs';

import {Provider} from 'react-redux';
import store from './src/app/store';

import {CryptoScreen, ExchangesScreen, NewsScreen} from './src/screens';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={'Home'}>
          <Stack.Screen name="Home" component={Tabs} />
          <Stack.Screen name="CryptoDetail" component={CryptoScreen} />
          <Stack.Screen name="Exchanges" component={ExchangesScreen} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;

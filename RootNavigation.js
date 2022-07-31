import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import * as Screens from './screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  const screenOptions = {headerShown: false};
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions} initialRouteName="Home">
        <Stack.Screen name="Home" component={Screens.Home} />
        <Stack.Screen
          name="RestaurantDetail"
          component={Screens.RestaurantDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

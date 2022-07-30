import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import * as Screens from './screens';
export default function RootNavigation() {
  const screenOptions = {headerShown: false};
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Screens.Home} />
        <Stack.Screen
          name="Restaurant Detail"
          component={Screens.RestaurantDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

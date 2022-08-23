import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import * as Screens from './screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import _store from './redux/store';
import 'react-native-gesture-handler';

export default function App() {
  const Stack = createNativeStackNavigator();
  const screenOptions = {headerShown: false};
  return (
    <Provider store={_store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptions} initialRouteName="Home">
          <Stack.Screen name="Home" component={Screens.Home} />
          <Stack.Screen
            name="RestaurantDetail"
            component={Screens.RestaurantDetail}
          />
          <Stack.Screen name="OrderSuccess" component={Screens.OrderSuccess} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

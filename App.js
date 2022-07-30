/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// AntDesign.loadFont().then();
// Ionicons.loadFont().then();
import 'react-native-gesture-handler';
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
// import * as Screens from './screens';
import RootNavigation from './RootNavigation';
import * as Screens from './screens';
export default function App() {
  return <RootNavigation />;
}

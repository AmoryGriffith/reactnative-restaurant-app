import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import About from '../components/RestaurantDetail/About';
import {Divider} from 'react-native-elements';
import MenuItems from '../components/RestaurantDetail/MenuItems';

export default function RestaurantDetail({route}) {
  return (
    <SafeAreaView>
      <About route={route} />
      <Divider style={{marginVertical: 20}} width={1.5} />
      <MenuItems />
    </SafeAreaView>
  );
}

import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import About from '../components/RestaurantDetail/About';
import {Divider} from 'react-native-elements';
import MenuItems from '../components/RestaurantDetail/MenuItems';
import ViewCart from '../components/RestaurantDetail/ViewCart';

export default function RestaurantDetail({route, navigation}) {
  return (
    <SafeAreaView>
      <About route={route} />
      <Divider style={{marginVertical: 20}} width={1.5} />
      <MenuItems restaurantName={route.params.name} />
      <ViewCart navigation={navigation} />
    </SafeAreaView>
  );
}

import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
const items = [
  {
    image: require('../../assets/pickup.png'),
    text: 'Pick-up',
  },
  {
    image: require('../../assets/softdrink.jpeg'),
    text: 'Soft Drink',
  },
  {
    image: require('../../assets/bakery.png'),
    text: 'Bakery Items',
  },
  {
    image: require('../../assets/fastfood.png'),
    text: 'Fast Food',
  },
];
export default function Categories() {
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingLeft: 20,
      }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View style={{alignItems: 'center', marginRight: 30}} key={index}>
            <Image
              source={item.image}
              style={{width: 50, height: 40, resizeMode: 'contain'}}
            />
            <Text style={{fontSize: 13, fontWeight: '900'}}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

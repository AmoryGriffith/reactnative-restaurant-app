import {View, Text, Image} from 'react-native';
import React from 'react';

export default function About({route}) {
  const {image, name, reviews, rating, categories} = route.params;
  if (categories) {
    const formattedCate = categories.map(item => item.title).join(' • ');
    const description = `${formattedCate} ${
      price ? ' • ' + price : ''
    } • ${rating} • ${reviews}`;
  }

  return (
    <>
      <View>
        <Image source={{uri: image}} style={{width: '100%', height: 180}} />
        <Text
          style={{
            fontSize: 29,
            fontWeight: '600',
            marginTop: 10,
            marginHorizontal: 15,
          }}>
          {name}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '400',
            marginTop: 10,
            marginHorizontal: 15,
          }}>
          {/* {description} */}
        </Text>
      </View>
    </>
  );
}

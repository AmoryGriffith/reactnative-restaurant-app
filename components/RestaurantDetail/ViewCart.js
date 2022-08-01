import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function ViewCart() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        position: 'absolute',
        alignItems: 'center',
        bottom: 10,
        zIndex: 100,
      }}>
      <View
        style={{flexDirection: 'row', justifyContent: 'center', width: '100%'}}>
        <TouchableOpacity
          style={{
            backgroundColor: 'grey',
            marginTop: 20,
            alignItems: 'center',
            padding: 15,
            borderRadius: 30,
            width: 300,
            position: 'relative',
          }}>
          <Text style={{color: 'white', fontSize: 20}}>ViewCart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

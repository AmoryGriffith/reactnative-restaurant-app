import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
export default function ViewCart({navigation}) {
  const {items, restaurantName} = useSelector(
    state => state._cart.selectedItems,
  );
  const total = items
    .map(item => Number(item.price.repplace('$', '')))
    .reduce((prev, curr) => prev + curr, 0);
  const totalUSD = total.toLocaleString('en', {
    style: 'currency',
    currency: 'USD',
  });
  const [visible, setVisible] = useState(false);
  return (
    <>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          position: 'absolute',
          bottom: 130,
          zIndex: 999,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100%',
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              backgroundColor: 'grey',
              marginTop: 20,
              alignItems: 'center',
              justifyContent: 'center',
              padding: 15,
              borderRadius: 30,
              width: 300,
              position: 'relative',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                marginRight: 20,
              }}>
              ViewCart
            </Text>
            <Text style={{color: 'white', fontSize: 20}}>{totalUSD}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

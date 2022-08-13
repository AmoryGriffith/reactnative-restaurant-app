import {View, Text, Image, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Divider} from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {useDispatch, useSelector} from 'react-redux';
import * as actions from '../../redux/actions/cart';
export default function MenuItems({restaurantName, data}) {
  const dispatch = useDispatch();
  const addItems = (item, checkboxValue) => {
    dispatch(actions.selectItems(item, checkboxValue));
  };

  const cartItems = useSelector(state => state._cart.selectedItems.items);

  const isFoodInCart = (food, cartItems) =>
    Boolean(cartItems.find(item => item.title === food.title));
  return (
    <ScrollView vertical showsVerticalScrollIndicator={false}>
      {data.map((food, index) => (
        <View key={index}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              margin: 20,
            }}>
            <BouncyCheckbox
              fillColor="#8A0707"
              isChecked={isFoodInCart(food, cartItems)}
              onPress={checkboxValue => addItems(food, checkboxValue)}
            />
            <FoodInfo
              title={food.title}
              description={food.description}
              price={food.price}
            />
            <FoodImage image={food.image} />
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{marginHorizontal: 20}}
          />
        </View>
      ))}
    </ScrollView>
  );
}
const FoodInfo = ({title, description, price}) => {
  return (
    <View
      style={{
        width: 240,
        justifyContent: 'space-evenly',
      }}>
      <Text style={{fontSize: 19, fontWeight: '600'}}>{title}</Text>
      <Text>{description}</Text>
      <Text>{price}</Text>
    </View>
  );
};
const FoodImage = ({image}) => {
  return (
    <View>
      <Image
        style={{width: 100, height: 100, borderRadius: 8}}
        source={{uri: image}}
      />
    </View>
  );
};

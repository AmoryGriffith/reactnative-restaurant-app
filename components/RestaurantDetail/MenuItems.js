import {View, Text, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {Divider} from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {useDispatch, useSelector} from 'react-redux';
import * as actions from '../../redux/actions/cart';
export default function MenuItems({restaurantName}) {
  const dispatch = useDispatch();
  async function addItems(item, checkboxValue) {
    dispatch(actions.selectItems(item, checkboxValue));
  }
  // const {cartItems} = useSelector(state => state._cart.selectItems.items);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {fake_menu.map((item, index) => (
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 20,
            }}>
            <BouncyCheckbox
              fillColor="#8A0707"
              onPress={(item, checkboxValue) => addItems(item, checkboxValue)}
            />
            <FoodInfo
              title={item.title}
              description={item.description}
              price={item.price}
            />
            <FoodImage image={item.image} />
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
const fake_menu = [
  {
    title: 'Tequilla',
    description: 'Famous Drink of the West',
    price: '12$',
    image:
      'https://liquorshop.hk/wp-content/uploads/2020/08/Don-Julio-Anejo-504x504.jpg',
  },
  {
    title: 'Vodka',
    description: 'Famous Drink from Russia',
    price: '10$',
    image:
      'https://www.watsonswine.com/medias/sys_master/front/prd/8814637219870/VODKA-457168.jpg',
  },
  {
    title: 'Red Wine',
    description: 'Fine collected grapes, aged for years, masterpiece wine',
    price: '12$',
    image:
      'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2022/03/wine-two-glasses-calories-facebook-1200x628.jpg',
  },
];

import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export default function Navigators() {
  const [select, setSelect] = useState('Home');
  return (
    <View
      style={{
        flexDirection: 'row',
        margin: 10,
        marginHorizontal: 30,
        justifyContent: 'space-between',
      }}>
      <Icon
        icon="home"
        text="Home"
        onPress={() => setSelect('Home')}
        select={select}
      />
      <Icon
        icon="search"
        text="Search"
        onPress={() => setSelect('Search')}
        select={select}
      />
      <Icon
        icon="shopping-bag"
        text="Grocery"
        onPress={() => setSelect('Grocery')}
        select={select}
      />
      <Icon
        icon="receipt"
        text="Orders"
        onPress={() => setSelect('Orders')}
        select={select}
      />
      <Icon
        icon="user"
        text="Account"
        onPress={() => setSelect('Account')}
        select={select}
      />
    </View>
  );
}
const Icon = ({icon, text, onPress, select}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
      // style={{
      //   backgroundColor: select == text ? '' : 'none',
      //   borderRadius: 10,
      // }}
      >
        <FontAwesome5
          name={icon}
          size={select == text ? 25 : 22}
          style={{
            color: select == text ? '#cd5700' : 'grey',
            marginBottom: 3,
            alignSelf: 'center',
          }}
        />
        <Text
          style={{
            fontWeight: select == text ? '700' : '500',
            color: select == text ? '#cd5700' : 'black',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

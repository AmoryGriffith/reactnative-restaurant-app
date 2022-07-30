import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

export default function HeaderTabs({activeTab, setActiveTab}) {
  // const [active, setActive] = useState('Delivery');
  return (
    <View style={{flexDirection: 'row', alignSelf: 'center'}}>
      <HeaderBtn
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        text={'Delivery'}
      />
      <HeaderBtn
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        text={'Pickup'}
      />
    </View>
  );
}
const HeaderBtn = ({text, activeTab, setActiveTab}) => {
  return (
    <TouchableOpacity
      onPress={() => setActiveTab(text)}
      style={{
        backgroundColor: activeTab == text ? 'black' : 'white',
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
      }}>
      <Text
        style={{
          color: activeTab == text ? 'white' : 'black',
          fontSize: 15,
          fontWeight: 'bold',
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

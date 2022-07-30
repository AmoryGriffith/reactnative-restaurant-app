import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeaderTabs from '../components/home/HeaderTabs';
import SearchBars from '../components/home/SearchBars';
import Categories from '../components/home/Categories';
import RestaurantItems, {fakeData} from '../components/home/RestaurantItems';
import {Divider} from 'react-native-elements';
import Navigators from '../components/home/BottomTabs';
import axios from 'axios';
const WEB_API_KEY =
  'UtryfiE86Cn7jMea-gkYPDKQfmivLgoG5Ou-Q9w-NsLe7hrkXQsbHGhZxFVvONiypvzxmX7RDUqzLJwqjj-JReYzKtvqD81o9_83HOymTmdY0yBEQ0FNQJlnzYvXYnYx';
export default function Home({navigation}) {
  const [restaurantData, setRestaurantData] = useState(fakeData);
  const [city, setCity] = useState('HollyWood');
  const [activeTab, setActiveTab] = useState('Delivery');
  const [loading, setLoading] = useState(true);

  const getRestaurantFromWeb = async () => {
    const webUrl =
      // `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`; right one actually, but no credit no free gg map
      'https://api.yelp.com/v3/businesses/search?term=restaurants&location=Hollywood'; // this is hard code for the url, location is editable
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${WEB_API_KEY}`,
      },
    };
    setLoading(true);
    const {data} = await axios.get(webUrl, apiOptions);
    setRestaurantData(
      data.businesses.filter(businesses =>
        businesses.transactions.includes(activeTab.toLocaleLowerCase()),
      ),
    );
    setLoading(false);
    // return fetch(webUrl, apiOptions)
    //   .then(res => res.json())
    //   .then(json =>
    //     setRestaurantData(
    //       json.businesses.filter(businesses =>
    //         businesses.transactions.includes(activeTab.toLocaleLowerCase()),
    //       ),
    //     ),
    //   );
  };
  useEffect(() => {
    getRestaurantFromWeb();
  }, [
    activeTab,
    // ,city
  ]);
  return (
    <SafeAreaView style={{backgroundColor: '#eee', flex: 1}}>
      <View style={{backgroundColor: 'white', padding: 15}}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBars
        // cityHandler={setCity}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        {loading ? (
          <Text>Loading</Text>
        ) : (
          <RestaurantItems
            restaurantData={restaurantData}
            navigation={navigation}
          />
        )}
      </ScrollView>
      <Divider width={1} />
      <Navigators />
    </SafeAreaView>
  );
}

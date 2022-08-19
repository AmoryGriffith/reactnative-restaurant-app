import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export default function RestaurantItems({restaurantData, navigation}) {
  const [click, setClick] = useState(false);
  return (
    <>
      {restaurantData.map((item, index) => (
        <TouchableOpacity
          activeOpacity={1}
          style={{marginBottom: 30}}
          onPress={() =>
            navigation.navigate('RestaurantDetail', {
              name: item.name,
              image: item.image_url,
              price: item.price,
              reviews: item.review_count,
              rating: item.rating,
              categoires: item.categoires,
            })
          }>
          <View
            style={{marginTop: 10, padding: 15, backgroundColor: 'white'}}
            key={index}>
            <RestaurantImage
              image={item.image_url}
              click={click}
              onPress={() => setClick(click)}
            />
            <RestaurantInfo name={item.name} rating={item.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}
const RestaurantImage = ({image, click, onPress}) => {
  return (
    <View>
      <Image
        source={{
          uri: image,
        }}
        style={{width: '100%', height: 180}}
      />
      <TouchableOpacity
        style={{position: 'absolute', right: 20, top: 15}}
        onPress={onPress}>
        {click ? (
          <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
        ) : (
          <MaterialCommunityIcons name="heart" size={25} color="red" />
        )}
      </TouchableOpacity>
    </View>
  );
};

const RestaurantInfo = ({name, rating, price, reviews, categoires}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
      }}>
      <View>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>{name}</Text>
        <Text style={{fontSize: 14, color: 'grey'}}>
          Time to reach there (30- 40min)
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#eee',
          height: 30,
          width: 30,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 15,
        }}>
        <Text>{rating}</Text>
      </View>
    </View>
  );
};

export const fakeData = [
  {
    name: 'Ramessy',
    image_url:
      'https://images.lifestyleasia.com/wp-content/uploads/sites/2/2022/01/06235301/new-dining-restrictions-hours-1600x900.jpg',
    categoires: ['cafe', 'bar'],
    price: '$$',
    reviews: 1233,
    rating: 5,
  },
  {
    name: 'Havanah',
    image_url:
      'https://img.etimg.com/thumb/msid-82666514,width-1200,height-900/industry/services/hotels-/-restaurants/staggered-lockdowns-start-to-bite-battered-restaurants.jpg',

    categoires: ['cafe', 'bar'],
    price: '$$$',
    reviews: 5613,
    rating: 4.5,
  },
  {
    name: 'JRA Deli',
    image_url: 'https://media.timeout.com/images/105762228/750/562/image.jpg',
    categoires: ['cafe', 'bar'],
    price: '$',
    reviews: 1001,
    rating: 4.4,
  },
  {
    name: 'Sam Vra',
    image_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3WPc_XosH7X3cELJcM7qKcSJFQi0jYbpyyw&usqp=CAU',
    categoires: ['cafe', 'bar'],
    price: '$',
    reviews: 3920,
    rating: 4.0,
  },
];

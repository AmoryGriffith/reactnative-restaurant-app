import {View, Text} from 'react-native';
import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
AntDesign.loadFont().then();
Ionicons.loadFont().then();
export default function SearchBars({cityHandler}) {
  return (
    <View style={{marginTop: 15, flexDirection: 'row'}}>
      <GooglePlacesAutocomplete
        query={{key: 'AIzaSyATiAqIXBARofRD2apZcPQ1eEWZPH4fPV4'}} // not working :< , need visa card to get my api
        placeholder="search"
        onPress={(data, details = null) => {
          console.log(data.description);
          const city = data.description.split(',')[0];
          cityHandler(city);
        }}
        styles={{
          textInput: {
            backgroundColor: '#eee',
            borderRadius: 28,
            fontWeight: '700',
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: '#eee',
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={{marginLeft: 10}}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: 'row',
              marginRight: 8,
              backgroundColor: 'white',
              padding: 9,
              borderRadius: 30,
              alignItems: 'center',
            }}>
            <AntDesign name="clockcircle" style={{margin: 7}} />
            <Text>Seacrch</Text>
          </View>
        )}
      />
    </View>
  );
}

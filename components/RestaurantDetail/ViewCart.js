import {View, Text, TouchableOpacity, Modal} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import OrderItem from './OrderItem';
import LottieView from 'lottie-react-native';
import firebase from '../../firebase';

export default function ViewCart({navigation}) {
  const restaurantName = useSelector(
    state => state._cart.selectedItems.restaurantName,
  );
  const items = useSelector(state => state._cart.selectedItems.items);
  const total = items
    ? items
        .map(item => Number(item.price.replace('$', '')))
        .reduce((prev, curr) => prev + curr, 0)
    : '';

  const totalUSD = total.toLocaleString('en', {
    style: 'currency',
    currency: 'USD',
  });
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const addOrderToFireBase = () => {
    setLoading(true);
    const db = firebase.firestore();
    db.collection('orders')
      .add({
        items: items,
        restaurantName: restaurantName,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        setTimeout(() => {
          setLoading(false);
          navigation.navigate('OrderCompleted');
        }, 2500);
      });
  };
  return (
    <>
      <Modal
        animationType="slide"
        visible={visible}
        transparent={true}
        onRequestClose={() => setVisible(false)}>
        <CheckModalContent
          total={total}
          totalUSD={totalUSD}
          items={items}
          restaurantName={restaurantName}
          onPress={() => {
            addOrderToFireBase();
            setVisible(false);
          }}
        />
      </Modal>
      {total ? (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            position: 'absolute',
            bottom: 300,
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
                backgroundColor: 'black',
                marginTop: 20,
                alignItems: 'center',
                justifyContent: 'center',
                padding: 15,
                borderRadius: 30,
                width: 300,
                position: 'relative',
              }}
              onPress={() => setVisible(true)}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  marginRight: 20,
                }}>
                Total:
              </Text>
              <Text style={{color: 'white', fontSize: 20}}>{totalUSD}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
      {loading ? (
        <View
          style={{
            backgroundColor: 'black',
            position: 'absolute',
            opacity: 0.6,
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%',
          }}>
          <LottieView
            style={{height: 200}}
            source={require('../../assets/animations/scanner.json')}
            autoPlay
            speed={3}
          />
        </View>
      ) : (
        <></>
      )}
    </>
  );
}
const CheckModalContent = ({
  restaurantName,
  items,
  totalUSD,
  total,
  onPress,
}) => {
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          backgroundColor: 'rgba(0,0,0,0.7)',
        }}>
        <View
          style={{
            backgroundColor: 'white',
            padding: 16,
            height: 500,
            borderWidth: 1,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: '600',
              fontSize: 18,
              marginBottom: 10,
            }}>
            {restaurantName}
          </Text>
          {items.map((item, index) => (
            <OrderItem key={index} item={item} />
          ))}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 15,
            }}>
            <Text
              style={{
                textAlign: 'left',
                fontWeight: '600',
                fontSize: 15,
                marginBottom: 10,
              }}>
              Subtotal
            </Text>
            <Text>{totalUSD}</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <TouchableOpacity
              style={{
                marginTop: 20,
                backgroundColor: 'black',
                alignItems: 'center',
                padding: 13,
                borderRadius: 30,
                width: 300,
                position: 'relative',
              }}
              onPress={onPress}>
              <Text style={{color: 'white', fontSize: 20}}>Purchase</Text>
              <Text
                style={{
                  position: 'absolute',
                  right: 20,
                  color: 'white',
                  fontSize: 15,
                  top: 17,
                }}>
                {total ? totalUSD : ''}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

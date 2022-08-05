import {ADD_TO_CART} from '../constants';

import axios from 'axios';
export const selectItems =
  (item, restaurantName, checkboxValue) => async dispatch => {
    return dispatch({
      type: ADD_TO_CART,
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkboxValue: checkboxValue,
      },
    });
  };
// export function getItems() {
//   return async dispatch => {
//     try {
//       const data = await axios.get('https://api.yelp.com/v3/businesses/search');
//       console.log(data);
//       await dispatch(selectItems(data));
//       return data || [];
//     } catch (error) {
//       console.log(error);
//     }
//   };
// }

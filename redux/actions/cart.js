import {ADD_TO_CART} from '../constants';
import axios from 'axios';

export const selectItems = (item, checkboxValue) => async dispatch => {
  try {
    localStorage.setItem(item);
    return dispatch({
      type: ADD_TO_CART,
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkboxValue: checkboxValue,
      },
    });
  } catch (err) {}
};

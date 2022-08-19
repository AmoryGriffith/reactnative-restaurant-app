import {ADD_TO_CART} from '../constants';

export const selectItems =
  (item, checkboxValue, restaurantName) => async dispatch => {
    return dispatch({
      type: ADD_TO_CART,
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkboxValue: checkboxValue,
      },
    });
  };

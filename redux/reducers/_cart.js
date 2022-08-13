import {act} from 'react-test-renderer';
import {selectItems} from '../actions/cart';
import {ADD_TO_CART} from '../constants';
const initialState = {
  selectedItems: {
    items: [],
    restaurantName: '',
  },
};
export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      if (action.payload.checkboxValue) {
        return {
          ...state,
          items: [action.payload],
          restaurantName: action.payload.name,
        };
      }
    }
    default:
      return state;
  }
}

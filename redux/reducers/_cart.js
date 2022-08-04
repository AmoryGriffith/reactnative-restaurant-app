import {act} from 'react-test-renderer';
import {ADD_TO_CART} from '../constants';
let initialState = {
  selectedItems: {items: [], restaurantName: ''},
};
export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      let newState = {...state}; // for learning purpose only
      if (action.payload.checkboxValue) {
        return {
          ...state,
          items: [...newState.selectedItems.items, action.payload],
          restaurantName: action.payload.restaurantName,
        };
      } else {
        // return {
        newState.selectedItems = {
          items: [
            ...newState.selectedItems.items.filter(
              item => item.title !== action.payload.title,
            ),
          ],
          restaurantName: action.payload.restaurantName,
        };
      }
      return newState; // for learning purpose only
    }

    default:
      return state;
  }
}

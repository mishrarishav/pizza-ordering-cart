import { createStore } from 'redux';
import catalogData from '../data/catalog.json';
import cartData from '../data/cart.json';

const initialState = {
  catalog: catalogData,
  cart: cartData,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: {
          items: [...state.cart.items, action.payload],
        },
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: {
          items: state.cart.items.filter(item => item.id !== action.payload.id),
        },
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;

const initialState = {
  pizzas: [
    { id: 1, name: 'Margherita', price: 8.99 },
    { id: 2, name: 'Pepperoni', price: 10.99 },
    { id: 3, name: 'Vegetarian', price: 9.99 }
  ],
  cart: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      };
    default:
      return state;
  }
};

export default rootReducer;

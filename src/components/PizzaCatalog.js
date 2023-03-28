import React from 'react';
import { connect } from 'react-redux';

const PizzaCatalog = ({ pizzas, addToCart }) => {
  const handleClick = pizza => {
    addToCart(pizza);
  };

  return (
    <div>
      <h2>Pizza Catalog</h2>
      <ul>
        {pizzas.map(pizza => (
          <li key={pizza.id}>
            {pizza.name} - ${pizza.price.toFixed(2)}{' '}
            <button onClick={() => handleClick(pizza)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    pizzas: state.pizzas
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: pizza => dispatch({ type: 'ADD_TO_CART', payload: pizza })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PizzaCatalog);

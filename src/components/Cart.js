import React from 'react';
import { connect } from 'react-redux';

function Cart(props) {
  const { items } = props;

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>Price: {item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Total Price: {item.quantity * item.price}</p>
            <button onClick={() => props.removeFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = state => ({
  items: state.cart.items,
});

const mapDispatchToProps = dispatch => ({
  removeFromCart: item => dispatch({ type: 'REMOVE_FROM_CART', payload: item }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

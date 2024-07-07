import React from 'react';
import { useCart } from './CartContext';
import './cssfiles/Cart.css'; // Make sure to create and import the CSS file

function Cart() {
  const { cart } = useCart();

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <img src={item.img} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>Author: {item.author}</p>
                <p>Price: ₹{item.price}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;

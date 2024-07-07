import React from 'react';
import { useCart } from './CartContext';
import './cssfiles/Checkout.css';

function Checkout() {
  const { cart } = useCart();
  const totalCost = cart.reduce((total, item) => total + item.price * item.amount, 0);

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                <img src={item.img} alt={item.title} />
                <div>
                  <h3>{item.title}</h3>
                  <p>Author: {item.author}</p>
                  <p>Price: ₹{item.price}</p>
                  <p>Quantity: {item.amount}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="total-cost">
            <h3>Total Cost: ₹{totalCost}</h3>
          </div>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
}

export default Checkout;

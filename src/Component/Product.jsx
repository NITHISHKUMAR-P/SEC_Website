import React from 'react';
import list from './Items';
import { useCart } from './CartContext';
import './cssfiles/Product.css'; // Make sure to create and import the CSS file

function Product() {
  const { addToCart } = useCart();

  return (
    <div className="product-list">
      {list.map((item) => (
        <div className="product-card" key={item.id}>
          <img className="product-image" src={item.img} alt={item.title} />
          <h2 className="product-title">{item.title}</h2>
          <p className="product-author">{item.author}</p>
          <p className="product-price">Price: ₹{item.price}</p>
          <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Product;

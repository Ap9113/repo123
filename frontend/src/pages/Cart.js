import React, { useEffect, useState } from 'react';
import API from '../services/api';

function Cart() {
  const [items, setItems] = useState([]);

  const loadCart = () => {
    API.get('/cart')
      .then(res => setItems(res.data))
      .catch(console.error);
  };

  useEffect(() => {
    loadCart();
  }, []);

  const remove = (productId) => {
    API.delete(`/cart/remove/${productId}`)
      .then(loadCart)
      .catch(console.error);
  };

  return (
    <div className='container'>
      <h2>Your Cart</h2>
      {items.length === 0 && <p>Cart is empty</p>}
      {items.map(item => (
        <div key={item.id} className='product-card'>
          <h3>{item.product.name}</h3>
          <p>Quantity: {item.quantity}</p>
          <p>Price: ${item.product.price}</p>
          <button onClick={() => remove(item.product.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default Cart;

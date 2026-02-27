import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../services/api';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    API.get(`/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(console.error);
  }, [id]);

  const addToCart = () => {
    API.post(`/cart/add/${id}`).then(() => alert('Added to cart')).catch(console.error);
  };

  if (!product) return <div>Loading...</div>;
  return (
    <div className='container'>
      <h2>{product.name}</h2>
      <img src={product.imageUrl} alt={product.name} width='300' />
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductDetail;

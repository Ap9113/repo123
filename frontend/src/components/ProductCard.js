import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className='product-card'>
      <img src={product.imageUrl} alt={product.name} width='100%' />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <Link to={`/product/${product.id}`}>View</Link>
    </div>
  );
}

export default ProductCard;

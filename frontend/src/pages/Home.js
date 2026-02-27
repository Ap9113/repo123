import React, { useEffect, useState } from 'react';
import API from '../services/api';
import ProductCard from '../components/ProductCard';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get('/products')
      .then(res => setProducts(res.data))
      .catch(console.error);
  }, []);

  return (
    <div className='container'>
      <h2>Products</h2>
      <div className='product-grid'>
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}

export default Home;

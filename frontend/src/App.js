import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    localStorage.setItem('token', token);
  }, [token]);

  return (
    <div>
      <Navbar token={token} setToken={setToken} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login setToken={setToken} />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;

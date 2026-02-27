import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';

function Login({ setToken }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    API.post('/auth/login', { username, password })
      .then(res => {
        setToken(res.data);
        navigate('/');
      })
      .catch(err => alert('Login failed'));
  };

  return (
    <div className='container'>
      <h2>Login</h2>
      <form onSubmit={submit}>
        <div>
          <input
            type='text' placeholder='Username'
            value={username} onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            type='password' placeholder='Password'
            value={password} onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}

export default Login;

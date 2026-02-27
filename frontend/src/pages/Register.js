import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    API.post('/auth/register', { username, password })
      .then(() => {
        alert('Registered! Please login.');
        navigate('/login');
      })
      .catch(err => alert('Registration failed'));
  };

  return (
    <div className='container'>
      <h2>Register</h2>
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
        <button type='submit'>Register</button>
      </form>
    </div>
  );
}

export default Register;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar({ token, setToken }) {
  const navigate = useNavigate();
  const logout = () => {
    setToken('');
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className='navbar'>
      <div>
        <Link to='/'>Amazon Clone</Link>
      </div>
      <div>
        <Link to='/cart'>Cart</Link>
        {token ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;

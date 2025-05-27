import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ toggleForm }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (data.success) {
      alert(data.message);
      navigate('/admin/dashboard');
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg  w-full max-w-md">
        <h2 className="text-red-700 text-2xl font-bold text-center mb-2">Login</h2>
        <p className="mb-6 text-center text-sm">Enter your details to log in</p>

        <form onSubmit={handleSubmit}>
          <input 
            type="email"  
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded-md text-black"
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 mb-3 border border-gray-300 rounded-md text-black"
          />
          
          <div className='text-right text-sm text-gray-500 mb-4'>
            <p className="hover:underline cursor-pointer">Forgot Password?</p>
          </div>

          <button 
            type="submit" 
            className="w-full bg-red-700 text-white px-5 py-2 rounded-md hover:bg-red-600 transition"
          >
            Login
          </button>

          <div className='mt-5 text-center text-sm'>
            <p>
              Don't have an account?{' '}
              <span 
                onClick={toggleForm} 
                className='text-red-700 hover:text-red-950 cursor-pointer font-medium'
              >
                Sign Up
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

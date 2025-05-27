import React, { useState } from 'react';

const SignUp = ({ toggleForm }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const response = await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        password: formData.password
      })
    });

    const data = await response.json();

    if (data.success) {
      alert(data.message);
    } else {
      alert("Signup failed. Try again.");
    }
  };

  return (
    <div>
      <h2 className="text-red-700 text-2xl font-bold text-center mt-1 w-full max-w-md">Sign Up</h2>
      <p className="mb-4 text-center">Enter your details to create an account</p>

      <form onSubmit={handleSubmit}>
        <input 
          name="name"
          type="text"
          placeholder='Name' 
          value={formData.name}
          onChange={handleChange}
          required
          className='w-full p-2 mb-3 border border-gray-300 rounded-md text-black' 
        />
        <input 
          name="email"
          type="email"  
          placeholder="Email" 
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 mb-3 border border-gray-300 rounded-md text-black"
        />
        <input 
          name="password"
          type="password" 
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full p-2 mb-3 border border-gray-300 rounded-md text-black"
        />
        <input 
          name="confirmPassword"
          type="password" 
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          className="w-full p-2 mb-3 border border-gray-300 rounded-md text-black"
        />

        <button 
          type="submit" 
          className="bg-red-700 text-white px-5 py-2 rounded-md hover:bg-red-600 w-full"
        >
          Sign Up
        </button>
        <div className='text-base font-extralight mt-3 text-center'>
          <p>Already have an account? 
            <span onClick={toggleForm} className="cursor-pointer text-red-700 hover:text-red-950 ml-1">
              Login
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;

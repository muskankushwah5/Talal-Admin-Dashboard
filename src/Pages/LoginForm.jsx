import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to your server to authenticate the user
      await axios.post('/api/login', formData);
      alert('Login successful!'); // Show a success message
      onClose(); // Close the modal
    } catch (error) {
      alert('Login failed. Please check your credentials.'); // Show an error message
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;

import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to your server to register the user
      await axios.post('/api/register', formData);
      alert('Registration successful!'); // Show a success message
      onClose(); // Close the modal
    } catch (error) {
      alert('Registration failed. Please try again.'); // Show an error message
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;

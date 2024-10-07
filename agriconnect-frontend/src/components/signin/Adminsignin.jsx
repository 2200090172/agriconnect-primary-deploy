import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import './Adminsignin.css';  // Import your CSS

const AdminSignin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();  // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add authentication logic here
    if (email === 'admin@example.com' && password === 'admin123') {
      alert('Successfully signed in as admin!');
      navigate('/adminhome');  // Redirect to AdminHome page
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="wrapper">
      <div className="container">
        <h1 className="heading">Admin Sign In</h1>
        <form onSubmit={handleSubmit} className="form">
          <div className="inputGroup">
            <label className="label">Email</label>
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="input"
            />
          </div>
          <div className="inputGroup">
            <label className="label">Password</label>
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="input"
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit" className="button">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default AdminSignin;

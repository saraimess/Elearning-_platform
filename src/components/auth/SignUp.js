import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/auth.css';

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    cardNumber: '',
    firstName: '',
    lastName: '',
    year: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.cardNumber || !formData.firstName || !formData.lastName || 
        !formData.year || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Mock signup - replace with your actual API call
    try {
      // Store user info in localStorage or your preferred state management
      localStorage.setItem('user', JSON.stringify({
        cardNumber: formData.cardNumber,
        firstName: formData.firstName,
        lastName: formData.lastName,
        year: formData.year,
        email: formData.email,
        role: 'student'
      }));
      
      // Redirect to dashboard
      navigate('/dashboard');
    } catch (err) {
      setError('An error occurred during registration');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError(''); // Clear error when user types
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Create Account</h2>
        <p className="auth-subtitle">Please fill in your information</p>
        
        <form className="auth-form" onSubmit={handleSubmit}>
          {error && <div className="error-message">{error}</div>}
          
          <div className="form-group">
            <label>Student Card Number</label>
            <input
              type="text"
              name="cardNumber"
              placeholder="Enter your student card number"
              value={formData.cardNumber}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Year of Study</label>
            <select 
              name="year" 
              value={formData.year}
              onChange={handleChange}
            >
              <option value="">Select your year</option>
              <option value="1">1st Year</option>
              <option value="2">2nd Year</option>
              <option value="3">3rd Year</option>
              <option value="4">4th Year</option>
              <option value="5">5th Year</option>
            </select>
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="submit-btn">
            Sign Up
          </button>
        </form>

        <p className="auth-footer">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp; 
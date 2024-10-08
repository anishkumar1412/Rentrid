import React, { useState } from 'react';
import './Signup.css'; // We will define the CSS separately
import Signupimg from '../../../public/singup-image.png'
import logo from '../../../public/logo.png'

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    occupation: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <img src={logo} className="logo" alt = "Rentrid"/>
        <img src={Signupimg} alt="Key and Car" />
      </div>
      <div className="signup-right">
        <h2>Signup into your account!</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <input 
              type="text" 
              name="firstName" 
              placeholder="First Name" 
              value={formData.firstName} 
              onChange={handleChange} 
              required
            />
            <input 
              type="text" 
              name="lastName" 
              placeholder="Last Name" 
              value={formData.lastName} 
              onChange={handleChange} 
              required
            />
          </div>
          <div className="form-row">
            <input 
              type="email" 
              name="email" 
              placeholder="Email Address" 
              value={formData.email} 
              onChange={handleChange} 
              required
            />
            <input 
              type="text" 
              name="phone" 
              placeholder="Phone Number" 
              value={formData.phone} 
              onChange={handleChange} 
              required
            />
          </div>
          <div className="form-row">
            <input 
              type="password" 
              name="password" 
              placeholder="Password" 
              value={formData.password} 
              onChange={handleChange} 
              required
            />
            <input 
              type="password" 
              name="confirmPassword" 
              placeholder="Confirm Password" 
              value={formData.confirmPassword} 
              onChange={handleChange} 
              required
            />
          </div>
          <div className="form-row">
            <select 
              name="occupation" 
              value={formData.occupation} 
              onChange={handleChange}
            >
              <option value="">Click To Select</option>
              <option value="student">Student</option>
              <option value="professional">Professional</option>
              <option value="other">Other</option>
            </select>
          </div>
          <button type="submit" className="continue-btn">CONTINUE</button>
        </form>
        <p>
          Already have an account? <a href="/login">Log In</a>
        </p>
      </div>
    </div>
  );
};

export default Signup; 
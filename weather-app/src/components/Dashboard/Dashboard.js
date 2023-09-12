import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const navigate = useNavigate(); // Get the history object

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError('');
    setPasswordError('');

    if (!validateEmail(email)) {
      setEmailError('Invalid email address');
    }

    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters');
    }

    // If both email and password are valid, you can proceed with form submission
    if (validateEmail(email) && password.length >= 8) {
      // Perform your form submission logic here
      console.log('Form submitted:', email, password); 
      navigate('/weather'); // Replace '/another-page' with your desired URL
       
    }
  };

  return (
    <div>
      <h2>Dashboard</h2>

      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              id="inputEmail3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="text-danger">{emailError}</span>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="inputPassword3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="text-danger">{passwordError}</span>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Log in
        </button>
      </form>
    </div>
  );
}

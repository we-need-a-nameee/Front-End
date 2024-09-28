import React, { useState } from 'react';
// import { GoogleLogin } from 'react-google-login';
import './login.css'; // Import your custom CSS file if you have one
import { GoogleLogin } from '@react-oauth/google';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleGoogleSuccess = (response) => {
    console.log('Google login successful:', response.profileObj);
    // Handle Google login success (e.g., store user info, redirect, etc.)
  };

  const handleGoogleFailure = (response) => {
    console.error('Google login error:', response);
    // Handle Google login error
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., authentication logic)
    console.log('Login submitted:', { email, password });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 bg-dark text-light">
      <div className="card p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center mb-4">Login</h2>

        {/* Google Sign-In */}
        <div className="mb-4">
          <GoogleLogin
            clientId="YOUR_GOOGLE_CLIENT_ID" // Replace with your actual client ID
            buttonText="Login with Google"
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleFailure}
            cookiePolicy={'single_host_origin'}
            className="btn btn-outline-light w-100"
          />
        </div>

        <hr className="my-4" />

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
      </div>
    </div>
  );
}
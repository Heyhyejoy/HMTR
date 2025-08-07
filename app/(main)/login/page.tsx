'use client';

import React, { useState } from 'react';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="login-wrapper" style={{fontFamily: 'noto-sans, sans-serif'}}>
      <form className="login-box mb-4 lowercase" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <p>to get started</p>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <div className="forgot-password mb-5">
          <a href="#">Forgot Password?</a>
        </div>
        <button type="submit">Continue</button>
        <div className="register-link">
          <span>New User? </span><a href="./signup">Register</a>
        </div>
      </form>

      <style jsx>{`
        .login-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          height: calc(100vh - 80px); /* 상단 바 높이만큼 뺀 높이 */
          background-color: #f5f5f5;
        }

        .login-box {
          background: white;
          border-radius: 10px;
          padding: 2rem;
          width: 320px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          text-align: left;
        }

        .login-box h1 {
          margin-bottom: 0;
          font-size: 1.8rem;
          font-weight: bold;
          font-family: 'noto-sans', sans-serif;
        }

        .login-box p {
          margin-top: 0.25rem;
          margin-bottom: 1.5rem;
          color: #555;
          font-size: 1rem;
          font-weight: bold;
          font-family: 'noto-sans', sans-serif;
        }

        .login-box input {
          display: block;
          width: 100%;
          padding: 0.75rem;
          margin-bottom: 1rem;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 1rem;
          font-family: 'noto-sans', sans-serif;
        }

        .login-box input:focus {
          border-color: #007aff;
          outline: none;
        }

        .forgot-password {
          text-align: right;
          margin-bottom: 1rem;
        }

        .forgot-password a {
          font-family: 'noto-sans', sans-serif; 
          font-size: 0.9rem;
          color: #555;
          text-decoration: none;
        }

        button {
          width: 100%;
          background-color: #1e60d1;
          color: white;
          border: none;
          padding: 0.75rem;
          border-radius: 6px;
          font-family: 'noto-sans', sans-serif;
          font-weight: bold;
          font-size: 1rem;
          cursor: pointer;
        }

        button:hover {
          background-color: #134bb5;
        }

        .register-link {
          text-align: center;
          margin-top: 1rem;
          font-family: 'noto-sans', sans-serif;
          color: #555;
          font-size: 0.9rem;
        }

        .register-link a {
          font-family: 'noto-sans', sans-serif;
          font-weight: bold;
          color: #555;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};

export default Login;

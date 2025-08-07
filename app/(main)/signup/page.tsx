'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign Up Data:', formData);
    // TODO: Sign-up API 호출
  };

  return (
    <div className="signup-wrapper">
      <form className="signup-box" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          required
          className="lowercase"
        />
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
        <button type="submit">Create Account</button>
        <p className="login-link">
          Already have an account?{' '}
          <Link href="./login"><strong>Login here</strong></Link>
        </p>
      </form>

      <style jsx>{`
        .signup-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          height: calc(100vh - 80px);
          background-color: #f5f5f5;
        }

        .signup-box {
          background: #fff;
          border-radius: 10px;
          padding: 2rem;
          width: 320px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          text-align: left;
        }

        .signup-box h1 {
          font-size: 1.8rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
          font-weight: bold;
          font-family: 'noto-sans', sans-serif;
        }

        .signup-box input {
          width: 100%;
          padding: 0.75rem;
          margin-bottom: 1rem;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 1rem;
        }

        .signup-box input:focus {
          border-color: #1e60d1;
          outline: none;
        }

        button {
          width: 100%;
          background-color: #1e60d1;
          color: white;
          border: none;
          padding: 0.75rem;
          border-radius: 6px;
          font-size: 1rem;
          font-family: 'noto-sans', sans-serif;
          font-weight: bold;
          cursor: pointer;
        }

        button:hover {
          background-color: #134bb5;
        }

        .login-link {
          text-align: center;
          margin-top: 1rem;
          font-size: 0.9rem;
          font-family: 'noto-sans', sans-serif;
          color: #555;
        }

        .login-link a {
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};

export default SignUp;

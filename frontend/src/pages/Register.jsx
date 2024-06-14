import React, { useState } from 'react';
import { FaUser, FaAt, FaLock } from 'react-icons/fa';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/auth/register', inputs);
      navigate('/login');
    } catch (err) {
      setError(err.response.data);
    }
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleEmailChange = (e) => {
    const { value } = e.target;
    if (validateEmail(value) || value === '') {
      handleChange(e);
      setError('');
    } else {
      setError('Please enter a valid email address.');
    }
  };

  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input type="text" placeholder="username" name="username" onChange={handleChange} />
        <FaUser className="user" />
        <input type="email" placeholder="email" name="email" onChange={handleEmailChange} />
        <FaAt className="lock" />
        <input type="password" placeholder="password" name="password" onChange={handleChange} />
        <FaLock className="lock" />
        <button onClick={handleSubmit}>Register</button>
        {error && <p className="error-message">User Already exits or invalid email</p>}
        <span>
          Do you already have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;

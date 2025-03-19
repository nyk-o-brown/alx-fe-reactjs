import React, { useState } from 'react';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setErrors] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) {
      setErrors('Username is required');
      return;
    }
    if (!email) {
      setErrors('Email is required');
      return;
    }
    if (!password) {
      setErrors('Password is required');
      return;
    }
    setErrors('');
    // Handle form submission logic here
    console.log('Form submitted', { username, email, password });
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Register</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div style={{ marginBottom: '10px' }}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: '100%', padding: '8px', margin: '5px 0' }}
          />
        </label>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '8px', margin: '5px 0' }}
          />
        </label>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '8px', margin: '5px 0' }}
          />
        </label>
      </div>
      <button type="submit" style={{ padding: '10px', backgroundColor: '#333', color: '#fff', border: 'none', borderRadius: '5px' }}>
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
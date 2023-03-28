import { Input, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const EmailForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const sendMail = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch('/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message
        })
      });
      let data = await res.json();
      if (res.ok) {
        alert('Thank you submitting!');
        setName('');
        setEmail('');
        setMessage('');
        setError('');
      } else {
        setError(data.message || 'Opps, something went wrong.');
      }
    } catch (error) {
      console.log(error);
      setError('Opps, something went wrong.');
    }
  };

  return (
    <Box sx={{ maxWidth: 900, p: 4, lineHeight: 1.8 }}>
      <h1>Connect w/ Jamie</h1>
      <form onSubmit={sendMail} action="#">
        <br />
        <div>
          <label htmlFor="name" style={{ marginleft: 0 }}>
            Name:{' '}
          </label>{' '}
          <br />
          <Input
            sx={{
              bgcolor: '#bfbfbf',
              width: 260,
              borderRadius: 1,
              padding: 0.5
            }}
            type="text"
            id="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder=" Your name"
            required
            autoFocus
          />
        </div>

        <div>
          <label htmlFor="email">Email: </label>
          <br />
          <Input
            sx={{
              bgcolor: '#bfbfbf',
              width: 260,
              borderRadius: 1,
              padding: 0.5
            }}
            type="email"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="   Your email"
            required
          />
        </div>

        <div>
          <label htmlFor="message">Message: </label>
          <br />
          <TextField
            sx={{
              bgcolor: '#bfbfbf',
              width: 260,
              borderRadius: 1
            }}
            id="message"
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            placeholder=" Leave a comment"
            required
          />
        </div>
        <br />
        <button
          style={{ bgcolor: '#bfbfbf', fontSize: '1rem', width: 260 }}
          type="submit"
        >
          Send message
        </button>
      </form>
    </Box>
  );
};

export default EmailForm;

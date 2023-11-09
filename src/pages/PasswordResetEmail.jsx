import React, { useState } from 'react';
import { Button, TextField, Container, Typography, Grid } from '@mui/material';
import { API_URL } from '../config';

export default function PasswordResetEmail() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [emailError, setEmailError] = useState('');

  return (
    <Container maxWidth="md">
      <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '60 vh' }}>
        <Grid item xs={188}>
          <Typography variant="h4" align="center" sx={{ marginTop: 25 }}>
            Password Reset
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <form>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              focused
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError('');
              }}
              error={Boolean(emailError)}
              helperText={emailError}
              sx={{ marginTop: 2 }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                if (!validateEmail(email)) {
                  setEmailError('Invalid email address');
                  return;
                }
                else {
                  setEmailError('');
                  setLoading(true);
                  submitPasswordResetRequest(email).then(({ error }) => {
                    if (error) setEmailError(error);
                    setSuccess(true);
                    setLoading(false);
                  }).catch((err) => {
                    console.log(err);
                    setLoading(false);
                  });
                }
              }}
              fullWidth
              sx={{ marginTop: 2 }}
              disabled={loading || success}
            >
              {loading ? 'Loading...' : (success ? 'Check your mail' : 'Send Email')}
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  )
}

function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
};

async function submitPasswordResetRequest(email) {
  const response = await fetch(`${API_URL}/reset`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email })
  });
  const data = await response.json();
  if (!response.ok) {
    return { error: data.message };
  }
  return data;
}
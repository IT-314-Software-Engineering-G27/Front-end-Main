import React, { useState } from 'react';
import { Button, TextField, Container, Typography, Grid } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
export default function PasswordResetOTP() {
  const { resetId } = useParams();
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

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
              label="OTP"
              variant="outlined"
              fullWidth
              value={otp}
              onChange={(e) => {
                setOtp(e.target.value);
                setError('');
              }}
              sx={{ marginTop: 2 }}
              focused
            />
            <TextField
              label="New Password"
              type="password"
              variant="outlined"
              fullWidth
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              sx={{ marginTop: 1 }}
              focused
            />
            {error && <Typography color="error">{error}</Typography>}
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                if (!validatePassword(newPassword)) {
                  setError('Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character');
                  return;
                };
                setLoading(true);
                submitNewPassword({ resetId, otp, password: newPassword }).then(({ error }) => {
                  if (error) setError(error);
                  else navigate('/login');
                  setLoading(false);
                }).catch((err) => {
                  console.log(err);
                  setLoading(false);
                });
              }}
              fullWidth
              sx={{ marginTop: 2 }}
            >
              {loading ? 'Loading...' : 'Submit'}
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  )
}

function validatePassword(password) {
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordPattern.test(password);
};

async function submitNewPassword({ resetId, otp, password }) {
  const response = await fetch(`http://localhost:5000/reset/${resetId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ otp, password })
  });
  const data = await response.json();
  if (!response.ok) {
    return { error: data.message };
  }
  return data;
}
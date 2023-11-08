import React, { useState } from 'react';
import { Button, TextField, Container, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PasswordReset2 from './PasswordReset2';

export default function PasswordReset1() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const navigate = useNavigate(); 

  const handleStep1Submit = () => {
    if (!validateEmail(email)) {
      setEmailError('Invalid email address');
      return;
    }
    else {
        setEmailError('');
        navigate('PasswordReset2');
    }
  };
  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  return (
    <Container maxWidth="md">
      <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '60 vh' }}>
        <Grid item xs={188}>
          <Typography variant="h4" align="center" sx={{ marginTop: 25  }}>
            Password Reset
          </Typography>
        </Grid>
        {step === 1 && (
          <Grid item xs={12}>
            <form>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError(''); 
                }}
                error={Boolean(emailError)} 
                helperText={emailError} 
                sx={{ marginTop:2}} 
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleStep1Submit}
                fullWidth
                sx={{ marginTop: 2 }} 
              >
              SUBMIT
              </Button>
            </form>
          </Grid>
        )}
    </Grid>
</Container>
  )
}

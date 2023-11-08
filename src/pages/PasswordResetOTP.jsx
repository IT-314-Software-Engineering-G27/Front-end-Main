import React, { useState } from 'react';
import { Button, TextField, Container, Typography, Grid } from '@mui/material';

export default function PasswordReset2() {
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [otpError, setOtpError] = useState('');
  const handleStep2Submit = () => {
    if (!validateOTP(otp)) {
        setOtpError('Invalid OTP'); 
        return;
      }
      else {setOtpError(''); }
  };
  const validateOTP = (otp) => {
    return otp === '123456'; // for Example harcoded otp
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
                label="OTP"
                variant="outlined"
                fullWidth
                value={otp}
                onChange={(e) => 
                    {
                        setOtp(e.target.value);
                        setOtpError('');
                    }}
                sx={{ marginTop: 2}} 
              />
              {otpError && <Typography color="error">{otpError}</Typography>} 
              <TextField
                label="New Password"
                type="password"
                variant="outlined"
                fullWidth
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                sx={{ marginTop: 1}} 
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleStep2Submit}
                fullWidth
                sx={{ marginTop: 2 }} 
              >
                Reset Password
              </Button>
            </form>
          </Grid>
        )}
        </Grid>
    </Container>
  )
}

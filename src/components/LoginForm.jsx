import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/session';
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

const LoginForm = () => {
  const auth = useAuth();
  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (auth?.session?.user) {
      navigate('/profile');
    }
  }, [auth?.session?.user]);

  const textFieldStyle = { marginBottom: 10, width: '100%' };

  return (
    <Grid>
      <Paper
        style={{
          padding: 20,
          height: '80vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          overflow: 'auto',
        }}
      >
        <Grid align="center">
          <Avatar style={{ backgroundColor: '#DED7FD' }}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2 style={{ margin: 0 }}>Login</h2>
          <br />
        </Grid>
        <form>
          <TextField
            style={textFieldStyle}
            label="Email"
            placeholder="Enter your email"
            name="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <TextField
            style={textFieldStyle}
            label="Password"
            placeholder="Enter your password"
            type="password"
            name="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={(e) => {
              e.preventDefault();
              auth.login({ email: user.email, password: user.password });
            }}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default LoginForm;

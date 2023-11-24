import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Paper,
  Typography,
  Box,
  Button,
} from '@mui/material';
import { LoremIpsum } from 'lorem-ipsum'
import LoginForm from './LoginForm';
import backgroundImage from '../assets/background.png';

const LoginContainer = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
  };

  const paperStyle = {
    width: '50%',
    marginLeft: '20px',
    height: '80vh',
  };

  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '80vh',
    width: '50%',
    position: 'relative',
  };

  const textOverImageStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    textAlign: 'center',
  };

  const loremIpsum = new LoremIpsum();
  const loremIpsumText = loremIpsum.generateSentences(3);

  return (
    <div style={containerStyle}>
      <Paper elevation={20} style={paperStyle}>
        <LoginForm/>
      </Paper>
      <div style={backgroundImageStyle}>
        <div style={textOverImageStyle}>
          <h1>StartApp for Startups</h1>
          <p>{loremIpsumText}</p>
          <Link to='/register'>
            <Button
              variant="contained"
              color="primary"
            >
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginContainer;

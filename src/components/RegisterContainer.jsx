import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Paper,
  Typography,
  Box,
  Button,
  Tabs,
  Tab,
} from '@mui/material';
import { LoremIpsum } from 'lorem-ipsum'
import RegisterIndividual from './RegisterIndividual';
import RegisterOrganization from './RegisterOrganization';
import backgroundImage from '../assets/background.png';

const RegisterContainer = () => {
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
    height: '100vh',
  };

  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '50%',
    position: 'relative',
  };

  const textOverImageStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white', // Text color
    textAlign: 'center',
  };

  const loremIpsum = new LoremIpsum();
  const loremIpsumText = loremIpsum.generateSentences(3);

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <Paper elevation={20} style={paperStyle}>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab label="Individuals" />
          <Tab label="Organizations" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <RegisterIndividual />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <RegisterOrganization />
        </TabPanel>
      </Paper>
      <div style={backgroundImageStyle}>
        <div style={textOverImageStyle}>
          <h1>StartApp for Startups</h1>
          <p>{loremIpsumText}</p>
          <Link to='/login'>
            <Button
              variant="contained"
              color="primary"
            >
              Login
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterContainer;

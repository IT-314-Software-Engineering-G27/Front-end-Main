import React, { useState } from 'react';
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Checkbox,
} from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

const RegisterOrganization = () => {
  const [page, setPage] = useState(1);

  const paperStyle = {
    padding: 20,
    height: '93.2vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'auto',
  };

  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: '#DED7FD' };
  const marginTop = { marginTop: 10 };

  const textFieldStyle = { marginBottom: 10, width: '100%' };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2 style={headerStyle}>For Organizations</h2>
          <br />
        </Grid>
        <form onSubmit={handleSubmit}>
          {page === 1 && (
            <>
              <TextField
                style={textFieldStyle}
                label="Legal Name"
                placeholder="Enter your company's name"
              />
              <TextField
                style={textFieldStyle}
                label="Email"
                placeholder="Enter your email address"
              />
              <TextField
                style={textFieldStyle}
                label="Phone Number"
                placeholder="Enter your phone number"
              />
              <TextField
                style={textFieldStyle}
                label="Username"
                placeholder="Enter your username"
              />
              <TextField
                style={textFieldStyle}
                label="Password"
                placeholder="Enter your password"
              />
              <TextField
                style={textFieldStyle}
                label="Confirm Password"
                placeholder="Confirm your password"
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleNextPage}
              >
                Next
              </Button>
            </>
          )}

          {page === 2 && (
            <>
              {/* Additional form fields for the second page */}
              <TextField
                style={textFieldStyle}
                label="Headquarter Location"
                placeholder="Enter your headquarter location"
              />
              <TextField
                style={textFieldStyle}
                label="Name of CEO"
                placeholder="Enter the name of your CEO"
              />
              <TextField
                style={textFieldStyle}
                label="Age"
                placeholder="Enter your age"
              />
              <TextField
                style={textFieldStyle}
                label="Year of Establishment"
                placeholder="Enter the year of your establishment"
              />
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </>
          )}
        </form>
      </Paper>
    </Grid>
  );
};

export default RegisterOrganization;

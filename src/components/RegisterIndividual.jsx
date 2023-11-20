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

const RegisterIndividual = () => {
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
          <h2 style={headerStyle}>For Individuals</h2>
          <br />
        </Grid>
        <form onSubmit={handleSubmit}>
          {page === 1 && (
            <>
              <TextField
                style={textFieldStyle}
                label="First Name"
                placeholder="Enter your first name"
              />
              <TextField
                style={textFieldStyle}
                label="Last Name"
                placeholder="Enter your last name"
              />
              <TextField
                style={textFieldStyle}
                label="Email"
                placeholder="Enter your email address"
              />
              <TextField
                style={textFieldStyle}
                label="Mobile Number"
                placeholder="Enter your mobile number"
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
                label="College"
                placeholder="Enter your college name"
              />
              <TextField
                style={textFieldStyle}
                label="Country"
                placeholder="Enter your country"
              />
              <TextField
                style={textFieldStyle}
                label="Age"
                placeholder="Enter your age"
              />
              <TextField
                style={textFieldStyle}
                label="Highest Qualification"
                placeholder="Enter your highest qualification"
              />
              <TextField
                style={textFieldStyle}
                label="Skills"
                placeholder="Mention your skills separated by commas"
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

export default RegisterIndividual;

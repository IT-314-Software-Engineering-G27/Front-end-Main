import React, { useState } from 'react';
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

const LoginOrganization = () => {
  const [page, setPage] = useState(1);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    legalName: '',
    email: '',
    phoneNumber: '',
    username: '',
    password: '',
    confirmPassword: '',
    headquartersLocation: '',
    ceoName: '',
    age: '',
    yearOfEstablishment: '',
  });
  const [openDialog, setOpenDialog] = useState(false);
  const [errorDialogText, setErrorDialogText] = useState('');

  const textFieldStyle = { marginBottom: 10, width: '100%' };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    setErrorDialogText('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const emailRegex = /^\S+@\S+\.\S{2,}$/;
    const phoneRegex = /^\+?\d{1,3}[-.\s]?\d{1,15}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,15}$/;

    let newErrors = {};

    if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Email should be in this format: abc@xyz.com';
    }

    if (!phoneRegex.test(formData.phoneNumber.trim())) {
      newErrors.phoneNumber = 'Phone number should be in this format: +(ISD code)(1-15 digits)';
    }

    if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        'Password must be 8-15 characters, with at least one letter and one digit';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setPage(page + 1);
    } else {
      const errorMessage = Object.values(newErrors).join('\n');
      setErrorDialogText(errorMessage);
      setOpenDialog(true);
    }

    if (Object.keys(newErrors).length === 0 && page === 2) {
      window.location.reload();
    }
  };

  return (
    <Grid>
      <Paper
        style={{
          padding: 20,
          height: '93.2vh',
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
          <h2 style={{ margin: 0 }}>For Organizations</h2>
          <br />
        </Grid>
        <form onSubmit={handleSubmit}>
          {page === 1 && (
            <>
              <TextField
                style={textFieldStyle}
                label="Legal Name"
                placeholder="Enter your legal name"
                name="legalName"
                value={formData.legalName}
                onChange={handleChange}
              />
              <TextField
                style={textFieldStyle}
                label="Email"
                placeholder="Enter your email address"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <TextField
                style={textFieldStyle}
                label="Phone Number"
                placeholder="Enter your phone number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
              <TextField
                style={textFieldStyle}
                label="Username"
                placeholder="Enter your username"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
              <TextField
                style={textFieldStyle}
                label="Password"
                placeholder="Enter your password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <TextField
                style={textFieldStyle}
                label="Confirm Password"
                placeholder="Confirm your password"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Next
              </Button>
            </>
          )}

          {page === 2 && (
            <>
              <TextField
                style={textFieldStyle}
                label="Location of Headquarters"
                placeholder="Enter location of heaquarters"
                name="headquartersLocation"
                value={formData.headquartersLocation}
                onChange={handleChange}
              />
              <TextField
                style={textFieldStyle}
                label="Name of CEO"
                placeholder="Enter name of CEO"
                name="ceoName"
                value={formData.ceoName}
                onChange={handleChange}
              />
              <TextField
                style={textFieldStyle}
                label="Age"
                placeholder="Enter age since establishment"
                name="age"
                value={formData.age}
                onChange={handleChange}
              />
              <TextField
                style={textFieldStyle}
                label="Year of Establishment"
                placeholder="Enter year of establishment"
                name="yearOfEstablishment"
                value={formData.yearOfEstablishment}
                onChange={handleChange}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </>
          )}
        </form>
      </Paper>

      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Error</DialogTitle>
        <DialogContent>
          <DialogContentText>{errorDialogText}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default LoginOrganization;

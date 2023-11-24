import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { API_URL } from '../config';
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

const RegisterIndividual = () => {
  const [page, setPage] = useState(1);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    username: '',
    password: '',
    college: '',
    country: '',
    age: '',
    degree: '',
    skills: '',
    bio: '',
  });
  const [openDialog, setOpenDialog] = useState(false);
  const [errorDialogText, setErrorDialogText] = useState('');
  const navigate = useNavigate();

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
    const phoneRegex = /^\+\d{1,3} \d{3}-\d{3}-\d{4}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,15}$/;
    let newErrors = {};

    if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Email should be in this format: abc@xyz.com';
    }

    if (!phoneRegex.test(formData.mobileNumber.trim())) {
      newErrors.mobileNumber = 'Phone number should be in this format: +(ISD code) xxx-xxx-xxxx';
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
      submitForm({ formData }).then((value) => {
        if (value.error) {
          alert(value.error);
          setPage(1);
        }
        else
          navigate('/login');
      })
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
          <h2 style={{ margin: 0 }}>For Individuals</h2>
          <br />
        </Grid>
        <form onSubmit={handleSubmit}>
          {page === 1 && (
            <>
              <TextField
                style={textFieldStyle}
                label="First Name"
                placeholder="Enter your first name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              <TextField
                style={textFieldStyle}
                label="Last Name"
                placeholder="Enter your last name"
                name="lastName"
                value={formData.lastName}
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
                label="Mobile Number"
                placeholder="Enter your mobile number"
                name="mobileNumber"
                value={formData.mobileNumber}
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
                label="College"
                placeholder="Enter your college name"
                name="college"
                value={formData.college}
                onChange={handleChange}
              />
              <TextField
                style={textFieldStyle}
                label="Country"
                placeholder="Enter your country"
                name="country"
                value={formData.country}
                onChange={handleChange}
              />
              <TextField
                type="number"
                InputProps={{ inputProps: { min: 18, max: 120 } }}
                style={textFieldStyle}
                label="Age"
                placeholder="Enter your age"
                name="age"
                value={formData.age}
                onChange={handleChange}
              />
              <TextField
                style={textFieldStyle}
                label="Highest Qualification"
                placeholder="Enter your highest qualification"
                name="highestQualification"
                value={formData.degree}
                onChange={handleChange}
              />
              <TextField
                style={textFieldStyle}
                label="Skills"
                placeholder="Mention your skills separated by commas"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
              />
              <TextField
                multiline
                rows={4}
                style={textFieldStyle}
                label="Bio"
                placeholder="Enter your bio"
                name="bio"
                value={formData.bio}
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

async function submitForm({ formData }) {
  const individual = {
    first_name: formData.firstName,
    last_name: formData.lastName,
    user: {
      email: formData.email,
      phone_number: formData.mobileNumber,
      username: formData.username,
      password: formData.password,
    },
    college: formData.college,
    country: formData.country,
    age: formData.age,
    degree: formData.highestQualification,
    skills: formData.skills.split(','),
    bio: formData.bio,
  };
  const response = await fetch(`${API_URL}/individuals`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ individual }),
  });
  const data = await response.json();
  if (!response.ok) {
    return {
      error: data.message
    }
  };
  return data;
}

export default RegisterIndividual;

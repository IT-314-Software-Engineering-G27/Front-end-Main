import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Stack, Paper, Typography, Radio, RadioGroup, FormControlLabel, TextField, Checkbox, Button, Container, Box, InputAdornment } from '@mui/material';
import { Person } from '@mui/icons-material';
import PhoneImage from '../Login/Phone.png';
import DocumentImage from '../Login/document.png';
import LogoImage from '../Login/Logo.png';

const Login = () => {
    const [regi, setRegi] = useState('');

    const handleEventChange = (evnt) => {
        setRegi(evnt.target.value);
    };

    return (
        <>
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
                maxWidth="xl"
            >
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '2rem' }}>
                    <Link to=''>
                        <img src={DocumentImage} alt="legal section" style={{ maxWidth: '40px' }} />
                    </Link>
                    <Link to=''>
                        <img src={PhoneImage} alt="contact us" style={{ maxWidth: '40px' }} />
                    </Link>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', padding: '15px', width: '100%', maxWidth: '60vh' }}>
                    <Button variant='contained' sx={{ width: '20vh', borderRadius: '2rem', marginRight: '5vh' }} component={Link} to='/register' >
                        Sign up
                    </Button>
                </Box>
            </Container>
            <Container maxWidth="xl" sx={{
                display: 'flex', flexDirection: {
                    xs: 'column', sm: 'row'
                },
                justifyContent: 'space-between'
            }}>
                <Paper elevation={3} sx={{ padding: '3vh', width: '100%', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <Typography variant="h4">Sign in</Typography>
                    <RadioGroup name="regi" value={regi} onChange={handleEventChange}>
                        <Stack direction={{
                            xs: 'column', sm: 'row'
                        }} spacing={2}>
                            <FormControlLabel value="Individual" control={<Radio />} label="Individual" />
                            <FormControlLabel value="Organisation" control={<Radio />} label="Organisation" />
                        </Stack>
                    </RadioGroup>
                    <Box>
                        <Typography>Email or phone number</Typography>
                        <TextField type="text" sx={{ width: '100%' }} variant='outlined' InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Person />
                                </InputAdornment>
                            ),
                        }}
                            focused />
                    </Box>
                    <Box>
                        <Typography >Password</Typography>
                        <TextField type="password" sx={{ width: '100%' }} focused variant="outlined" />
                    </Box>
                    <Button sx={{ width: '100%', borderRadius: '2em' }} variant='contained' >Sign in</Button>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <FormControlLabel control={<Checkbox color="primary" />} label="Remember me" labelPlacement="end" />
                        <Link to=''>
                            <Typography variant="h6" sx={{ color: 'primary.dark' }}>  Need help?  </Typography>
                        </Link>
                    </Box>
                    <Typography component="div" variant="h6" sx={{ color: 'primary.dark' }}>
                        Don't have an account?
                        <Link to="/register" >  <Typography component="span" variant='inherit' sx={{ color: 'primary.dark' }} >Sign Up  </Typography> </Link>
                    </Typography>
                </Paper>
                <Container sx={{ textAlign: 'center' }}>
                    <img src={LogoImage} alt="startApp logo" style={{ maxWidth: '40vw', aspectRatio: 1 }} />
                </Container>
            </Container>
        </>
    );
};

export default Login;

import { Paper, Box, Typography, Grid, Button } from "@mui/material";
import { useState } from "react";
import OBJ1 from '../images/OBJ1.png';

const commonStyles = {
    bgcolor: 'C5B7FB',
    borderColor: '#2F1263',
    m: 1,
    border: 1,
    width: '5rem',
    height: '5rem',
};

const TourCard2 = () => {

    const [UserName, setUserName] = useState('Lorem_ipsum');
    const [Email, setEmail] = useState('Loum@gmail.com');
    const [Country, setCountry] = useState('Lorem ipsum');


    return (

        <div>
            <Box marginY={2}>
                <Paper elevation={3} >
                    
                    <Box paddingTop={3} display="flex"
                            justifyContent="center"
                            alignItems="center"
                            >
                        <img src={OBJ1} alt="" className="img" />
                    </Box>

                    <Typography style={{ color: '#2F1263' }} align="center" variant="h7" component="h3">
                        {UserName}
                    </Typography>

                    <Box textAlign="center" padding={2}>
                        <Button variant="contained" Link to='' >
                            Edit Profile
                        </Button>
                    </Box>

                    <Box paddingX={3} >
                        <Box paddingBottom={2}>
                            <Paper elevation={2} >

                                <Typography style={{ color: '#2F1263' }} paddingLeft={1}>
                                    User Name
                                </Typography>
                                <Typography style={{ color: '#2F1263' }} paddingLeft={1} paddingBottom={1} variant="body" component="h3">
                                    {UserName}
                                </Typography>
                            </Paper>
                        </Box>

                        <Box paddingBottom={2}>
                            <Paper elevation={2} >
                                <Typography style={{ color: '#2F1263' }} paddingLeft={1} >
                                    Email
                                </Typography>
                                <Typography style={{ color: '#2F1263' }} paddingBottom={1} paddingLeft={1} variant="body" component="h3">
                                    {Email}
                                </Typography>
                            </Paper>
                        </Box>


                        <Box paddingBottom={2}>
                            <Paper elevation={2} >
                                <Typography style={{ color: '#2F1263' }} paddingLeft={1} >
                                    Country
                                </Typography>
                                <Typography style={{ color: '#2F1263' }} paddingBottom={1} paddingLeft={1} variant="body" component="h3">
                                    {Country}
                                </Typography>
                            </Paper>
                        </Box>
                    </Box>
                </Paper>
            </Box>

        </div>

    );
}

export default TourCard2;
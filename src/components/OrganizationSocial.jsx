import { Box, Grid, Paper, Typography } from "@mui/material";
import { useState } from "react";
import { useAuth } from "../contexts/session";

const Organizationsocial = ({ id }) => {
    const auth = useAuth();
    const [Connection, setConnection] = useState(0);
    const [RegisterdComp, setRegisterdComp] = useState(0);
    const [body, setBody] = useState('Body');

    if (auth?.user?.organization !== id) {
        return (<></>);
    }

    return (
        <div>
            <Grid >

                <Grid item xs={6} marginY={3}>
                    <Paper elevation={3}>
                        <Box paddingX={2}>
                            <Typography variant="h5" component="h2" style={{ color: '#2F1263' }}>
                                {Connection}
                            </Typography>

                            <Box>
                                <Typography variant="subtitle2" component="h1" style={{ color: '#2F1263' }}>
                                    Your Connection
                                </Typography>



                            </Box>
                        </Box>
                    </Paper>
                </Grid>


                <Grid item xs={6} marginY={2}>
                    <Paper elevation={3}>
                        <Box paddingX={2}>
                            <Typography variant="h5" component="h2" style={{ color: '#2F1263' }}>
                                {RegisterdComp}
                            </Typography>
                            <Box>
                                <Typography variant="subtitle2" component="h1" style={{ color: '#2F1263' }}>
                                    Open Positions
                                </Typography>

                            </Box>
                        </Box>
                    </Paper>
                </Grid>



            </Grid>

        </div>
    );
}

export default Organizationsocial;

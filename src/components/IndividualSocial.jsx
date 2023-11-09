import { Box, Grid, Paper, Typography } from "@mui/material";
import { useAuth } from "../contexts/session";
import { API_URL } from "../config";

const IndividualSocial = ({ id }) => {
    const auth = useAuth();
    
    if (id !== auth?.session?.individual) {
        return <></>;
    }
    return (
        <div>
            <Grid >
                <Grid item xs={6} marginY={2}>
                    <Paper elevation={3}>
                        <Box paddingX={2}>
                            <Typography variant="h5" component="h2" style={{ color: '#2F1263' }}>
                                
                            </Typography>
                            <Box>
                                <Typography variant="subtitle2" component="h1" style={{ color: '#2F1263' }}>
                                    Company You Registerd
                                </Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>

        </div>
    );
}


async function fetchApplications({ token }) {
    const response = await fetch(`${API_URL}/job-applications`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const data = await response.json();
    return data.payload.jobApplications;
};

export default IndividualSocial;

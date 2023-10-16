
import { Container, Grid, Paper, Box, colors } from '@mui/material';
import OrganizationMenu from '../components/OrganizationMenu';
import OrganizationProfile from '../components/OrganizationProfile';
import OrganizationSocial from '../components/OrganizationSocial';
import OrganizationSearchBar from '../components/OrganizationSearchBar';

function App() {

    return (
        <div>

            <Container>
                <Box backgroundColor='blue'>
                    <Paper >
                        <OrganizationSearchBar />

                        <Grid container spacing={4}>

                            <Grid item xs={1}>
                                <Box marginY={2}>
                                    <Paper elevation={3} >
                                        <OrganizationMenu />
                                    </Paper>
                                </Box>
                            </Grid>

                            <Grid item xs={4}>
                                <Box margin={2}>
                                    <OrganizationProfile />
                                </Box>
                            </Grid>

                            <Grid item xs={6.5}>
                                <OrganizationSocial />
                            </Grid>

                        </Grid>
                    </Paper>
                </Box>
            </Container>

        </div>
    );
}

export default App;

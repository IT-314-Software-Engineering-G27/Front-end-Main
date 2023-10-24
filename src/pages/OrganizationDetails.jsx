
import { Container, Grid, Paper, Box, colors, Stack } from '@mui/material';
import OrganizationMenu from '../components/OrganizationMenu';
import OrganizationProfile from '../components/OrganizationProfile';
import OrganizationSocial from '../components/OrganizationSocial';
import OrganizationSearchBar from '../components/OrganizationSearchBar';
import PostCard from '../components/PostCard';


const post_ids = [1, 2, 3];

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
                                <Stack container padding={2} gap={2}>
                                    {post_ids.map((id) => (
                                        <PostCard id={id} />
                                    ))}
                                </Stack>
                            </Grid>

                        </Grid>
                    </Paper>
                </Box>
            </Container>

        </div>
    );
}

export default App;


import { Container, Grid, Paper, Box, colors, Stack, Card, Divider, Typography } from '@mui/material';
import OrganizationMenu from '../components/OrganizationMenu';
import OrganizationProfile from '../components/OrganizationProfile';
import OrganizationSocial from '../components/OrganizationSocial';
import OrganizationSearchBar from '../components/OrganizationSearchBar';
import PostCard from '../components/PostCard';
import { blue } from '@mui/material/colors';


const post_ids = [1, 2, 3];

function App() {

    return (
        <div>

            
                <Box margin={2}>
                    <Paper >
                    <Box backgroundColor='#000085'>
                    <OrganizationSearchBar />
                    </Box>
                       

                        <Grid container spacing={4}>

                            <Grid item xs={0.9}>
                                <Box marginY={2}>
                                    <Paper elevation={2} >
                                        <OrganizationMenu />
                                    </Paper>
                                </Box>
                            </Grid>

                            <Grid item xs={3.5}>
                                <Box margin={2}>
                                    <OrganizationProfile />
                                </Box>
                            </Grid>

                            <Grid item xs={7}>
                                <OrganizationSocial />
                               
                                <Card style={{ height: "calc(77vh - 200px)" }}>
                                        <Box>
                                        <Divider />
                                        <Box display="flex" alignItems="center">
                                            <Typography style={{ color: '#2F1263' }}  variant="body" component="h3">
                                            My Post
                                            </Typography>
                                        </Box>
                                        <Divider />
                                        <Box
                                        // bgcolor="green"
                                            style={{
                                            overflowY: "auto",
                                            maxHeight: "350px",
                                            display: "flex",
                                            flexGrow: 1,
                                            flexDirection: "column"
                                            }}>
                                        
                                       
                                             <Stack container padding={2} gap={2}>
                                                {post_ids.map((id) => (
                                                    <PostCard id={id} />
                                                ))}
                                            </Stack>
                                        </Box>
                                        </Box>
                                    </Card>
                            </Grid>

                        </Grid>
                    </Paper>
                </Box>
           

        </div>
    );
}

export default App;

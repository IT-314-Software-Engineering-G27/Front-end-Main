import { Container, Grid, Paper, Box, Stack, Card, Divider, Typography } from '@mui/material';
import IndividualMenu from '../components/IndividualMenu';
import IndividualProfile from '../components/IndividualProfileSection';
import IndividualSocial from '../components/IndividualSocial';
import IndividualSearchBar from '../components/IndividualSearchBar';
import PostCard from '../components/PostCard';
import { AppBar, IconButton, Toolbar, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const post_ids = [1, 2, 3];

function App() {
    return (
        <Container maxWidth="xl"  style={{ height: "100vh" }}>
            <Paper style={{ height: "100%" }}>
                <Box backgroundColor='#000085'>
                    <IndividualSearchBar />
                </Box>

                <Grid container spacing={4}>
                    <Grid item xs={1.5} md={0.5}>
                        <Box paddingY={2}>
                            
                                <IndividualMenu />
                            
                        </Box>
                    </Grid>

                    <Grid item xs={10} md={3}>
                        <Box marginX={5}>
                            <IndividualProfile />
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={7}>
                        <IndividualSocial />

                        <Card style={{ minHeight: "calc(77vh - 200px)" }}>
                            <Box>
                                <Divider />
                                <Box display="flex" alignItems="center">
                                    <Typography style={{ color: '#2F1263' }} variant="body1" component="h3">
                                        My Post
                                    </Typography>
                                </Box>
                                <Divider />
                                <Box
                                    style={{
                                        overflowY: "auto",
                                        maxHeight: "410px",
                                        display: "flex",
                                        flexGrow: 1,
                                        flexDirection: "column"
                                    }}>
                                    <Stack container spacing={2}>
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
        </Container>
    );
}

export default App;

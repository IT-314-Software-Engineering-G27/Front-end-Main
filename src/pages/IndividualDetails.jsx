
import { Container, Grid, Paper, Box, Stack,Divider,Typography,Card } from '@mui/material';
import IndividualMenu from '../components/IndividualMenu'
import IndividualProfile from '../components/IndividualProfileSection';
import IndividualSocial from '../components/IndividualSocial';
import SearchAppBar from '../components/IndividualSearchBar';
import PostCard from '../components/PostCard';


const post_ids = [1, 2, 3];

function IndividualDetails() {

    return (

        
        <div>


            <Box margin={2} >
                <Paper >
                    <Box backgroundColor='#000085'>
                        <SearchAppBar />
                    </Box>


                    <Grid container spacing={4}>

                        <Grid item xs={1}>
                            <Box marginY={2}>
                                    <IndividualMenu />
                            </Box>
                        </Grid>

                        <Grid item xs={4}>
                            <Box margin={2}>
                                <IndividualProfile />
                            </Box>
                        </Grid>

                        <Grid item xs={6.5}>
                            <IndividualSocial />

  
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

export default IndividualDetails;

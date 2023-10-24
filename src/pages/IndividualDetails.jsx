
import { Container, Grid, Paper, Box, Stack } from '@mui/material';
import IndividualMenu from '../components/IndividualMenu'
import IndividualProfile from '../components/IndividualProfileSection';
import IndividualSocial from '../components/IndividualSocial';
import SearchAppBar from '../components/IndividualSearchBar';
import PostCard from '../components/PostCard';

const post_ids = [1, 2, 3];

function IndividualDetails() {

    return (
        <div>


            <Box margin={2} paddingX={7}>
                <Paper >
                    <Box backgroundColor='#000085'>
                        <SearchAppBar />
                    </Box>


                    <Grid container spacing={4}>

                        <Grid item xs={1}>
                            <Box marginY={2}>
                                <Paper elevation={3} >
                                    <IndividualMenu />
                                </Paper>
                            </Box>
                        </Grid>

                        <Grid item xs={4}>
                            <Box margin={2}>
                                <IndividualProfile />
                            </Box>
                        </Grid>

                        <Grid item xs={6.5}>
                            <IndividualSocial />
                            <Stack container padding={2} gap={2}>
                                {post_ids.map((id) => (
                                    <PostCard id={id} />
                                ))}
                            </Stack>
                        </Grid>

                    </Grid>
                </Paper>
            </Box>


        </div>
    );
}

export default IndividualDetails;

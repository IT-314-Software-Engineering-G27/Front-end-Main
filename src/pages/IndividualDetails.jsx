
import { Container, Grid, Paper, Box } from '@mui/material';
import IndividualMenu from '../components/IndividualMenu'
import IndividualProfile from '../components/IndividualProfileSection';
import IndividualSocial from '../components/IndividualSocial';
import SearchAppBar from '../components/IndividualSearchBar';
import PostCard from '../components/PostCard';

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
                                {/* <PostCard/> */}
                            </Grid>

                        </Grid>
                    </Paper>
                </Box>
            

        </div>
    );
}

export default IndividualDetails;

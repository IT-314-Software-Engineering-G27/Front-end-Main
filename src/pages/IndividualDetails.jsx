import { Container, Grid, Paper, Box, Stack, Divider, Typography, Skeleton } from '@mui/material';
import IndividualMenu from '../components/IndividualMenu';
import IndividualProfile from '../components/IndividualProfile';
import IndividualSearchBar from '../components/IndividualSearchBar';
import PostCard from '../components/PostCard';
import { useParams, useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { API_URL } from '../config';
import IndividualJobList from '../components/IndividualJobList';

function IndividualDetails() {
    const { individualId } = useParams();
    const [searchparams, setSearchParams] = useSearchParams();
    const { data: individual } = useQuery({
        queryKey: ["individual", { id: individualId }],
        queryFn: () => fetchIndividual({ id: individualId })
    });

    if (!individual) {
        return <Skeleton variant="rectangular" height="80vh" />;
    };

    return (
        <Container maxWidth="xl" style={{ height: "100vh" }}>
            <Paper sx={{ height: "100%" }}>
                

                <Grid container={true} spacing={4} >
                   

                    <Grid item xs={10} md={4} >
                        <IndividualProfile individual={individual} />
                    </Grid>

                    <Grid item xs={12} md={7} marginTop={2}>
                        <Paper sx={{ padding: "1rem" }}>
                            <Typography sx={{ textAlign: "center" }} variant="h5">   Bio   </Typography>
                            <Divider />
                            <Typography sx={{fontSize : '16px'}}>
                                {"  "} {individual.bio}
                            </Typography>
                           
                            {individual.user.posts.length > 0 ? <>
                                <Typography sx={{ textAlign: "center", marginTop: "1rem" }} variant="h5"> Posts</Typography>
                                <Divider />
                                <Stack container spacing={2} padding={4} sx={{ overflowY: "scroll", maxHeight: "80vh" }}>
                                    {individual.user.posts.map((post) => (
                                        <Grid item key={post}>
                                            <PostCard id={post} />
                                        </Grid>
                                    ))}
                                </Stack>
                            </> : <Typography sx={{ textAlign: "center", marginTop: "1rem"  }} variant="h5"> No Posts</Typography>}
                        </Paper>
                    </Grid>
                </Grid>
                <Paper sx={{ padding: "4rem" }}>
                {searchparams.get("profile") && <IndividualJobList />}
            </Paper>
            </Paper>
           
        </Container>
    );
}

async function fetchIndividual({ id }) {
    const response = await fetch(`${API_URL}/individuals/${id}`);
    const data = await response.json();
    return data.payload.individual;
}

export default IndividualDetails;

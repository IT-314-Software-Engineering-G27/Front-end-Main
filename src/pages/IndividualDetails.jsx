import { Container, Grid, Paper, Box, Stack, Card, Divider, Typography, Skeleton } from '@mui/material';
import IndividualMenu from '../components/IndividualMenu';
import IndividualProfile from '../components/IndividualProfileSection';
import IndividualSocial from '../components/IndividualSocial';
import IndividualSearchBar from '../components/IndividualSearchBar';
import PostCard from '../components/PostCard';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { API_URL } from '../config';

function IndividualDetails() {
    const { individualId } = useParams();
    const { data: individual } = useQuery({
        queryKey: ["individual", { id: individualId }],
        queryFn: () => fetchIndividual({ id: individualId })
    });

    if (!individual) {
        return <Skeleton variant="rectangular" height="80vh" />;
    };

    return (
        <Container maxWidth="xl" style={{ height: "100vh" }}>
            <Paper style={{ height: "100%" }}>
                <Box backgroundColor='#000085'>
                    <IndividualSearchBar />
                </Box>

                <Grid container spacing={4}>
                    <Grid item xs={2} md={1}>
                        <Box paddingY={2}>
                            <IndividualMenu />
                        </Box>
                    </Grid>

                    <Grid item xs={10} md={4} >
                        <IndividualProfile individual={individual} />
                    </Grid>

                    <Grid item xs={12} md={7}>
                        <IndividualSocial id={individualId} />

                        <Card style={{ minHeight: "calc(77vh - 200px)" }}>
                            <Box>
                                <Divider />
                                <Box display="flex" alignItems="center">
                                    <Typography style={{ color: '#2F1263' }} variant="h6">
                                        Posts:
                                    </Typography>
                                </Box>
                                <Divider />
                                <Stack container spacing={2} padding={4} sx={{ overflowY: "scroll" }}>
                                    {individual.user.posts.map((post) => (
                                        <Grid item key={post}>
                                            <PostCard id={post} />
                                        </Grid>
                                    ))}
                                </Stack>
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}

async function fetchIndividual({ id }) {
    const response = await fetch(`${API_URL}/individuals/${id}`);
    const data = await response.json();
    console.log(data);
    return data.payload.individual;
}

export default IndividualDetails;

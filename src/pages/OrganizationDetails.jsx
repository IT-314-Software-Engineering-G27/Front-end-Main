import { Container, Grid, Paper, Stack, Divider, Typography, Skeleton } from '@mui/material';
import OrganizationProfile from '../components/OrganizationProfile';
import PostCard from '../components/PostCard';
import { useParams, useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { API_URL } from '../config';
import OrganizationJobList from '../components/OrganizationJobList';
import OrganizationEventList from '../components/OrganizationEventList';

function OrganizationDetails() {
    const { organizationId } = useParams();
    const [searchparams, setSearchParams] = useSearchParams();

    const { data: organization } = useQuery({
        queryKey: ["individual", { id: organizationId }],
        queryFn: () => fetchOrganization({ id: organizationId })
    });

    if (!organization) {
        return <Skeleton variant="rectangular" height="80vh" />;
    };

    return (
        <Container maxWidth="xl">
            <Paper sx={{ height: "100vh" }}>


                <Grid container spacing={4} >


                    <Grid item xs={10} md={4}>
                        <OrganizationProfile organization={organization} />
                    </Grid>

                    <Grid item xs={12} md={7} marginTop={2}>
                        <Paper sx={{ padding: "1rem" }}>
                            <Typography sx={{ textAlign: "center" }} variant="h5">  Who we are?  </Typography>
                            <Typography variant="body2">
                                {"  "} {organization.description}
                            </Typography>
                            <Divider sx={{ marginY: "1rem" }} />
                            {organization.user.posts.length > 0 ? <>
                                <Typography sx={{ textAlign: "center" }} variant="h5"> Posts</Typography>
                                <Divider />
                                <Stack container spacing={2} padding={4} sx={{ overflowY: "scroll", maxHeight: "60vh" }}>
                                    {organization.user.posts.map((post) => (
                                        <Grid item key={post}>
                                            <PostCard id={post} />
                                        </Grid>
                                    ))}
                                </Stack>
                            </> : <Typography sx={{ textAlign: "center" }} variant="h5"> No Posts</Typography>}
                        </Paper>
                    </Grid>
                </Grid>
                <Paper sx={{ padding: "4rem" }}>
                    {organization.job_profiles && <OrganizationJobList jobProfiles={organization.job_profiles} />}
                </Paper>
                <Paper sx={{ padding: "4rem" }}>
                    {searchparams.get("profile") && <OrganizationEventList />}
                </Paper>
            </Paper>

        </Container>
    );
}


async function fetchOrganization({ id }) {
    const response = await fetch(`${API_URL}/organizations/${id}`);
    const data = await response.json();
    return data.payload.organization;
}



export default OrganizationDetails;

import React from 'react';
import { useParams } from 'react-router-dom';
import { CircularProgress, Container, Paper, Typography, Divider, Grid, ImageList, ImageListItem, Box, } from '@mui/material';
import { API_URL } from '../config';
import { useQuery } from '@tanstack/react-query';
import OrganizationCard from '../components/OrganizationCard';
import EventCard from '../components/EventCard';

export default function StartupDetails() {
    const { startupId } = useParams();

    const { data: startup } = useQuery({
        queryKey: ["startup-basic", {
            id: startupId,
        }],
        queryFn: () => fetchStartUp({ id: startupId, }),
    });

    if (!startup) {
        return (
            <Container maxWidth="md">
                <Paper elevation={3} style={{ padding: '2rem' }}>
                    <CircularProgress color="primary" />
                </Paper>
            </Container>
        );
    }

    return (
        <Paper maxWidth="xl" sx={{ padding: "3rem" }}>
            <Grid sx={{
                borderRadius: "10px",
                background: "rgba(92, 36, 179, 0.2)",
                boxShadow: " 7px 7px rgba(0, 0 , 0, 0.1)",
            }} spacing={3} container>
                <Grid item xs={12} md={8} sx={{ padding: '2rem', }}>
                    <Typography variant="h4" gutterBottom> {startup.title}</Typography>
                    <Divider />
                    <Typography variant="h6" gutterBottom> {startup.description}</Typography>
                    <ImageList sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", gap: "1rem", padding: "1rem" }}>
                        {startup.images.map((item) => (
                            <ImageListItem key={item}>
                                <img src={item} height={200} width={200} alt={item} />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Grid>
                <Grid item xs={10} md={4} sx={{ padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'top', gap: '1rem' }}>
                    <Divider sx={{ borderBottomWidth: '10px' }}>
                        <Typography variant="h5" gutterBottom sx={{ textAlign: "center" }}> Organization </Typography>
                    </Divider>
                    <Box sx={{ maxHeight: "50vh" }} ><OrganizationCard id={startup.organization} /> </Box>
                    <Divider sx={{ borderBottomWidth: '10px' }}>
                        <Typography variant="h5" gutterBottom sx={{ textAlign: "center" }}>  Event </Typography>
                    </Divider>
                    <Box sx={{ maxHeight: "50vh" }} ><EventCard id={startup.event} /> </Box>
                </Grid>
            </Grid>
        </Paper>
    );
}

async function fetchStartUp({ id }) {
    const response = await fetch(`${API_URL}/registrations/${id}`);
    const data = await response.json();
    return data.payload.registration;
}
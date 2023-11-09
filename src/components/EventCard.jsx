import React from "react";
import { Button, Card, CardActions, CardContent, CardHeader, Divider, Grid, Skeleton, Typography, } from "@mui/material";
import { Link } from "react-router-dom";
import { EventAvailable, Category, AccessTimeFilled } from "@mui/icons-material";
import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../config";

export default function EventCard({ id }) {

    const { data: event } = useQuery({
        queryKey: ["event-card", id],
        queryFn: () => fetchEvent({ id }),
    });

    if (!event) return <Skeleton height={4} />;
    return (
        <Card
            sx={{
                border: `1px solid black`,
                height: "100%",
                width: "100%",
                overflow: "clip",
                display: "flex",
                backgroundColor: 'white',
                borderRadius: "10px",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: " 7px 7px rgba(0, 0, 0, 0.15)",
                padding: "1rem",
            }}
        >

            <Grid item xs={12} md={8} sx={{ padding: "0px" }}>
                <CardHeader
                    titleTypographyProps={{ variant: "h6" }}
                    title={`${event.title}`}
                    sx={{ color: "black", pt: 0, pb: 0, }}
                />
                <CardContent
                    sx={{
                        pt: "10px",
                    }}>
                    <Grid container spacing={1} alignItems="center">
                        <Grid item>
                            <EventAvailable />
                        </Grid>
                        <Grid item xs>
                            <Typography variant="body1" gutterBottom>
                                From {`${new Date(event.start_time).toLocaleString()}`} to {`${new Date(event.end_time).toLocaleString()}`}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="center">
                        <Grid item>
                            <AccessTimeFilled />
                        </Grid>
                        <Grid item xs>
                            <Typography variant="body1" gutterBottom>
                                Registration deadline: {`${new Date(event.last_registration_date).toLocaleString()}`}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="center">
                        <Grid item>
                            <Category />
                        </Grid>
                        <Grid item xs>
                            <Typography variant="body1" gutterBottom>
                                {`${event.frequency}`}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Grid>
            <Divider />
            <CardActions sx={{ marginTop: "auto", display: "flex", justifyContent: "center" }}>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    component={Link}
                    to={`/events/${id}`}
                    sx={{
                        width: '50%',
                        margin: 'auto',
                        transition: 'background-color 0.3s, transform 0.3s',
                        boxShadow: " 5px 5px rgba(163, 23, 205, 0.1)",
                        '&:hover': {
                            backgroundColor: 'secondary.main',
                            transform: 'scale(1.05)',
                        },
                    }}
                >
                    Read more
                </Button>
            </CardActions>
        </Card>
    );
}

async function fetchEvent({ id }) {
    const response = await fetch(`${API_URL}/events/${id}/basic`);
    const data = await response.json();
    return data.payload.event;
}

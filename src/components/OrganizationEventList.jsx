import { useAuth } from "../contexts/session";
import { API_URL } from "../config";
import { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import EventCard from "./EventCard";

export default function OrganizationEventList() {
    const auth = useAuth();
    const [events, setEvents] = useState([]);

    useEffect(() => {
        if (auth?.session?.user?.organization)
            fetchEvents({ token: auth.session.token }).then((events) => {
                setEvents(events);
            });
    }, [auth?.session]);

    if (!auth?.session?.token) return <></>;

    return (<>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant="h3" gutterBottom component="div">
                Events
            </Typography>
        </Box>
        {!events.length && <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant="h5" gutterBottom component="div">
                No events yet
            </Typography>
        </Box>}<Grid container spacing={3}>
            {events.map((id) => (
                <Grid item key={id} xs={12} sm={6} md={4}>
                    <EventCard id={id} />
                </Grid>
            ))}
        </Grid>
    </>);
};

async function fetchEvents({ token }) {
    const response = await fetch(`${API_URL}/organizations/events`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const data = await response.json();
    return data.payload.events;
};
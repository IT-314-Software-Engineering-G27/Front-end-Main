import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EventsData from '../database/event';
import {
    Avatar,
    Box,
    CircularProgress,
    Container,
    Paper,
    Typography,
} from '@mui/material';

function EventDetail() {
    const { eventId } = useParams();
    const [Event, setEvent] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        EventsData.fetchEvent(eventId)
            .then((EventsData) => {
                setEvent(EventsData);
            })
            .catch((error) => {
                setError(error);
            });
    }, [eventId]);

    if (error) {
        return (
            <Container maxWidth="md">
                <Paper elevation={3} style={{ padding: '2rem' }}>
                    <Typography variant="h5" color="error">
                        Error: {error.message}
                    </Typography>
                </Paper>
            </Container>
        );
    }

    if (!Event) {
        return (
            <Container maxWidth="md">
                <Paper elevation={3} style={{ padding: '2rem' }}>
                    <CircularProgress color="primary" />
                </Paper>
            </Container>
        );
    }

    return (
        <Container 
        style={{
            position : "relative",
            top  : "3rem",
            padding: "3rem",
            background: "rgba(92, 36, 179, 0.2)",
            borderRadius: "10px",
            boxShadow: " 7px 7px rgba(0, 0 , 0, 0.1)",
          }}>
        <Paper  style={{
            padding: '2rem', backgroundColor: '#f5f5f5',
            border : "1px solid rgb(0 ,0, 0, 1 )",
            boxShadow: " 7px 7px rgba(163, 23, 205, 0.1)",
        
        }}>

                <Typography variant="subtitle1">
                    {"Organized by "}
                </Typography>
                <Box display="flex" alignItems="center">
                    <Avatar src={`${Event.logo}`} sx={{ width: 40, height: 40 }} variant="rounded" />
                    <Box marginLeft="1rem">


                        <Typography variant="h6">
                            {`${Event.organized_by}`}
                        </Typography>

                    </Box>
                </Box>
                <Typography variant="h6">
                    Event on: {`${Event.date.toLocaleDateString()}`} at {`${Event.location}`} every {`${Event.type}`}
                </Typography>


                <Typography variant="h6">
                    Last Date for Registration : {`${Event.last_registration_date}`}
                </Typography>
                <Typography variant="h6">
                    Event fees :   {`${Event.registration_fees}`} $
                </Typography>

                <Typography variant="h6">
                    <img
                        src={`${Event.img}`}
                        alt="Fake"
                        style={{
                            padding: '2rem',
                            display: 'block',
                            margin: '0 auto',
                            maxWidth: '100%',
                            textAlign: 'center',
                        }} />
                </Typography>
                <Typography variant="h6">
                    {`${Event.description}`}
                </Typography>

            </Paper>
        </Container>
    );
}

export default EventDetail;
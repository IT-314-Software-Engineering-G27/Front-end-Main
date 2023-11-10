import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowBackRounded as ArrowBackRoundedIcon, CalendarTodayOutlined as CalendarTodayOutlinedIcon, BarChartRounded as BarChartRoundedIcon, AccessTimeRounded as AccessTimeRoundedIcon } from "@mui/icons-material";
import { Button, Divider, Box, CircularProgress, Container, Paper, Typography, } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { API_URL } from "../config";
import { useAuth } from "../contexts/session";

export default function EventDetails() {
  const { eventId } = useParams();
  const auth = useAuth();

  const { data: event } = useQuery({
    queryKey: ['event', { id: eventId }],
    queryFn: () => fetchEvent({ id: eventId }),
  });

  if (!event) {
    return (
      <Container maxWidth="md">
        <Paper elevation={3} style={{ padding: '2rem' }}>
          <CircularProgress color="primary" />
        </Paper>
      </Container>
    );
  }

  return (
    <>
      <Box sx={{ borderRadius: "40px", p: 2, display: "flex", flexDirection: "row", p: 2, width: "15%", justifyContent: "center", alignItems: "center", ml: 6, }}>
        <ArrowBackRoundedIcon />
        <Link to="/events">
          <Typography sx={{ color: "#376FFF" }} variant='h6'>
            See all events
          </Typography>
        </Link>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", mx: 8, my: 2, justifyContent: "center", alignItems: "flex-start", }} >
        <Box sx={{ borderRadius: "10px", width: "75%", m: 2, mt: 0, pb: 4, border: "1px solid #EAEBF3", background: "#FFF", boxShadow: "0px 1px 6px 0px rgba(156, 159, 181, 0.15);", overflowY: "auto", }}>
          <Box sx={{ p: 4 }}>
            <Box>
              <Typography sx={{ textAlign: "center", color: "#232535", fontFamily: "sans-serif", fontSize: "35px", fontStyle: "WidthNormal", fontWeight: 600, lineHeight: "24px", mb: 2, mt: 1 }} >
                {event.title}
              </Typography>

              <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} sx={{ mx: 4 }}>
                <Box sx={{ justifyContent: "center", display: "flex", flexDirection: "row", mt: 3, }}>
                  <CalendarTodayOutlinedIcon sx={{ width: "20px", height: "20px", mt: "1px" }} />{" "}
                  <Typography sx={{ pb: 1, px: 1.5 }}>
                    Start Date: {new Date(event.start_time).toLocaleString()}
                  </Typography>
                </Box>

                <Box sx={{ justifyContent: "center", display: "flex", flexDirection: "row", mt: 3 }}>
                  <CalendarTodayOutlinedIcon sx={{ width: "20px", height: "20px", mt: "1px" }} />{" "}
                  <Typography sx={{ pb: 1, px: 1.5 }}>
                    End Date: {new Date(event.end_time).toLocaleString()}
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Divider variant="middle" sx={{ mt: 5 }} />
            <Typography sx={{ textAlign: "left", color: "#232535", mt: 6, fontFamily: "sans-serif", fontSize: "22px", fontStyle: "WidthNormal", fontWeight: 600, lineHeight: "24px", mb: 1, }} >
              Event Description
            </Typography>

            <Typography sx={{ textAlign: "left", color: "#484B62", fontFamily: "sans-serif", fontSize: "16px", fontStyle: " normal", fontWeight: 400, lineHeight: "26px", }} >
              {event.description}
            </Typography>


            <Divider variant="middle" sx={{ mt: 5 }} />

            <Typography sx={{ textAlign: "left", color: "#232535", mt: 6, fontFamily: "sans-serif", fontSize: "22px", fontStyle: "WidthNormal", fontWeight: 600, lineHeight: "24px", mb: 1, }} >
              Requirements
            </Typography>

            <Typography sx={{ textAlign: "left", color: "#484B62", fontFamily: "sans-serif", fontSize: "16px", fontStyle: " normal", fontWeight: 400, lineHeight: "26px", }} >
              {event.requirements}
            </Typography>

          </Box>
        </Box>
        <Paper sx={{ width: "25%", p: 2 }}>
          <Box sx={{ my: 2, display: "flex", flexDirection: "row", gap: "10px" }}>
            <BarChartRoundedIcon />
            <Typography sx={{ py: "1px", px: 1.5 }}>
              {event.frequency}
            </Typography>
          </Box>
          <Box sx={{ my: 2, display: "flex", flexDirection: "row", gap: "10px" }}>
            <AccessTimeRoundedIcon />
            <Typography sx={{ py: "1px", px: 1.5 }}>
              {new Date(event.last_registration_date).toLocaleString()}
            </Typography>
          </Box>
          <Divider variant="middle" sx={{ mt: 5 }} />
          {auth?.session?.user?.organization &&
            (<Button variant="contained" sx={{ width: "85%", m: 2, textAlign: "center", boxShadow: "0px 3px 6px 0px rgba(55, 111, 255, 0.16);", }} LinkComponent={Link} to={`/events/${event._id}/register`} >Register Now</Button>)}
          <Button variant="outlined" sx={{ width: "85%", m: 2, textAlign: "center" }} LinkComponent={Link} to={`/events/${event._id}/startups`} > See StartUps </Button>
        </Paper>
      </Box>
    </>
  );
}

async function fetchEvent({ id }) {
  const response = await fetch(`${API_URL}/events/${id}`);
  const data = await response.json();
  return data.payload.event;
}
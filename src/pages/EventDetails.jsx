import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import {
  ArrowBackRounded as ArrowBackRoundedIcon,
  CalendarTodayOutlined as CalendarTodayOutlinedIcon,
  BarChartRounded as BarChartRoundedIcon,
  AccessTimeRounded as AccessTimeRoundedIcon,
  ErrorOutline as ErrorOutlineIcon,
} from "@mui/icons-material";
import {
  Button,
  Divider,
  Box,
  CircularProgress,
  Container,
  Paper,
  Typography,
  dividerClasses,
} from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { API_URL } from "../config";
import { useAuth } from "../contexts/session";
import Image from "../images/bg.svg";
import EventRegistrationButton from "../components/EventRegistrationButton";

export default function EventDetails() {
  const { eventId } = useParams();
  const auth = useAuth();
  const { data: event, error, isLoading } = useQuery({
    queryKey: ['event', { id: eventId }],
    queryFn: () => fetchEvent({ id: eventId }),
  });

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isSmallScreen = windowWidth <= 768;

  if (isLoading) {
    return (
      <Container maxWidth="md">
        <Paper elevation={3} style={{ padding: '2rem' }}>
          <CircularProgress color="secondary" />
        </Paper>
      </Container>
    );
  }

  if (error || !event) {
    return (
      <Container maxWidth="md">
        <Paper elevation={3} style={{ padding: '2rem' }}>
          <Typography variant="h5" color="error">
            <ErrorOutlineIcon fontSize="large" /> Error: Failed to fetch event details
          </Typography>
        </Paper>
      </Container>
    );
  }

  return (
    <>
      {isSmallScreen ? (
        <Button
          component={Link}
          to="/events"
          startIcon={<ArrowBackRoundedIcon />}
          sx={{
            position: "fixed",
            background: "rgba(92, 36, 179, 0.5)",
            top: "0.15rem",
            right: "0.15rem",
            color: "black",
            transition: 'background-color 0.3s, transform 0.3s',
          }}
        >
          Back
        </Button>
      ) : (
        <Button
          component={Link}
          to="/events"
          startIcon={<ArrowBackRoundedIcon />}
          sx={{
            position: "fixed",
            top: "0.5rem",
            background: "rgba(92, 36, 179, 0.5)",
            color: "black",
            transition: 'background-color 0.3s, transform 0.3s',
            right: "0.5rem",
            zIndex: 0,
          }}
        >
          See all events
        </Button>
      )}

      <Box
        sx={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          justifyContent: "center",
          alignItems: "center",
          background: "rgba(92, 36, 179, 0.2)",
          boxShadow: "5px 5px rgba(0, 0, 0, 0.1)",
          borderRadius: isSmallScreen ? "5px" : "15px",
          padding: "1rem",
        }}
      >
        <Box
          sx={{
            borderRadius: isSmallScreen ? "5px" : "10px",
            width: isSmallScreen ? "100%" : "75%",
            m: 2,
            pb: 4,
            background: "White",
            border: "1px solid black",
            boxShadow: "5px 5px rgba(0, 0, 0, 0.1)",
            overflowY: "auto",
          }}
        >
          <Box sx={{ padding: "1rem" }}>
            <Box
              sx={{
                backgroundImage: `url(${Image})`,
                padding: "1.5rem",
                backgroundSize: "cover",
                textAlign: "center",
                width: "100%",
                height: "80%",
                borderRadius: "8px",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Typography sx={{
                textAlign: "center",
                color: "white",
                mt: 1.5,
                fontFamily: "sans-serif",
                fontSize: "25px",
                fontStyle: "WidthNormal",
                lineHeight: "24px",
                mb: 1,
              }}>
                {event.title}
              </Typography>
            </Box>

            <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} sx={{ mx: 4 }}>
              <Box sx={{ justifyContent: "center", display: "flex", flexDirection: "row", mt: 3 }}>
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

            <Divider variant="middle" sx={{ mt: 5 }} />
            <Typography sx={{ textAlign: "left", color: "#232535", mt: 6, fontFamily: "sans-serif", fontSize: "22px", fontStyle: "WidthNormal", fontWeight: 600, lineHeight: "24px", mb: 1 }}>
              Event Description
            </Typography>
            <Typography sx={{ textAlign: "left", color: "#484B62", fontFamily: "sans-serif", fontSize: "16px", fontStyle: "normal", fontWeight: 400, lineHeight: "26px" }}>
              {event.description}
            </Typography>

            <Divider variant="middle" sx={{ mt: 5 }} />
            <Typography sx={{ textAlign: "left", color: "#232535", mt: 6, fontFamily: "sans-serif", fontSize: "22px", fontStyle: "WidthNormal", fontWeight: 600, lineHeight: "24px", mb: 1 }}>
              Requirements
            </Typography>
            <Typography sx={{ textAlign: "left", color: "#484B62", fontFamily: "sans-serif", fontSize: "16px", fontStyle: "normal", fontWeight: 400, lineHeight: "26px" }}>
              {event.requirements}
            </Typography>
          </Box>
        </Box>

        <Paper sx={{ width: isSmallScreen ? "100%" : "25%", p: 2, background: "#E3F2FD" }}>
          <Box sx={{ my: 2 }}>
            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", mb: 2 }}>
              <BarChartRoundedIcon />
              <Typography sx={{ ml: 1, fontSize: "16px" }}>
                {event.frequency}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              <AccessTimeRoundedIcon />
              <Typography sx={{ ml: 1, fontSize: "16px" }}>
                {new Date(event.last_registration_date).toLocaleString()}
              </Typography>
            </Box>
          </Box>
          <Divider variant="middle" sx={{ mb: 2 }} />

          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            {auth?.session?.user?.organization && (new Date(event.last_registration_date) >= new Date()) && (
              <EventRegistrationButton isSmallScreen={isSmallScreen} event={event} />
            )}
            {auth?.session?.user?.organization && (new Date(event.start_time) <= new Date() && new Date(event.end_time) >= new Date()) && (
              <Button
                variant="contained"
                sx={{
                  width: isSmallScreen ? "100%" : "85%",
                  mb: 2,
                  textAlign: "center",
                  boxShadow: "0px 3px 6px 0px rgba(55, 111, 255, 0.16)",
                }}
                component={Link}
                to={`/events/${event._id}/startups`}
              >
                See Startups
              </Button>
            )}

          </Box>
        </Paper>

      </Box>
    </>
  );
}

async function fetchEvent({ id }) {
  const response = await fetch(`${API_URL}/events/${id}`);
  const data = await response.json();
  return data.payload.event;
};

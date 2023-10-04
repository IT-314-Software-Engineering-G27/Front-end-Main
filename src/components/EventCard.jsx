import React, { useEffect, useState } from "react";
import EventData from "../database/event";
import {  
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { EventAvailable, LocationOn, Category } from "@mui/icons-material"; // Import icons
const { fetchEvent } = EventData;

export default function EventCard({ id, isLoadingData }) {
  const [Event, setEvent] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    fetchEvent(id).then((Event) => {
      setEvent(Event);
      setIsLoading(false);
    });
  }, [id]);

  if (isLoading) return <Skeleton height={4} />;
  return (
    <Card
      sx={{
        border: `1px solid ${isLoadingData ? "grey" : "black"}`,
        height: "100%",
        width: "100%",
        overflow: "clip",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={4}>
          {/* Left side: Image */}
          <div
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "1rem", 
            }}
          >
            <img
              src={`${Event.event_img}`}
              alt="Event"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
                borderRadius: "16px",
              }}
            />
          </div>
        </Grid>
        <Grid item xs={8} sx={{ padding: "0px" }}>
          {/* Right side: Event Details */}

          <CardHeader
          titleTypographyProps={{ variant: "subtitle1" }}
          subheader={"Organized by"}
          sx={{
            color: isLoadingData ? "grey" : "black",
            pb: 0,
            pt: "24px",
          }}
        />

        <CardHeader
          titleTypographyProps={{ variant: "h6" }}
          title={`${Event.event_organized_by}`}
          sx={{ color: isLoadingData ? "grey" : "black", pt: 0,pb:0, }}
        />
          <CardContent
          sx={{
            pt:"10px",
          }}>
            <Typography variant="h5" gutterBottom>
             Title : {`${Event.event_name}`}
            </Typography>
            <Grid container spacing={1} alignItems="center">
              <Grid item>
                <EventAvailable />
              </Grid>
              <Grid item xs>
                <Typography variant="body1" gutterBottom>
                  Event date: {`${Event.event_date}`}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={1} alignItems="center">
              <Grid item>
                <LocationOn />
              </Grid>
              <Grid item xs>
                <Typography variant="body1" gutterBottom>
                  Location: {`${Event.event_location}`}{" "}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={1} alignItems="center">
              <Grid item>
                <Category />
              </Grid>
              <Grid item xs>
                <Typography variant="body1" gutterBottom>
                  Type: {`${Event.event_types}`}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Grid>
      </Grid>
      <Divider />
      <CardActions sx={{ marginTop: "auto", display: "flex", justifyContent: "center" }}>
        <Button variant="contained" color="primary" sx={{ width: "30%" }}>
          <Link to={`/events/${id}`}> Read more</Link>
        </Button>
      </CardActions>
    </Card>
  );
}

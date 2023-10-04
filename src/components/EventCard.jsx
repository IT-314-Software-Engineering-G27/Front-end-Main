import { useEffect, useState } from "react";
import EventData from "../database/event";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  LinearProgress,
  Skeleton,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { HorizontalRule } from "@mui/icons-material";
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
              padding: "1rem", // Optional padding for spacing
            }}
          >
            <img
              src={`${Event.event_img}`}
              alt="Event Image"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
          </div>
        </Grid>
        <Grid item xs={8}>
          {/* Right side: Event Details */}

          <CardHeader
            titleTypographyProps={{ variant: "subtitle1" }}
            subheader={"Organized by"}
           sx={{ color: isLoadingData ? "grey" : "black"
           , pb: 0, 
           pt: "24px",}}
          />

          <CardHeader
            titleTypographyProps={{ variant: "h6" }}
            title= { `${Event.event_organized_by}`}
            sx={{ color: isLoadingData ? "grey" : "black" ,
              pt :0,}}
           
          />

          <CardContent>
            <Typography variant="h5" gutterBottom>
              {Event.event_name}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
            Event date :  {`${Event.event_date}`}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
            Location : { `${Event.event_location}`}{" "}
            
            </Typography> 

            <Typography variant="subtitle1" gutterBottom>
            Type:  {`${Event.event_types}`}
            </Typography>
          
          </CardContent>
        </Grid>
      </Grid>
      <Divider />
      <CardActions sx={{ marginTop: "auto" }}>
        <Button variant="contained" color="primary" fullWidth>
          <Link to={`/event/${id}`}> Read more</Link>
        </Button>
      </CardActions>
    </Card>
  );
}

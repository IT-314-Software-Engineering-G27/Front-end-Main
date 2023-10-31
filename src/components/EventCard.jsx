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
    const [event, setEvent] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true);
        fetchEvent(id).then((event) => {
            setEvent(event);
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
          backgroundColor :  'white',
          borderRadius: "10px",
          flexDirection: "column",
          justifyContent: "space-between",
          boxShadow : " 7px 7px rgba(0, 0, 0, 0.15)",
          padding: "1rem",
            }}
        >
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
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
                            src={`${event.img}`}
                            alt="Event"
                            style={{
                                maxWidth: "100%",
                                maxHeight: "auto",
                                objectFit: "contain",
                                borderRadius: "16px",
                            }}
                        />
                   
                    </div>
                </Grid>
                <Grid item xs={12} md={8} sx={{ padding: "0px" }}>
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
                        title={`${event.organized_by}`}
                        sx={{ color: isLoadingData ? "grey" : "black", pt: 0, pb: 0, }}
                    />
                    <CardContent
                        sx={{
                            pt: "10px",
                        }}>
                        <Typography variant="h5" gutterBottom>
                            Title : {`${event.name}`}
                        </Typography>
                        <Grid container spacing={1} alignItems="center">
                            <Grid item>
                                <EventAvailable />
                            </Grid>
                            <Grid item xs>
                                <Typography variant="body1" gutterBottom>
                                    Event date: {`${event.date}`}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="center">
                            <Grid item>
                                <LocationOn />
                            </Grid>
                            <Grid item xs>
                                <Typography variant="body1" gutterBottom>
                                    Location: {`${event.location}`}{" "}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="center">
                            <Grid item>
                                <Category />
                            </Grid>
                            <Grid item xs>
                                <Typography variant="body1" gutterBottom>
                                    Type: {`${event.types}`}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Grid>
            </Grid>
            <Divider />
            <CardActions sx={{ marginTop: "auto", display: "flex", justifyContent: "center" }}>
            <Button
            variant="contained"
            color= "primary"
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
                                backgroundColor: '#1976D2', 
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

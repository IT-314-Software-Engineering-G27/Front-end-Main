import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowBackRounded as ArrowBackRoundedIcon, CalendarTodayOutlined as CalendarTodayOutlinedIcon, WorkOutline as WorkOutlineIcon, BarChartRounded as BarChartRoundedIcon, AccessTimeRounded as AccessTimeRoundedIcon, MonetizationOnOutlined as MonetizationOnOutlinedIcon,LocationOnOutlined as LocationOnOutlinedIcon, ErrorOutline as ErrorOutlineIcon,} from "@mui/icons-material";
import ApplicationComponent from "../components/ApplicationComponent";
import Image from "../assets/images/back.png";
import EventsData from '../database/event';
import {Button,
    Divider,
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
        <div>
        <Box sx={{ borderRadius: "40px",m: 2, display: "flex", flexDirection: "row", p: 2, width: "15%", justifyContent: "center",alignItems: "center", ml: 6,}}>
          <ArrowBackRoundedIcon sx={{ mt: "2px" }} />
          <Typography sx={{ fontSize: "20px", mx: "4px" }}>
            See all events
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", flexDirection: "row",mx: 8, my: 2, justifyContent: "center",alignItems: "flex-start",}} >
          {/* Left side box */}
  
          <Box sx={{ borderRadius: "10px", width: "75%", m: 2,mt:0, pb: 4, border: "1px solid #EAEBF3", background: "#FFF", boxShadow: "0px 1px 6px 0px rgba(156, 159, 181, 0.15);",overflowY: "auto", }}>
           
            <Box sx={{ mb:4, textAlign: "center", backgroundImage: `url(${Image})`, backgroundSize: "contain", backgroundPosition: "fixed", width: "100%",borderRadius: "8px", backgroundRepeat: "no-repeat",backdropFilter:'100px',}} >
              <br />
              
              <Box sx={{display: "flex", justifyContent: "center", alignItems: "center",mt:5 }} >
              <img src={Event.img} alt="Event" style={{ display: 'block', margin: '1rem auto', width: '600px', height: '400px', borderRadius: '8px',}}/>  
              </Box>
            </Box>
  
            <Box sx={{ px: 4 }}>
              <Box>
                {/* <Typography  sx={{ textAlign: "center", color: "#232535", mt: 2,  fontFamily: "sans-serif", fontSize: "18px", fontStyle: "WidthNormal",  fontWeight: 500, lineHeight: "24px", mb: 1, }}>
                  {" "} {Event.organized_by}
                </Typography> */}
                <Typography
                  sx={{  textAlign: "center", color: "#232535", fontFamily: "sans-serif",  fontSize: "35px",fontStyle: "WidthNormal",fontWeight: 600, lineHeight: "24px", mb: 2,mt:1 }} >
                  {" "} {Event.name}
                </Typography>
  
                <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} sx={{mx:4 }}>
                <Box sx={{ justifyContent: "center", display: "flex", flexDirection: "row",mt: 3, }}>
                  <CalendarTodayOutlinedIcon sx={{ width: "20px", height: "20px", mt: "1px" }} />{" "}
                  <Typography sx={{ pb: 1, px: 1.5 }}>
                    Posted on: Jan 01, 2001
                  </Typography>
                </Box>
               
                <Box sx={{ justifyContent: "center", display: "flex", flexDirection: "row",mt: 3}}>
                  <CalendarTodayOutlinedIcon sx={{ width: "20px", height: "20px", mt: "1px" }} />{" "}
                  <Typography sx={{ pb: 1, px: 1.5 }}>
                    Last Date: Jan 01, 2001
                  </Typography>
                </Box>
                </Box>
              </Box>
  
              <Divider variant="middle" sx={{ mt: 5 }} />
              <Typography sx={{textAlign: "left", color: "#232535", mt: 6, fontFamily: "sans-serif", fontSize: "22px", fontStyle: "WidthNormal", fontWeight: 600, lineHeight: "24px",mb: 1, }} >
                Event Description{" "}
              </Typography>
  
              <Typography sx={{textAlign: "left", color: "#484B62", fontFamily: "sans-serif", fontSize: "16px", fontStyle: " normal", fontWeight: 400,lineHeight: "26px", }} >
                {" "}
                   </Typography>
  
            
             
  
            
            </Box>
          </Box>
  
          {/* Right side box */}
         
          <Box sx={{ width: "25%", m: 2, position: "sticky", top: "0", ml: "20px" }}>
    {/* Box for apply now */}

    <Box sx={{ mb: 2,  p: 2,  position: "sticky", mt: 2, pt: 3, borderRadius: "6px", border: "1px solid #EAEBF3", background: "#FFF", boxShadow: "0px 1px 6px 0px rgba(156, 159, 181, 0.15);",}}>
      <Box sx={{ ml: 2 }}>
        <Typography sx={{ textAlign: "left", color: "#232535", fontFamily: "sans-serif", fontSize: "20px", fontStyle: "WidthNormal", fontWeight: 600, lineHeight: "24px", mb: 1, }}>
             Register now{" "}
        </Typography>
        <Typography sx={{textAlign: "left", color: "#484B62", fontFamily: "sans-serif", fontSize: "16px", fontStyle: " normal", fontWeight: 400, lineHeight: "26px", }} >{" "}
          Lorem ipsum dolor sit amet consectetur adipisicing
        </Typography>

        <Box sx={{ my: 2 }}>
          <Typography sx={{ display: "flex", flexDirection: "row", my: "8px" }}>
            <LocationOnOutlinedIcon sx={{ width: "20px", height: "25px", color: "#376FFF" }}/>{" "}
            <Typography sx={{ py: "1px", px: 1.5 }}>
              {Event.location}
            </Typography>
          </Typography>

          <Typography sx={{ display: "flex", flexDirection: "row", my: "8px" }}>
          <BarChartRoundedIcon sx={{ width: "20px", height: "25px", color: "#376FFF" }} />{" "}
            <Typography sx={{ py: "1px", px: 1.5 }}>
            {Event.types}
            </Typography>
          </Typography>

          <Typography sx={{ display: "flex", flexDirection: "row", my: "8px" }}>
            <AccessTimeRoundedIcon sx={{ width: "20px", height: "25px", color: "#376FFF" }} />{" "}
            <Typography sx={{ py: "1px", px: 1.5 }}>
              1 hour 
            </Typography>
          </Typography>

        </Box>
      </Box>
      <Box sx={{ textAlign: "centre" }}>
        <Button variant="contained" sx={{ width: "85%",  m: 2, textTransform: "none", fontFamily: "sans-serif", border: "1px solid #376FFF", borderRadius: "5px", background:"linear-gradient(180deg, #376FFF 0%, #5E5BFF 100%)", fontSize: "14px", boxShadow: "0px 3px 6px 0px rgba(55, 111, 255, 0.16);", }}> Register Now
        </Button>
      </Box>
    </Box>
  </Box> 
         
        </Box>
      </div>
    );
}

export default EventDetail;
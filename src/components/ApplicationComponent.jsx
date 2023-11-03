import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JobData from "../database/jobs";
import { ArrowBackRounded as ArrowBackRoundedIcon, CalendarTodayOutlined as CalendarTodayOutlinedIcon, WorkOutline as WorkOutlineIcon, BarChartRounded as BarChartRoundedIcon, AccessTimeRounded as AccessTimeRoundedIcon, MonetizationOnOutlined as MonetizationOnOutlinedIcon,LocationOnOutlined as LocationOnOutlinedIcon, ErrorOutline as ErrorOutlineIcon,} from "@mui/icons-material";
import { Divider, Avatar, Box, Button,CircularProgress,Container, Paper,Typography,} from "@mui/material";


    
const ApplicationComponent = () => {

    const { jobId } = useParams();
    const [job, setJob] = useState(null);
    const [error, setError] = useState(null);
    
    useEffect(() => { JobData.fetchJob(jobId).then((jobData) => { setJob(jobData);}).catch((error) => {setError(error);}); }, [jobId]);
    if (error) {
      return (
        <Container maxWidth="lg">
          <Paper elevation={3} style={{ padding: "2rem" }}>
            <Typography variant="h5" color="error">
              <ErrorOutlineIcon fontSize="large" /> Error: {error.message}
            </Typography>
          </Paper>
        </Container>
      );}
  
    if (!job) {
      return (
        <Container maxWidth="md">
          <Paper elevation={3} style={{ padding: "2rem" }}>
            <CircularProgress color="primary" />
          </Paper>
        </Container>
      );}
          
    return (  <Box sx={{ width: "25%", m: 2, position: "sticky", top: "0", ml: "20px" }}>
    {/* Box for apply now */}

    <Box sx={{ mb: 2,  p: 2,  position: "sticky", mt: 2, pt: 3, borderRadius: "6px", border: "1px solid #EAEBF3", background: "#FFF", boxShadow: "0px 1px 6px 0px rgba(156, 159, 181, 0.15);",}}>
      <Box sx={{ ml: 2 }}>
        <Typography sx={{ textAlign: "left", color: "#232535", fontFamily: "sans-serif", fontSize: "20px", fontStyle: "WidthNormal", fontWeight: 600, lineHeight: "24px", mb: 1, }}>
             Apply now{" "}
        </Typography>
        <Typography sx={{textAlign: "left", color: "#484B62", fontFamily: "sans-serif", fontSize: "16px", fontStyle: " normal", fontWeight: 400, lineHeight: "26px", }} >{" "}
          Lorem ipsum dolor sit amet consectetur adipisicing
        </Typography>

        <Box sx={{ my: 2 }}>
          <Typography sx={{ display: "flex", flexDirection: "row", my: "8px" }}>
            <LocationOnOutlinedIcon sx={{ width: "20px", height: "25px", color: "#376FFF" }}/>{" "}
            <Typography sx={{ py: "1px", px: 1.5 }}>
              {job.location}
            </Typography>
          </Typography>

          <Typography sx={{ display: "flex", flexDirection: "row", my: "8px" }}>
          <BarChartRoundedIcon sx={{ width: "20px", height: "25px", color: "#376FFF" }} />{" "}
            <Typography sx={{ py: "1px", px: 1.5 }}>
              Senior
            </Typography>
          </Typography>

          <Typography sx={{ display: "flex", flexDirection: "row", my: "8px" }} >
            <WorkOutlineIcon sx={{ width: "20px", height: "25px", color: "#376FFF" }}/>{" "}
            <Typography sx={{ py: "1px", px: 1.5 }}>
              Development
            </Typography>
          </Typography>

          <Typography sx={{ display: "flex", flexDirection: "row", my: "8px" }}>
            <AccessTimeRoundedIcon sx={{ width: "20px", height: "25px", color: "#376FFF" }} />{" "}
            <Typography sx={{ py: "1px", px: 1.5 }}>
              {job.duration}
            </Typography>
          </Typography>

          <Typography sx={{ display: "flex", flexDirection: "row", my: "8px" }}>
            <MonetizationOnOutlinedIcon sx={{ width: "20px", height: "25px", color: "#376FFF" }}/>{" "}
            <Typography sx={{ py: "1px", px: 1.5 }}>
              {job.salary}$
            </Typography>
          </Typography>
        </Box>
      </Box>
      <Box sx={{ textAlign: "centre" }}>
        <Button variant="contained" sx={{ width: "85%",  m: 2, textTransform: "none", fontFamily: "sans-serif", border: "1px solid #376FFF", borderRadius: "5px", background:"linear-gradient(180deg, #376FFF 0%, #5E5BFF 100%)", fontSize: "14px", boxShadow: "0px 3px 6px 0px rgba(55, 111, 255, 0.16);", }}> Apply Now
        </Button>
      </Box>
    </Box>

    {/* Box for view company */}
    

   <Box sx={{ mb: 2,p: 2, borderRadius: "6px", border: "1px solid #EAEBF3", background: "#FFF", boxShadow: "0px 1px 6px 0px rgba(156, 159, 181, 0.15);",}} >
      <Box sx={{ ml: 2 }}>
        <Box sx={{ mt: 2, mb: 2.5 }}>
          <Avatar sx={{ bgcolor: "lightblue", width: "55px", height: "55px" }} variant="rounded"  src={`${job.company_logo}`} ></Avatar>
        </Box>
        <Typography sx={{ textAlign: "left", color: "#232535", fontFamily: "sans-serif", fontSize: "20px", fontStyle: "WidthNormal", fontWeight: 600, lineHeight: "24px", mb: 1.5, }}>
          About {job.company}{" "}
        </Typography>

        <Typography sx={{ textAlign: "left", color: "#484B62", fontFamily: "sans-serif", fontSize: "16px", fontStyle: " normal", fontWeight: 400, lineHeight: "26px",}}>
          {" "} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, temporibus?
        </Typography>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Button variant="outlined" sx={{ width: "85%", m: 2, fontFamily: "sans-serif", fontSize: "12px", textTransform: "none", borderRadius: "5px", border: "1px solid #EAEBF3", background: "linear-gradient(180deg, #FFF 0%, #F3F3F7 100%);", boxShadow: "0px 3px 4px 0px rgba(20, 20, 43, 0.04);",}} >
          View Company
        </Button>
      </Box>
    </Box>
  </Box> );
}
 
export default ApplicationComponent;
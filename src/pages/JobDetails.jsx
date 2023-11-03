import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JobData from "../database/jobs";
import { ArrowBackRounded as ArrowBackRoundedIcon, CalendarTodayOutlined as CalendarTodayOutlinedIcon, WorkOutline as WorkOutlineIcon, BarChartRounded as BarChartRoundedIcon, AccessTimeRounded as AccessTimeRoundedIcon, MonetizationOnOutlined as MonetizationOnOutlinedIcon,LocationOnOutlined as LocationOnOutlinedIcon, ErrorOutline as ErrorOutlineIcon,} from "@mui/icons-material";
import Image from "../assets/images/back.png";
import { Divider, Avatar, Box, Button,CircularProgress,Container, Paper,Typography,} from "@mui/material";
import ApplicationComponent from "../components/ApplicationComponent";

function JobDetail() {
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

  return (
    <div>
      <Box sx={{ borderRadius: "40px",m: 2, display: "flex", flexDirection: "row", p: 2, width: "15%", justifyContent: "center",alignItems: "center", ml: 6,}}>
        <ArrowBackRoundedIcon sx={{ mt: "2px" }} />
        <Typography sx={{ fontSize: "20px", mx: "4px" }}>
          See all jobs
        </Typography>
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "row",mx: 8, my: 2, justifyContent: "center",alignItems: "flex-start",}} >
        {/* Left side box */}

        <Box sx={{ borderRadius: "10px", width: "75%", m: 2, pb: 4, border: "1px solid #EAEBF3", background: "#FFF", boxShadow: "0px 1px 6px 0px rgba(156, 159, 181, 0.15);",overflowY: "auto", }}>
          <Box sx={{  textAlign: "center", backgroundImage: `url(${Image})`, backgroundSize: "contain", backgroundPosition: "fixed", width: "100%",borderRadius: "8px", backgroundRepeat: "no-repeat",}} >
            <br /><br />
            <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", }} >
              <Avatar variant="rounded" src={`${job.company_logo}`}  sx={{ border: "4px solid white", width: "80px", height: "80px", borderRadius: "10px", mt: 11, border: "3px solid #EAEBF3",  background:"linear-gradient(180deg, #376FFF 0%, #5E5BFF 100%)",  boxShadow: "0px 3px 4px 0px rgba(20, 20, 43, 0.04);", }}/>
            </Box>
          </Box>

          <Box sx={{ px: 4 }}>
            <Box>
              <Typography  sx={{ textAlign: "center", color: "#232535", mt: 2,  fontFamily: "sans-serif", fontSize: "18px", fontStyle: "WidthNormal",  fontWeight: 500, lineHeight: "24px", mb: 1, }}>
                {" "} {job.company}
              </Typography>
              <Typography
                sx={{  textAlign: "center", color: "#232535", mt: 1.5, fontFamily: "sans-serif",  fontSize: "22px",fontStyle: "WidthNormal",fontWeight: 600, lineHeight: "24px", mb: 1, }} >
                {" "} {job.title}
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
              Job Description{" "}
            </Typography>

            <Typography sx={{textAlign: "left", color: "#484B62", fontFamily: "sans-serif", fontSize: "16px", fontStyle: " normal", fontWeight: 400,lineHeight: "26px", }} >
              {" "}
                 </Typography>

            <Typography sx={{ textAlign: "left", color: "#232535", mt: 3, fontFamily: "sans-serif",fontSize: "22px", fontStyle: "WidthNormal", fontWeight: 600, lineHeight: "24px", mb: 1,}}>
            Job Requirements{" "}
            </Typography>

            <Typography sx={{ textAlign: "left", color: "#484B62", fontFamily: "sans-serif", fontSize: "16px", fontStyle: " normal", fontWeight: 400, lineHeight: "26px", }}>
              {" "}
              
             </Typography>

            <Typography sx={{ textAlign: "left",color: "#232535", mt: 3, fontFamily: "sans-serif", fontSize: "22px", fontStyle: "WidthNormal", fontWeight: 600, lineHeight: "24px", mb: 1,}}>
              Compensations{" "}
            </Typography>

            <Typography sx={{ textAlign: "left", color: "#484B62", fontFamily: "sans-serif", fontSize: "16px", fontStyle: " normal", fontWeight: 400, lineHeight: "26px",mb: 4,}} >
              {" "}   
             </Typography>
          </Box>
        </Box>

        {/* Right side box */}
       
       <ApplicationComponent  />
       
      </Box>
    </div>
  );
}

export default JobDetail;

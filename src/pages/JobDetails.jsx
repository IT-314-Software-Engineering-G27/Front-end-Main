import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowBackRounded as ArrowBackRoundedIcon, CalendarTodayOutlined as CalendarTodayOutlinedIcon, ErrorOutline as ErrorOutlineIcon, } from "@mui/icons-material";
import Image from "../assets/images/back.png";
import { Divider, Avatar, Box, CircularProgress, Container, Paper, Typography, ListItem, } from "@mui/material";
import ApplicationComponent from "../components/ApplicationComponent";
import { API_URL } from "../constants";
import { useQuery } from "@tanstack/react-query";
import CompanyComponent from "../components/CompanyComponent";

function JobDetail() {
  const { jobId } = useParams();

  const { data: job, error, isLoading } = useQuery({
    queryKey: ["job", jobId],
    queryFn: () => fetchJobDetails({ jobId }),
  });

  if (error) {
    return (
      <Container maxWidth="lg">
        <Paper elevation={3} style={{ padding: "2rem" }}>
          <Typography variant="h5" color="error">
            <ErrorOutlineIcon fontSize="large" /> Error: {error.message}
          </Typography>
        </Paper>
      </Container>
    );
  }

  if (!job) {
    return (
      <Container maxWidth="md">
        <Paper elevation={3} style={{ padding: "2rem" }}>
          <CircularProgress color="primary" />
        </Paper>
      </Container>
    );
  }

  return (
    <div>
      <Box sx={{ borderRadius: "40px", m: 2, display: "flex", flexDirection: "row", p: 2, width: "15%", justifyContent: "center", alignItems: "center", ml: 6, }}>
        <ArrowBackRoundedIcon sx={{ mt: "2px" }} />
        <Typography sx={{ fontSize: "20px", mx: "4px", color: "black" }} component={Link} to={`/jobs`}>
          See all jobs
        </Typography>
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "row", mx: 8, my: 2, justifyContent: "center", alignItems: "flex-start", }} >
        <Box sx={{ borderRadius: "10px", width: "75%", m: 2, pb: 4, border: "1px solid #EAEBF3", background: "#FFF", boxShadow: "0px 1px 6px 0px rgba(156, 159, 181, 0.15);", overflowY: "auto", }}>
          <Box sx={{ textAlign: "center", backgroundImage: `url(${Image})`, backgroundSize: "contain", backgroundPosition: "fixed", width: "100%", borderRadius: "8px", backgroundRepeat: "no-repeat", }} >
            <br /><br />
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", }} >
              <Avatar variant="rounded" src={`${job.company_logo}`} sx={{ border: "4px solid white", width: "80px", height: "80px", borderRadius: "10px", mt: 11, border: "3px solid #EAEBF3", background: "linear-gradient(180deg, #376FFF 0%, #5E5BFF 100%)", boxShadow: "0px 3px 4px 0px rgba(20, 20, 43, 0.04);", }} />
            </Box>
          </Box>

          <Box sx={{ px: 4 }}>
            <Box>
              <Typography sx={{ textAlign: "center", color: "#232535", mt: 2, fontFamily: "sans-serif", fontSize: "18px", fontStyle: "WidthNormal", fontWeight: 500, lineHeight: "24px", mb: 1, }}>
                {job.company}
              </Typography>
              <Typography
                sx={{ textAlign: "center", color: "#232535", mt: 1.5, fontFamily: "sans-serif", fontSize: "22px", fontStyle: "WidthNormal", fontWeight: 600, lineHeight: "24px", mb: 1, }} >
                {job.title}
              </Typography>

              <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} sx={{ mx: 4 }}>
                <Box sx={{ justifyContent: "center", display: "flex", flexDirection: "row", mt: 3, }}>
                  <CalendarTodayOutlinedIcon sx={{ width: "20px", height: "20px", mt: "1px" }} />{" "}
                  <Typography sx={{ pb: 1, px: 1.5 }}>
                    Posted on: {new Date(job.posted).toDateString()}
                  </Typography>
                </Box>

                <Box sx={{ justifyContent: "center", display: "flex", flexDirection: "row", mt: 3 }}>
                  <CalendarTodayOutlinedIcon sx={{ width: "20px", height: "20px", mt: "1px" }} />{" "}
                  <Typography sx={{ pb: 1, px: 1.5 }}>
                    {job.deadline && <>Last Date: {new Date(job.deadline).toDateString()}</>}
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Divider variant="middle" sx={{ mt: 5 }} />

            <TitleTypography title="Job Description" />
            <ParagraphTypography description={job.description} />

            <Divider variant="fullWidth" sx={{ mt: 5 }} />

            <TitleTypography title="Requirements" />
            <ParagraphTypography description={job.requirements} />

            <Divider variant="fullWidth" sx={{ mt: 5 }} />

            <TitleTypography title="Compensations" />
            <ParagraphTypography description={job.compensations} />
          </Box>
        </Box>
        <Box sx={{ width: "25%", m: 2, position: "sticky", top: "0", ml: "20px" }}>
          <ApplicationComponent job={job} />
          <CompanyComponent id={job.organization} />
        </Box>
      </Box>
    </div>
  );
}

function ParagraphTypography({description}) {
  return <Typography sx={{ textAlign: "left", color: "#484B62", fontFamily: "sans-serif", fontSize: "16px", fontStyle: " normal", fontWeight: 400, lineHeight: "26px", }}>
    {description}
  </Typography>;
}

function TitleTypography({ title }) {
  return <Typography sx={{ textAlign: "left", color: "#232535", mt: 6, fontFamily: "sans-serif", fontSize: "22px", fontStyle: "WidthNormal", fontWeight: 600, lineHeight: "24px", mb: 1, }}>
    {title}
  </Typography>;
}

async function fetchJobDetails({ jobId }) {
  const response = await fetch(`${API_URL}/job-profiles/${jobId}`);
  const data = await response.json();
  return data.payload.jobProfile;
}

export default JobDetail;

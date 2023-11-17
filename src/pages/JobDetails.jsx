import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowBackRounded as ArrowBackRoundedIcon,
  CalendarTodayOutlined as CalendarTodayOutlinedIcon,
  ErrorOutline as ErrorOutlineIcon,
} from "@mui/icons-material";
import {
  Box,
  Container,
  Paper,
  Typography,
  CircularProgress,
  Divider,
  Avatar,
  Button,
} from "@mui/material";
import ApplicationComponent from "../components/ApplicationComponent";
import { API_URL } from "../config";
import { useQuery } from "@tanstack/react-query";
import CompanyComponent from "../components/CompanyComponent";
import Image from "../images/bg.svg";

function JobDetail() {
  const { jobId } = useParams();

  const { data: job, error, isLoading } = useQuery({
    queryKey: ["job", jobId],
    queryFn: () => fetchJobDetails({ jobId }),
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
    <Container
        maxWidth="lg"
        sx={{
          padding: {
            xs: "1rem",
            sm: "1.5rem",
            md: "2rem",
        },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",

        }}
    >
      {isSmallScreen && (
        <Button
          component={Link}
          to="/jobs"
          // variant="contained"
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
          padding: "1rem", // Added padding
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
            padding: "1rem", // Added padding
          }}
        >
          <Box
            sx={{
              backgroundImage: `url(${Image})`,
              backgroundSize: "cover",
              textAlign: "center",
              width: "100%",
              borderRadius: "8px",
              backgroundRepeat: "no-repeat",
            }}
          >
            <br />
            <br />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Avatar
                variant="rounded"
                src={`${job.company_logo}`}
                sx={{
                  border: "4px solid black",
                  width: "80px",
                  height: "80px",
                  borderRadius: "10px",
                  mt: isSmallScreen ? "0" : "11px",
                  border: "3px solid #EAEBF3",
                  background: "linear-gradient(180deg, #376FFF 0%, #5E5BFF 100%)",
                }}
              />
            </Box>
          </Box>

          <Box sx={{ px: 4 }}>
            <Box>
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#232535",
                  mt: 2,
                  fontFamily: "sans-serif",
                  fontSize: "18px",
                  fontStyle: "WidthNormal",
                  fontWeight: 500,
                  lineHeight: "24px",
                  mb: 1,
                }}
              >
                {job.company}
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#232535",
                  mt: 1.5,
                  fontFamily: "sans-serif",
                  fontSize: "22px",
                  fontStyle: "WidthNormal",
                  fontWeight: 600,
                  lineHeight: "24px",
                  mb: 1,
                }}
              >
                {job.title}
              </Typography>

              <Box
                display="flex"
                flexDirection="column"
                sx={{
                  alignItems: isSmallScreen ? "center" : "flex-start",
                  justifyContent: "center",
                  mt: 3,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <CalendarTodayOutlinedIcon
                    sx={{ width: "20px", height: "20px", mt: "1px" }}
                  />{" "}
                  <Typography sx={{ pb: 1, px: 1.5 }}>
                    Posted on: {new Date(job.posted).toDateString()}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <CalendarTodayOutlinedIcon
                    sx={{ width: "20px", height: "20px", mt: "1px" }}
                  />{" "}
                  <Typography sx={{ pb: 1, px: 1.5 }}>
                    Last Date: {new Date(job.deadline).toDateString()}
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

        <Box
          sx={{
            width: isSmallScreen ? "100%" : "25%",
            m: 2,
            position: "sticky",
            top: "0",
            ml: isSmallScreen ? "0" : "20px",
          }}
        >
          {!isSmallScreen && (
            <Button
              component={Link}
              to="/jobs"
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
              Back to job list
            </Button>
          )}
          <ApplicationComponent  job={job} />
          <CompanyComponent id={job.organization} />
        </Box>
      </Box>
    </Container>
  );
}

function ParagraphTypography({ description }) {
  return (
    <Typography
      sx={{
        textAlign: "left",
        color: "#484B62",
        fontFamily: "sans-serif",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "26px",
      }}
    >
      {description}
    </Typography>
  );
}

function TitleTypography({ title }) {
  return (
    <Typography
      sx={{
        textAlign: "left",
        color: "#232535",
        mt: 6,
        fontFamily: "sans-serif",
        fontSize: "22px",
        fontStyle: "WidthNormal",
        fontWeight: 600,
        lineHeight: "24px",
        mb: 1,
      }}
    >
      {title}
    </Typography>
  );
}

async function fetchJobDetails({ jobId }) {
  const response = await fetch(`${API_URL}/job-profiles/${jobId}`);
  const data = await response.json();
  return data.payload.jobProfile;
}

export default JobDetail;

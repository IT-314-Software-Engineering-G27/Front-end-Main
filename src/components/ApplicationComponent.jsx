import React from "react";
import { AccessTimeRounded as AccessTimeRoundedIcon, MonetizationOnOutlined as MonetizationOnOutlinedIcon, LocationOnOutlined as LocationOnOutlinedIcon, } from "@mui/icons-material";
import { Box, CircularProgress, Container, Paper, Typography, Button } from "@mui/material";
import ApplicationButton from "./ApplicationModal";
import { useAuth } from "../contexts/session";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../config";

const ApplicationComponent = ({ job }) => {
  const auth = useAuth();
  const navigate = useNavigate();
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

    <Box sx={{ mb: 2, padding: "0.5rem", position: "sticky", mt: 2, pt: 3, borderRadius: "6px", border: "1px solid black", background: "#FFF", boxShadow: "3px 3px 3px rgba(156, 159, 181, 1);", }}>
      <Box sx={{ ml: 2 }}>
        <Typography sx={{ textAlign: "Center", color: "#232535", fontFamily: "sans-serif", fontSize: "20px", fontStyle: "WidthNormal", fontWeight: 600, lineHeight: "24px", mb: 1, }}>
          {auth?.session?.user?.individual && "Apply now"}
        </Typography>

        <Box sx={{ my: 2 }}>
          <Box sx={{ display: "flex", flexDirection: "row", my: "8px" }}>
            <LocationOnOutlinedIcon sx={{ width: "20px", height: "25px", color: "#376FFF" }} />
            <Typography sx={{ py: "1px", px: 1.5 }}>
              {job.posting_location}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "row", my: "8px" }}>
            <AccessTimeRoundedIcon sx={{ width: "20px", height: "25px", color: "#376FFF" }} />
            <Typography sx={{ py: "1px", px: 1.5 }}>
              {job.duration}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "row", my: "8px" }}>
            <MonetizationOnOutlinedIcon sx={{ width: "20px", height: "25px", color: "#376FFF" }} />
            <Typography sx={{ py: "1px", px: 1.5 }}>
              {(job.salary / 1000).toFixed(1)} k$
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <>
          {auth?.session?.user?.individual && <ApplicationButton id={job._id} />}
          {auth?.session?.user?.organization && auth.session.user.organization === job.organization &&

            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: "1rem", padding: "1rem" }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                component={Link}
                to={`/jobs/${job._id}/candidates`}
                sx={{
                  width: '100%',
                  transition: 'background-color 0.3s, transform 0.3s',
                  boxShadow: "5px 5px rgba(163, 23, 205, 0.1)",
                  '&:hover': {
                    backgroundColor: '#1976D2',
                    transform: 'scale(1.05)',
                  },
                }}
              >
                View Candidates
              </Button>
              <Button
                variant="contained"
                color="error"
                size="large"
                fullWidth
                onClick={() => {
                  deleteJobProfile({ id: job._id, token: auth.session.token }).then(() => {
                    navigate('/profile');
                  });
                }}>
                Delete Job
              </Button>
            </Box>}
        </>
      </Box>
    </Box>

  );
}

async function deleteJobProfile({ id, token }) {
  const res = await fetch(`${API_URL}/job-profiles/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data;
}

export default ApplicationComponent;


import React from "react";
import { AccessTimeRounded as AccessTimeRoundedIcon, MonetizationOnOutlined as MonetizationOnOutlinedIcon, LocationOnOutlined as LocationOnOutlinedIcon, } from "@mui/icons-material";
import { Box, CircularProgress, Container, Paper, Typography, } from "@mui/material";
import ApplicationButton from "./ApplicationModal";

const ApplicationComponent = ({ job }) => {

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
    <Box sx={{ mb: 2, p: 2, position: "sticky", mt: 2, pt: 3, borderRadius: "6px", border: "1px solid #EAEBF3", background: "#FFF", boxShadow: "0px 1px 6px 0px rgba(156, 159, 181, 0.15);", }}>
      <Box sx={{ ml: 2 }}>
        <Typography sx={{ textAlign: "left", color: "#232535", fontFamily: "sans-serif", fontSize: "20px", fontStyle: "WidthNormal", fontWeight: 600, lineHeight: "24px", mb: 1, }}>
          Apply now
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
      <Box sx={{ textAlign: "centre" }}>
        <ApplicationButton id={job._id} />
      </Box>
    </Box>
  );
}

export default ApplicationComponent;


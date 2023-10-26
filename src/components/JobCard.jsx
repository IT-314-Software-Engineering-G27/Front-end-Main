import React, { useEffect, useState } from "react";
import JobData from "../database/jobs";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Skeleton,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  MonetizationOn as MonetizationOnIcon,
  Event as EventIcon,
} from "@mui/icons-material";

const { fetchJob } = JobData;

export default function JobCard({ id, isLoadingData }) {
  const [job, setJob] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchJob(id).then((job) => {
      setJob(job);
      setIsLoading(false);
    });
  }, [id]);

  if (isLoading) return <Skeleton height={4} />;

  return (
    <>
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
        <CardHeader
          avatar={
            <Avatar
              src={`${job.company_logo}`}
              sx={{ width: 55, height: 55 }}
              variant="rounded"
            />
          }
          titleTypographyProps={{ variant: "h7" }}
          title={`${job.company}`}
          subheader={`${job.location}`}
          sx={{ color: isLoadingData ? "grey" : "black" }}
        />
        <CardHeader
          titleTypographyProps={{ variant: "h6" }}
          title={`${job.title}`}
          subheader={  <>
            <EventIcon
              sx={{
                fontSize: 20,
                verticalAlign: "middle",
                marginRight: "0.5rem",
              }}
            />
            {job.duration} 
            
          </>}
          sx={{ color: isLoadingData ? "grey" : "black" }}
        />
        <CardContent>
          <Typography variant="h6" gutterBottom>
            <MonetizationOnIcon
              sx={{
                fontSize: 20,
                verticalAlign: "middle",
                marginRight: "0.5rem",
              }}
            />
            {job.salary}$ /month
          </Typography>
          
        </CardContent>
        <Divider />
        <CardActions
          sx={{
            marginTop: "auto",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
         <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            component={Link}
            to={`/jobs/${id}`}
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
            View Details
          </Button>
          
        </CardActions>
      </Card>
    </>
  );
}

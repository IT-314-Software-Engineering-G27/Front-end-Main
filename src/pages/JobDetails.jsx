import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import JobsData from '../database/jobs';
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Paper,
  Typography,
} from '@mui/material';

function JobDetail() {
  const { jobId } = useParams(); 
  const [job, setJob] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    JobsData.fetchJob(jobId)
      .then((jobsData) => {
        setJob(jobsData);
      })
      .catch((error) => {
        setError(error);
      });
  }, [jobId]);

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

  if (!job) {
    return (
      <Container maxWidth="md">
        <Paper elevation={3} style={{ padding: '2rem' }}>
          <CircularProgress color="primary" />
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl">
      <Paper elevation={3} style={{ padding: '2rem' }}>
        <Typography variant="h4" >
          {job.title}
        </Typography>
        <Typography variant="h6" >
          Company Name: {job.company}
        </Typography>
        <Typography variant="h6" >
          Type: {job.duration}
        </Typography>
        <Typography variant="h6" >
          Location: {job.location}
        </Typography>
        <Typography variant="body1" paragraph>
          {job.job_description}
        </Typography>
        <Typography variant="body1" paragraph>
          Qualifications: {job.qualifications_paragraph}
        </Typography>
        <Typography variant="h5">
          Salary: ${job.salary} / month
        </Typography>
        <Typography variant="body1" paragraph>
          Vacant Seats: {job.number_of_seats}
        </Typography>
        <Typography variant="body1" paragraph>
          Last date to apply: {job.last_date_to_apply}
        </Typography>
        <Button
          style={{ marginTop: '1rem' }}
        >
          Apply Now
        </Button>
      </Paper>
    </Container>
  );
}

export default JobDetail;

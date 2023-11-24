import { useAuth } from "../contexts/session";
import { API_URL } from "../config";
import { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import JobApplicationCard from "./JobApplicationCard";

export default function IndividualJobList() {
    const auth = useAuth();

    const [jobApplications, setJobApplications] = useState([]);

    useEffect(() => {
        if (auth?.session?.user?.individual)
            fetchJobProfiles({ token: auth.session.token }).then((jobApplications) => {
                setJobApplications(jobApplications);
            });
    }, [auth?.session]);

    if (!auth?.session?.token) return <></>;

    return (<>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant="h3" gutterBottom component="div">
                Job Applications
            </Typography>
        </Box>
        {!jobApplications.length && <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant="h5" gutterBottom component="div">
                No job applications yet
            </Typography>
        </Box>}<Grid container spacing={3} padding={4} margin={4}>
            {jobApplications.map((jobApplication) => (
                <Grid item key={jobApplication._id} xs={12} sm={6} md={4}>
                    <JobApplicationCard id={jobApplication._id} />
                </Grid>
            ))}
        </Grid>
    </>);
};

async function fetchJobProfiles({ token }) {
    const response = await fetch(`${API_URL}/job-applications`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const data = await response.json();
    return data.payload.jobApplications;
};
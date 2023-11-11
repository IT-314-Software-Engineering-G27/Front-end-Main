import { useAuth } from "../contexts/session";
import { API_URL } from "../config";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import JobCard from "./JobCard";

export default function OrganizationJobList() {
    const auth = useAuth();
    const [jobProfiles, setJobProfiles] = useState([]);

    useEffect(() => {
        if (auth?.session?.user?.organization)
            fetchJobProfiles({ token: auth.session.token }).then((jobProfiles) => {
                setJobProfiles(jobProfiles);
            });
    }, [auth?.session]);

    if (!auth?.session?.token) return <></>;

    return <Grid container spacing={3}>
        {jobProfiles.map((id) => (
            <Grid item key={id} xs={12} sm={6} md={4}>
                <JobCard id={id} />
            </Grid>
        ))}
    </Grid>
};

async function fetchJobProfiles({ token }) {
    const response = await fetch(`${API_URL}/organizations/job-profiles`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const data = await response.json();
    return data.payload.jobProfiles;
};
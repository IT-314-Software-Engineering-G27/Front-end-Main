import { Box, Grid, Typography } from "@mui/material";
import JobCard from "./JobCard";

export default function OrganizationJobList({ jobProfiles }) {

    return (<>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant="h3" gutterBottom component="div">
                Job Profiles
            </Typography>
        </Box>
        {!jobProfiles.length && <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant="h5" gutterBottom component="div">
                No job profiles yet
            </Typography>
        </Box>}
        <Grid container spacing={3}>
            {jobProfiles.map((id) => (
                <Grid item key={id} xs={12} sm={6} md={4}>
                    <JobCard id={id} />
                </Grid>
            ))}
        </Grid>
    </>);
};

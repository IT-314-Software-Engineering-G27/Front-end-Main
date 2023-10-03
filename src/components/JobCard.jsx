import { useEffect, useState } from "react";
import JobData from "../database/jobs";

import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Divider, LinearProgress, Skeleton, Typography } from "@mui/material";
import { Link } from "react-router-dom";

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

    if (isLoading) return (<Skeleton height={4} />);
    return (<>
        <Card sx={{ border: `1px solid ${isLoadingData ? "grey" : "black"}`, height: "100%", width: "100%", overflow: "clip", display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>

            <CardHeader
                avatar={
                    <Avatar src={`${job.company_logo}`} sx={{ width: 55, height: 55 }} variant="rounded" />}
                titleTypographyProps={{ variant: "h7" }}
                title={`${job.company}`}
                subheader={`${job.location}`}
                sx={{ color: isLoadingData ? "grey" : "black" }}
            />
            <CardHeader
                titleTypographyProps={{ variant: "h6" }}
                title={`${job.title}`}
                subheader={`${job.duration}`}
                sx={{ color: isLoadingData ? "grey" : "black" }}
            />
            <CardContent>

                <Typography variant="h6" gutterBottom>
                    {job.salary}$ /month
                </Typography>
                <Typography variant="caption" gutterBottom>
                    Posted on : {job.posted_on_time.toLocaleDateString()}
                    {job.company_id}
                </Typography>
            </CardContent>
            <Divider />
            <CardActions sx={{ marginTop: "auto" }}>
                <Button variant="contained" color="primary" fullWidth>
                    <Link to={`/jobs/${id}`}> View Details</Link>
                </Button>
            </CardActions>
        </Card>
    </>);
}
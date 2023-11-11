import { useAuth } from "../contexts/session";
import { API_URL } from "../config";
import { Card, CardHeader, Skeleton } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import JobCard from "./JobCard";
export default function JobApplicationCard({ id }) {
    const auth = useAuth();
    const { data: jobApplication } = useQuery({
        queryKey: ["job-application", { id, token: auth.session.token }],
        queryFn: () => fetchJobApplication({ id, token: auth.session.token }),
    });

    if (!jobApplication) return (<Skeleton height={400} />);

    return (
        <Card
            sx={{
                border: `1px solid black`, height: "100%", width: "100%", overflowX: "scroll", display: "flex", backgroundColor: 'white',
                borderRadius: "10px", flexDirection: "column", justifyContent: "space-between", boxShadow: "7px 7px rgba(0, 0, 0, 0.15)", padding: "1rem",
            }}>
            <CardHeader
                titleTypographyProps={{ variant: "h5" }}
                title={`status: ${jobApplication.status}`}
                sx={{ color: "black" }} />
            <JobCard id={jobApplication.job_profile} />
        </Card>
    )
};


async function fetchJobApplication({ id, token }) {
    const response = await fetch(`${API_URL}/job-applications/${id}/basic`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const data = await response.json();
    return data.payload.jobApplication;
}
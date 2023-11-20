import { useAuth } from "../contexts/session";
import { API_URL } from "../config";
import { Skeleton } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import JobCard from "./JobCard";
export default function JobApplicationCard({ id }) {
    const auth = useAuth();
    const { data: jobApplication } = useQuery({
        queryKey: ["job-application", { id, token: auth.session.token }],
        queryFn: () => fetchJobApplication({ id, token: auth.session.token }),
    });

    if (!jobApplication) return (<Skeleton height={400} />);

    return <JobCard id={jobApplication.job_profile} />;
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
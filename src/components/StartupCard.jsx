import { API_URL } from "../config";
import { Divider, Button, Card, CardActions, CardHeader, Skeleton, CardContent } from "@mui/material";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import OrganizationCard from "./OrganizationCard";


export default function StartUpCard({ id }) {
    const { data: startup } = useQuery({
        queryKey: ["startup-basic", id],
        queryFn: () => fetchStartUp({ id }),
    });

    if (!startup) {
        return <Skeleton variant="rectangular" height={200} width="100%" />
    }
    return (<>
        <Card sx={{
            border: `1px solid black`,
            height: "100%",
            width: "100%",
            overflow: "clip",
            display: "flex",
            backgroundColor: 'white',
            borderRadius: "10px",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: " 7px 7px rgba(0, 0, 0, 0.15)",
            padding: "1rem",
        }}>
            <CardHeader title={startup.title} titleTypographyProps={{ variant: "h6" }} />
            <Divider />
            <CardContent sx={{ p: 2 }}>
                <OrganizationCard id={startup.organization} />
            </CardContent>
            <Divider />
            <CardActions sx={{ display: "flex", justifyContent: "center", p: 3 }}>
                <Button component={Link} to={`/startups/${startup._id}`} sx={{ minWidth: "50%" }} variant="contained" color="primary">View More Details</Button>
            </CardActions>
        </Card>
    </>);
};

async function fetchStartUp({ id }) {
    const response = await fetch(`${API_URL}/registrations/${id}/basic`);
    const data = await response.json();
    if (!data?.payload?.registration) {
        return Promise.reject(data);
    }
    return data.payload.registration;
};


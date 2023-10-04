import { useEffect, useState } from "react";
import IndividualData from "../database/individual";
import { Card, CardContent, CardHeader, Skeleton, Typography, IconButton } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PublicIcon from '@mui/icons-material/Public';

const { fetchIndividual } = IndividualData;

export default function IndividualCard({ id, isLoadingData }) {
    const [individual, setIndividual] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetchIndividual(id).then((individual) => {
            setIndividual(individual);
            setIsLoading(false);
        });
    }, [id]);

    if (isLoading) return (<Skeleton height={4} />);

    return (
        <>
            <Card sx={{ border: `1px solid ${isLoadingData ? "grey" : "black"}`, height: "100%", width: "100%", overflow: "clip" }}>
                <CardHeader
                    titleTypographyProps={{ variant: "h5" }}
                    title={`${individual.first_name}`}
                    subheader={`${individual.last_name}`}
                    sx={{ color: isLoadingData ? "grey" : "black" }}
                />
                <CardContent>
                    <Typography variant="h6" gutterBottom sx={{ display: "flex", alignItems: "center" }}>
                        <EmailIcon sx={{ marginRight: "0.5rem" }} /> Email: {individual.email}
                    </Typography>
                    <Typography variant="h6" gutterBottom sx={{ display: "flex", alignItems: "center" }}>
                        <PublicIcon sx={{ marginRight: "0.5rem" }} /> Country: {individual.country}
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
}

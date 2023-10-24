import { useEffect, useState } from "react";
import { fetchIndividual } from "../database/individual";
import { Card, CardActions, CardContent, CardHeader, Skeleton, Typography, Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PublicIcon from '@mui/icons-material/Public';
import { Link } from "react-router-dom";

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
                <CardActions sx={{ marginTop: "auto", display: 'flex', justifyContent: 'center' }}>
                    <Link to={`/individuals/${id}`} style={{ width: '80%' }}>
                        <Button variant="contained" color="primary" sx={{ width: '100%' }}>
                            Visit Profile
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </>
    );
}

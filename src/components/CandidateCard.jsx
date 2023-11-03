import { useEffect, useState } from "react";
import { fetchIndividual } from "../database/individual";
import {Avatar, Card, CardActions, CardContent, CardHeader, Skeleton, Typography, Button } from "@mui/material";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import SchoolIcon from '@mui/icons-material/School';
import { Link } from "react-router-dom";

export default function CandidateCard({ id, isLoadingData }) {
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

                  avatar={
                        <Avatar src={individual.profile_img} sx={{ width: 55, height: 55 }} variant="rounded" />}
              
                    titleTypographyProps={{ variant: "h5" }}
                    
                    title={`${individual.first_name}`}
                    subheader={`${individual.last_name}`}
                    sx={{ color: isLoadingData ? "grey" : "black" }}
                />
                <CardContent>
                    <Typography variant="h6" gutterBottom sx={{ display: "flex", alignItems: "center" }}>
                        <AccountCircleRoundedIcon sx={{ marginRight: "0.5rem" }} /> Username: {individual.username}
                    </Typography>
                    <Typography variant="h6" gutterBottom sx={{ display: "flex", alignItems: "center" }}>
                        <SchoolIcon sx={{ marginRight: "0.5rem" }} /> Qualifications: {individual.college}
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

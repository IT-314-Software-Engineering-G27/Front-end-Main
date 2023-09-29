import { useEffect, useState } from "react";
import IndividualData from "../database/individual";
import { Card, CardContent, CardHeader, Skeleton, Typography } from "@mui/material";

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
    return (<>
        <Card sx={{ border: `1px solid ${isLoadingData ? "grey" : "black"}`, height: "100%", width: "100%", overflow: "clip" }}>
            <CardHeader
                titleTypographyProps={{ variant: "h5" }}
                title={`${individual.first_name}`}
                subheader={`${individual.last_name}`}
                sx={{ color: isLoadingData ? "grey" : "black" }}
            />
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Email: {individual.email}
                </Typography>
                <Typography variant="h6" gutterBottom>
                    Country: {individual.country}
                </Typography>
            </CardContent>
        </Card>
    </>);
}
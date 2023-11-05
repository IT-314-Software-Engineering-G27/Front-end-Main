import { useEffect, useState } from "react";
import { fetchIndividual } from "../database/individual";
import {Avatar,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Skeleton,
    Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { School as SchoolIcon,AccountCircleRounded as AccountCircleRoundedIcon } from "@mui/icons-material";

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
            <Card
                sx={{border: `1px solid ${isLoadingData ? "grey" : "black"}`,height: "100%", width: "100%",overflow: "clip", display: "flex",backgroundColor: 'white',
                    borderRadius: "10px",flexDirection: "column",justifyContent: "space-between", boxShadow: "7px 7px rgba(0, 0, 0, 0.15)", padding: "1rem",}}>
                <CardHeader
                avatar={ <Avatar src={individual.profile_img} sx={{ width: 60, height: 60 }} variant="rounded" />}
                    titleTypographyProps={{ variant: "h5" }}
                    title={`${individual.first_name}`}
                    subheader={`${individual.last_name}`}
                    sx={{ color: isLoadingData ? "grey" : "black" }} />
                <CardContent
                    sx={{
                        width: "100%", 
                        maxHeight: "50vh", 
                        overflowY: "auto", 
                    }}
                >
                    <Typography variant="h6" gutterBottom sx={{ display: "flex", alignItems: "center" }}>
                        <AccountCircleRoundedIcon sx={{
                            fontSize: 20,
                            width: "2rem",
                            height: "2rem",
                            verticalAlign: "right",
                            mb:1,
                            marginRight: "0.5rem",
                        }} />
                        <Typography
                            variant="body1"
                            gutterBottom
                            sx={{
                                fontsize : "1rem",
                                whiteSpace: "nowrap", 
                            }}
                        >
                     Username :    {individual.username}
                        </Typography>
                    </Typography>
                    <Typography variant="h6" gutterBottom sx={{ display: "flex", alignItems: "center" }}>
                        <SchoolIcon sx={{   fontSize: 20,
                            width: "2rem",
                            height: "2rem",
                            verticalAlign: "right",
                            mb:1,
                            marginRight: "0.5rem",}} /> 
                             <Typography
                            variant="body1"
                            gutterBottom
                            sx={{
                                fontsize : "1rem",
                                whiteSpace: "nowrap", 
                            }}
                        >
                     Qualifications :    {individual.college}
                        </Typography>
                    </Typography>
                </CardContent>
                <CardActions sx={{ marginTop: "auto", display: 'flex', justifyContent: 'center' }}>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        fullWidth
                        component={Link}
                        to={`/individuals/${id}`}
                        sx={{
                            width: '100%',
                            margin: 'auto',
                            transition: 'background-color 0.3s, transform 0.3s',
                            boxShadow: "5px 5px rgba(163, 23, 205, 0.1)",
                            '&:hover': {
                                backgroundColor: '#1976D2',
                                transform: 'scale(1.05)',
                            },
                        }}
                    >
                        Visit Profile
                    </Button>
                </CardActions>
            </Card>
        </>
    );
}

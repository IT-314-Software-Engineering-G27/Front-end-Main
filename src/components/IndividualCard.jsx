import { Button, Card, CardActions, CardContent, CardHeader, Skeleton, Typography, } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PublicIcon from '@mui/icons-material/Public';
import { Link } from "react-router-dom";
import { API_URL } from "../config";
import { useQuery } from "@tanstack/react-query";

export default function IndividualCard({ id }) {
    const { data: individual, } = useQuery({
        queryKey: ["individual-card", { id }],
        queryFn: () => fetchIndividual({ id }),
    });

    return (
        <>
            <Card
                sx={{
                    border: `1px solid black`,
                    height: "100%",
                    width: "100%",
                    overflow: "clip",
                    display: "flex",
                    backgroundColor: 'white',
                    borderRadius: "10px",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxShadow: "7px 7px rgba(0, 0, 0, 0.15)",
                    padding: "1rem",
                }}
            >
                {(!individual) ? <Skeleton variant="rectangular" animation="pulse" height={250} /> :
                    <>
                        <CardHeader
                            titleTypographyProps={{ variant: "h5" }}
                            title={`${individual.user.username}`}
                            subheader={`${individual.first_name} ${individual.last_name}`}
                            sx={{ color: "black" }}
                        />
                        <CardContent
                            sx={{
                                width: "100%",
                                maxHeight: "50vh",
                                overflowY: "auto",
                            }}
                        >
                            <Typography variant="h6" gutterBottom sx={{ display: "flex", alignItems: "center" }}>
                                <EmailIcon sx={{
                                    fontSize: 20,
                                    verticalAlign: "right",
                                    marginRight: "0.5rem",
                                }} />
                                <Typography
                                    variant="body1"
                                    gutterBottom
                                    sx={{
                                        fontsize: "1rem",
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    {individual.user.email}
                                </Typography>
                            </Typography>
                            <Typography variant="h6" gutterBottom sx={{ display: "flex", alignItems: "center" }}>
                                <PublicIcon sx={{ marginRight: "0.5rem" }} /> {individual.country}
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
                    </>}
            </Card>
        </>
    );
}

async function fetchIndividual({ id }) {
    const response = await fetch(`${API_URL}/individuals/${id}/basic`);
    const data = await response.json();
    return data.payload.individual;
}
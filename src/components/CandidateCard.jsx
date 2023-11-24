import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, Skeleton, Typography, } from "@mui/material";
import { Link } from "react-router-dom";
import { School as SchoolIcon, AccountCircleRounded as AccountCircleRoundedIcon, EngineeringRounded as EngineeringRoundedIcon } from "@mui/icons-material";
import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../config";
import { useAuth } from "../contexts/session";

export default function CandidateCard({ id, isLoadingData }) {
    const auth = useAuth();
    const { data: candidate, isLoading } = useQuery({
        queryKey: ["candidate", { id, token: auth.session.token }],
        queryFn: () => fetchCandidate({ id, token: auth.session.token }),
    });

    if (isLoading) return (<Skeleton height={4} />);

    return (
        <>
            <Card
                sx={{
                    border: `1px solid ${isLoadingData ? "grey" : "black"}`, height: "100%", width: "100%", overflowX: "scroll", display: "flex", backgroundColor: 'white',
                    borderRadius: "10px", flexDirection: "column", justifyContent: "space-between", boxShadow: "7px 7px rgba(0, 0, 0, 0.15)", padding: "1rem",
                }}>
                <CardHeader
                    titleTypographyProps={{ variant: "h5" }}
                    title={`${candidate.individual.first_name} ${candidate.individual.last_name}`}
                    subheader={`${candidate.individual.country}`}
                    sx={{ color: isLoadingData ? "grey" : "black" }} />
                <CardContent
                    sx={{
                        width: "100%",
                        maxHeight: "50vh",
                        overflowY: "auto",
                    }}
                ><Box gutterBottom sx={{ display: "flex", alignItems: "center" }}>
                        <EngineeringRoundedIcon sx={{
                            fontSize: 20,
                            width: "2rem",
                            height: "2rem",
                            verticalAlign: "right",
                            mb: 1,
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
                            Skills:  {candidate.individual.skills.join(", ")}
                        </Typography>
                    </Box>

                    <Box gutterBottom sx={{ display: "flex", alignItems: "center" }}>
                        <AccountCircleRoundedIcon sx={{
                            fontSize: 20,
                            width: "2rem",
                            height: "2rem",
                            verticalAlign: "right",
                            mb: 1,
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
                            Qualification:  {candidate.individual.degree}
                        </Typography>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <SchoolIcon sx={{
                            fontSize: 20,
                            width: "2rem",
                            height: "2rem",
                            verticalAlign: "right",
                            mb: 1,
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
                            Education:  {candidate.individual.college}
                        </Typography>
                    </Box>
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

async function fetchCandidate({ id, token }) {
    const response = await fetch(`${API_URL}/job-applications/${id}/basic`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const data = await response.json();
    return data.payload.jobApplication;
}
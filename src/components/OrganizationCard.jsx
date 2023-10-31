import { useEffect, useState } from "react";
import organizationData from "../database/organization";
import { Card, CardContent, CardHeader, Skeleton, Typography, CardActions, Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import WebIcon from '@mui/icons-material/Web';
import { Link } from "react-router-dom";

const { fetchOrganization } = organizationData;

export default function OrganizationCard({ id, isLoadingData }) {
    const [organization, setOrganization] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetchOrganization(id).then((organization) => {
            setOrganization(organization);
            setIsLoading(false);
        });
    }, [id]);

    if (isLoading) return (<Skeleton height={4} />);

    return (
        <>
            <Card
            sx={{
                border: `1px solid ${isLoadingData ? "grey" : "black"}`,
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
            <CardHeader
                    titleTypographyProps={{ variant: 'h5' }}
                    title={organization.legal_name}
                    subheader={`CEO: ${organization.name_of_ceo}`}
                    sx={{
                        color: isLoadingData ? 'grey' : 'black',
                    }}
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
                                fontsize : "1rem",
                                whiteSpace: "nowrap", 
                            }}
                        >
                         {organization.email}
                        </Typography>
                        </Typography>
                        <Typography variant="h6" gutterBottom sx={{ display: "flex", alignItems: "center" }}>
                        <WebIcon sx={{
                            fontSize: 20,
                            verticalAlign: "right",
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
                         {organization.website}
                        </Typography>
                        </Typography>

                </CardContent>
                <CardActions sx={{
                    marginTop: "auto", display: 'flex', justifyContent: 'center',
                }}>
                     <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        fullWidth
                        component={Link}
                        to={`/organizations/${id}`}
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
                        Visit Page
                   </Button>
                   
                </CardActions>
            </Card>
        </>
    );
}

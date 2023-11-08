import { Card, CardContent, CardHeader, Skeleton, Typography, CardActions, Button, Box } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import WebIcon from '@mui/icons-material/Web';
import { Link } from "react-router-dom";
import { API_URL } from "../config";
import { useQuery } from "@tanstack/react-query";

export default function OrganizationCard({ id }) {
    const { data: organization } = useQuery({
        queryKey: ["organization-card", { id }],
        queryFn: () => fetchOrganization({ id }),
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
            >{(!organization) ? <Skeleton variant="rectangular" animation="pulse" height={250} /> :
                <>
                    <CardHeader
                        titleTypographyProps={{ variant: 'h5' }}
                        title={organization.company_name}
                        subheader={`CEO: ${organization.CEOname}`}
                        sx={{
                            color: 'black',
                        }}
                    />
                    <CardContent
                        sx={{
                            width: "100%",
                            maxHeight: "50vh",
                        }}
                    >
                        <Box gutterBottom sx={{ display: "flex", alignItems: "center" }}>
                            <EmailIcon sx={{
                                fontSize: 20,
                                verticalAlign: "right",
                                marginRight: "0.5rem",
                            }} />
                            <Typography
                                variant="body1"
                                gutterBottom
                                component="span"
                                sx={{
                                    fontsize: "1rem",
                                    maxWidth: "100%",
                                    overflowWrap: "anywhere"
                                }}
                            >
                                {organization.user.email}
                            </Typography>
                        </Box>
                        <Box gutterBottom sx={{ display: "flex", alignItems: "center" }}>
                            <WebIcon sx={{
                                fontSize: 20,
                                verticalAlign: "right",
                                marginRight: "0.5rem",
                            }} />
                            <Typography
                                variant="body1"
                                gutterBottom
                                component="span"
                                sx={{
                                    fontsize: "1rem",
                                    maxWidth: "100%",
                                    overflowWrap: "anywhere"
                                }}
                            >
                                {organization.headquarter_location}
                            </Typography>
                        </Box>
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
                </>}
            </Card>
        </>
    );
}

async function fetchOrganization({ id }) {
    const response = await fetch(`${API_URL}/organizations/${id}/basic`);
    const data = await response.json();
    return data.payload.organization;
}
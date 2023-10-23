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
            <Card sx={{ border: `1px solid ${isLoadingData ? 'grey' : 'black'}`, height: '100%', width: '100%', overflow: 'clip' }}>
                <CardHeader
                    titleTypographyProps={{ variant: 'h5' }}
                    title={organization.legal_name}
                    subheader={`CEO: ${organization.name_of_ceo}`}
                    sx={{
                        color: isLoadingData ? 'grey' : 'black',
                        borderBottom: '1px solid',
                        borderBottomColor: isLoadingData ? 'grey' : 'black',
                    }}
                />
                <CardContent>
                    <Typography variant="h6" gutterBottom sx={{ display: "flex", alignItems: "center" }}>
                        <EmailIcon sx={{ marginRight: "0.5rem" }} /> Email: {organization.email}
                    </Typography>
                    <Typography variant="h6" gutterBottom sx={{ display: "flex", alignItems: "center" }}>
                        <WebIcon sx={{ marginRight: "0.5rem" }} /> Website: {organization.website}
                    </Typography>
                </CardContent>
                <CardActions sx={{
                    marginTop: "auto", display: 'flex', justifyContent: 'center',
                    borderTop: '1px solid',
                    borderTopColor: isLoadingData ? 'grey' : 'black',
                }}>
                    <Link to={`/organizations/${id}`} style={{ width: '80%' }}>
                        <Button variant="contained" color="primary" sx={{ width: '100%' }}>
                            Visit Page
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </>
    );
}

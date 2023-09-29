import { useEffect, useState } from "react";
import organizationData from "../database/organization";
import { Card, CardContent, CardHeader, Skeleton, Typography } from "@mui/material";

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
    return (<>
        <Card sx={{ border: `1px solid ${isLoadingData ? 'grey' : 'black'}`, height: '100%', width: '100%', overflow: 'clip' }}>
            <CardHeader
                titleTypographyProps={{ variant: 'h5' }}
                title={`${organization.legal_name}`}
                subheader={`CEO: ${organization.name_of_ceo}`}
                sx={{
                    color: isLoadingData ? 'grey' : 'black',
                    borderBottom: '1px solid',
                    borderBottomColor: isLoadingData ? 'grey' : 'black',
                }}
            />
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Email: {organization.email}
                </Typography>
                <Typography variant="h6" gutterBottom>
                    Website: {organization.website}
                </Typography>
            </CardContent>
        </Card>
    </>);
}
import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography, Avatar, Container, Paper, CircularProgress, } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../config";

export default function CompanyComponent({ id }) {

    const { data: organization, error, isLoading } = useQuery({
        queryKey: ["organization", { id }],
        queryFn: () => fetchOrganization({ id }),
    });

    if (!organization) {
        return (
            <Container maxWidth="md">
                <Paper elevation={3} style={{ padding: "2rem" }}>
                    <CircularProgress color="primary" />
                </Paper>
            </Container>
        );
    }

    return (<Box sx={{ mb: 2, p: 2, borderRadius: "6px", border: "1px solid #EAEBF3", background: "#FFF", boxShadow: "0px 1px 6px 0px rgba(156, 159, 181, 0.15);", }} >
        <Box sx={{ ml: 2 }}>
            <Box sx={{ mt: 2, mb: 2.5 }}>
                <Avatar sx={{ bgcolor: "lightblue", width: "55px", height: "55px" }} variant="rounded" src={`${organization.user.profile_image}`} ></Avatar>
            </Box>
            <Typography sx={{ textAlign: "left", color: "#232535", fontFamily: "sans-serif", fontSize: "20px", fontStyle: "WidthNormal", fontWeight: 600, lineHeight: "24px", mb: 1.5, }}>
                About {organization.company_name}
            </Typography>

            <Typography sx={{ textAlign: "left", color: "#232535", fontFamily: "sans-serif", fontSize: "18px", fontStyle: "WidthNormal", fontWeight: 400, lineHeight: "24px", mb: 1.5, }}>
                {organization.CEOname}
            </Typography>

            <Typography sx={{ textAlign: "left", color: "#484B62", fontFamily: "sans-serif", fontSize: "16px", fontStyle: " normal", fontWeight: 400, lineHeight: "26px", }}>
                {organization.headquarter_location}
            </Typography>
        </Box>
        <Box sx={{ textAlign: "center" }}>
            <Button variant="outlined" sx={{ width: "85%", m: 2, fontFamily: "sans-serif", fontSize: "12px", textTransform: "none", borderRadius: "5px", border: "1px solid #EAEBF3", background: "linear-gradient(180deg, #FFF 0%, #F3F3F7 100%);", boxShadow: "0px 3px 4px 0px rgba(20, 20, 43, 0.04);", }} LinkComponent={Link} to={`/organizations/${id}`}>
                View Profile
            </Button>
        </Box>
    </Box>);
};


async function fetchOrganization({ id }) {
    const response = await fetch(`${API_URL}/organizations/${id}/basic`);
    const data = await response.json();
    return data.payload.organization;
}

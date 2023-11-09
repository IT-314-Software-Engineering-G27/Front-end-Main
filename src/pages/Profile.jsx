
import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/session";
import { Navigate } from "react-router";
import { Typography } from "@mui/material";

export default function Profile() {
    const auth = useAuth();
    const [individual, setIndividual] = useState();
    const [organization, setOrganization] = useState();
    useEffect(() => {
        setIndividual(auth?.session?.user?.individual);
        setOrganization(auth?.session?.user?.organization);
    }, [auth?.session?.user]);

    if (individual)
        return <Navigate to={`/individuals/${individual}`} />;
    else if (organization)
        return <Navigate to={`/organizations/${organization}`} />;
    else
        return <Typography variant="h3">Loading...</Typography>;
};
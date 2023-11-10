import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/session";
import { Typography } from "@mui/material";
import EditIndividual from "./EditIndividualProfile";
import EditOrganization from "./EditOrganizationProfile";

export default function Profile() {
    const auth = useAuth();
    const [individual, setIndividual] = useState();
    const [organization, setOrganization] = useState();
    useEffect(() => {
        setIndividual(auth?.session?.user?.individual);
        setOrganization(auth?.session?.user?.organization);
    }, [auth?.session?.user]);

    if (individual)
        return <EditIndividual />;
    else if (organization)
        return <EditOrganization />;
    else
        return <Typography variant="h3">Loading...</Typography>;
};
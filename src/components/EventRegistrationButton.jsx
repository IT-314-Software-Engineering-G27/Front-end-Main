import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/session";
import { API_URL } from "../config";
import { useEffect, useState } from "react";

export default function EventRegistrationButton({ isSmallScreen, event }) {
    const auth = useAuth();
    const [registration, setRegistration] = useState(null);
    useEffect(() => {
        if (!auth?.session?.token) return;
        fetchEventStatus({ id: event._id, token: auth.session.token })
            .then((data) => {
                setRegistration(data);
            });
    }, [auth?.session?.token, event._id]);

    return <Button
        variant="contained"
        sx={{
            width: isSmallScreen ? "100%" : "85%",
            mb: 2,
            textAlign: "center",
            boxShadow: "0px 3px 6px 0px rgba(55, 111, 255, 0.16)",
        }}
        component={Link}
        to={registration?._id ? `/startups/${registration._id}` : `/events/${event._id}/register`}
    >
        {registration?._id ? "See Registration" : "Register"}
    </Button>;
};

async function fetchEventStatus({ id, token }) {
    const response = await fetch(`${API_URL}/events/${id}/status`, {
        headers: {
            "Authorization": `Bearer ${token}`,
        },
    });
    const data = await response.json();
    return data.payload.registration;
}
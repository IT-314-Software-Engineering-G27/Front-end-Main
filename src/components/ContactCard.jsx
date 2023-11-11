import { Typography, Box, Avatar, Skeleton } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../config";
import ContactStatusButton from "./ContactStatusButton";

export default function ContactCard({ id, token }) {
    const { contactId } = useParams();
    const { data: contact } = useQuery({
        queryKey: ["contact", { id, token }],
        queryFn: () => fetchContact({ id, token }),
        enabled: !!(id && token),
    });

    if (contact?.status === "rejected") return (<></>);

    return (
        <>
            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%", borderBottom: "0.5px solid black", padding: "0.5rem", backgroundColor: contactId === contact?._id ? "whitesmoke" : "white" }}>
                {!contact ?
                    <>
                        <Skeleton variant="circular" width={40} height={40} sx={{ marginRight: "20px" }} />
                        <Skeleton variant="rectangular" width={200} height={40} />
                    </>
                    : <>
                        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <Avatar sx={{ marginRight: "0.5rem" }} src={contact.recipient.profile_image} />
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
                            <Link to={`/contacts/${contact._id}`} style={{ textDecoration: "none", color: "black" }}>
                                <Typography variant="body1">{contact.recipient.username}</Typography>
                            </Link>
                            <Typography variant="body2" sx={{ display: "flex", alignItems: "center" }}>
                                Last seen: {new Date(contact?.last_seen).toLocaleString() || "Never"}
                            </Typography>
                            <ContactStatusButton connection={contact} />
                        </Box>
                    </>}
            </Box>

        </>
    );
};

async function fetchContact({ id, token }) {
    const response = await fetch(`${API_URL}/connections/${id}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const data = await response.json();
    return data.payload.connection;
}
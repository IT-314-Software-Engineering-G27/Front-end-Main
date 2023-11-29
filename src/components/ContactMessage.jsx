import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useAuth } from '../contexts/session';
import { API_URL } from "../config";

function MessageCard({ id }) {
    const auth = useAuth();
    const { data: message, isLoading } = useQuery({
        queryKey: ["message", { id, token: auth.session.token }],
        queryFn: () => fetchMessage({ id, token: auth.session.token }),
        enabled: !!(id && auth.session.token)
    });

    if (!message) return (<Skeleton variant="rectangular" height={50} width="50%" />);

    return (
        <Box sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: `${message.direction === "incoming" ? "flex-start" : "flex-end"}`,
        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                maxWidth: "80%",
                gap: "5px",
                textAlign: "left",
                border: "2px solid black",
                padding: "5px", borderRadius: "5px",
            }}>
                <Typography variant="caption1" sx={{ wordWrap: "break-word" }}>
                    {isLoading ? "Loading..." : message.content}
                </Typography>
                <Typography variant="caption1" sx={{ color: "black", minWidth: "10vw", textAlign: "end" }}>
                    {isLoading ? "Loading..." : message.direction === "outgoing" ?
                        ((message?.read_timestamp && new Date(message.read_timestamp).toLocaleString()) || "...") :
                        ((message?.sent_timestamp && new Date(message.sent_timestamp).toLocaleString()) || "...")}
                </Typography>
            </Box>
        </Box>
    );
}

async function fetchMessage({ id, token }) {
    const response = await fetch(`${API_URL}/messages/${id}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const data = await response.json();
    return data.payload.message;
};

export default MessageCard;

import React from 'react';
import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';
import { List, ListItem, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useAuth } from '../contexts/session';
import ContactCard from '../components/ContactCard';
import { API_URL } from "../config";

export default function ContactPage() {
    const auth = useAuth();
    const { data: connections } = useQuery({
        queryKey: ["connections", { token: auth.session.token }],
        queryFn: () => fetchConnections({ token: auth.session.token }),
        enabled: !!auth.session.token,
    });

    if (!connections) return <Typography variant="h4">Loading...</Typography>;

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', height: '100vh', padding: 0 }}>
            <Box sx={{ borderRight: 1, height: '100vh', }}>
                <Box sx={{ p: 4, borderBottom: 1 }}>
                    <Typography variant="h5">
                        Chats
                    </Typography>
                </Box>
                <List sx={{ p: 2 }}>
                    {connections.map((connection) => (
                        <ListItem key={connection} sx={{ p: 1 }}>
                            <ContactCard id={connection} token={auth.session.token} />
                        </ListItem>
                    ))}
                </List>
            </Box>
            <Outlet />
        </Box>
    );
}

async function fetchConnections({ token }) {
    const response = await fetch(`${API_URL}/connections`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const data = await response.json();
    return data.payload.connections;
}

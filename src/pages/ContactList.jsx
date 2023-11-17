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
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, height: '100vh' }}>
            <Box sx={{ borderRight: { xs: 0, md: 1 }, borderBottom: { xs: 1, md: 0 }, height: { xs: 'auto', md: '100vh' }, width: { xs: '100%', md: "20%" } }}>
                <Box sx={{ p: 3, borderBottom: { xs: 1, md: 0 } }}>
                    <Typography variant="h4">
                        Chats
                    </Typography>
                </Box>
                <List sx={{ width: "100%", borderTop: "0.5px solid black", maxHeight: 'calc(100vh - 120px)', overflowY: 'auto' }}>
                    {connections.map((connection) => (
                        <ContactCard key={connection} sx={{ width: "100%" }} id={connection} token={auth.session.token} />
                    ))}
                </List>
            </Box>
            <Box sx={{ width: "100%" }} >
                <Outlet />
            </Box>
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

import { Box, Button, List, ListItem, Skeleton, Stack, Typography } from '@mui/material';
import React, { useMemo, } from 'react';
import MessageCard from '../components/ContactMessage';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import ContactInput from '../components/ContactInput';
import { useParams } from 'react-router';
import { useAuth } from '../contexts/session';
import { API_URL } from "../config";

function ContactDetails() {
    const { contactId } = useParams();
    const auth = useAuth();
    const { data: contact } = useQuery({
        queryKey: ["contact", { id: contactId, token: auth.session.token }],
        queryFn: () => fetchContact({ id: contactId, token: auth.session.token }),
        enabled: !!(contactId && auth.session.token),
    });

    const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
        queryKey: ["messages", { id: contactId, token: auth.session.token }],
        queryFn: ({ pageParam = 0 }) => fetchMessages({ id: contactId, page: pageParam || 0, token: auth.session.token }),
        getNextPageParam: (lastPage, pages) => {
            if (lastPage.length < 10)
                return null;
            return pages.length;
        },
        enabled: !!(contactId && auth.session.token),
    });

    const messages = useMemo(() => {
        if (!data)
            return [];
        return data.pages.flatMap((page) => page);
    }, [data]);

    if (!contactId) return (<></>);

    if (!contact || !messages) return (
        <Skeleton variant="rectangular" height={600} width="100%" />
    );

    return (
        <Box sx={{ width: "100%" }}>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", p: 3, borderBottom: 1, backgroundColor: "primary.light" }}>
                <Typography variant="h4">{contact.recipient.username} </Typography>
                <Typography variant="h5">last seen: {contact?.last_seen?.toLocaleString() || "Never"} </Typography>
            </Box>
            <Box sx={{
                padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignContent: 'center', gap: '2vh', height: '85vh',
            }}>
                <Button id="load-more-button" onClick={() => {
                    fetchNextPage();
                }} disabled={!hasNextPage || isFetchingNextPage}>
                    {isFetchingNextPage
                        ? "Loading more..."
                        : hasNextPage
                            ? "Load More"
                            : "Nothing more to load"}
                </Button>
                {!data && <Skeleton variant="rectangular" height={600} width="100%" />}
                <List gap={2} sx={{ maxHeight: "60vh", padding: "2rem", overflowY: "scroll" }}>
                    {messages.map((id) => (
                        <ListItem key={id} sx={{ width: "100%", display: "flex", flexDirection: "row" }}>
                            <MessageCard id={id} />
                        </ListItem>
                    ))}
                </List>
                <ContactInput id={contactId} token={auth.session.token} />
            </Box>
        </Box>
    );
}

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

async function fetchMessages({ id, page, token }) {
    console.log(page);
    const response = await fetch(`${API_URL}/connections/${id}/messages?page=${page}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const data = await response.json();
    return data.payload.messages;
};

export default ContactDetails;

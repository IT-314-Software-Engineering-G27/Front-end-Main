import { Button, Container, Paper, Skeleton, Stack, Typography } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import MessageCard from '../components/ContactMessage';
import { asyncFetchMessages } from '../database/message';
import { fetchContact } from '../database/contact';
import { useInfiniteQuery } from '@tanstack/react-query';
import ContactInput from '../components/ContactInput';

function ContactDetails() {
    const [contact, setContact] = useState({});

    useEffect(() => {
        fetchContact(0).then((contact) => {
            setContact(contact);
        });
    }, []);

    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = useInfiniteQuery({
        queryKey: ["messages"],
        queryFn: ({ pageParam }) => asyncFetchMessages({ page: pageParam || 0 }),
        getNextPageParam: (lastPage, pages) => {
            if (lastPage.length < 10)
                return null;
            return pages.length;
        },
        retryOnMount: true,
    });

    const messages = useMemo(() => {
        if (!data)
            return [];
        return data.pages.flatMap((page) => page);
    }, [data]);

    return (
        <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
            <Paper sx={{
                display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: "2rem", backgroundColor: "primary.light",
                border: "3px solid black",
                margin: "1rem",
            }}>
                <Typography variant="h2">{contact.individual && contact.individual.username} </Typography>
                <Typography variant="h5">last seen: {contact.individual && contact.last_seen.toLocaleTimeString()} </Typography>
            </Paper>
            <Paper sx={{
                padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignContent: 'center', gap: '2vh', minHeight: "80vh",
                border: "3px solid black", }}>
                <Button id="load-more-button" onClick={() => {
                    fetchNextPage();
                }} disabled={!hasNextPage || isFetchingNextPage}>
                    {isFetchingNextPage
                        ? "Loading more..."
                        : hasNextPage
                            ? "Load More"
                            : "Nothing more to load"}
                </Button>
                {isLoading && !data && <Skeleton variant="rectangular" height={600} width="100%" />}
                <Stack gap={2} sx={{ display: 'flex', flexDirection: "column-reverse", justifyContent: "flex-end" }}>
                    {messages.map((id) => (
                        <MessageCard key={id} id={id} isLoadingData={isLoading} />
                    ))}
                </Stack>
                <ContactInput />
            </Paper>
        </Container >
    );
}

export default ContactDetails;

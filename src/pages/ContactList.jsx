import { useMemo } from "react";
import ContactCard from "../components/ContactCard";
import { asyncFetchContacts } from "../database/contact";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Container, Grid, Paper, Skeleton, Typography } from "@mui/material";
import FetchMoreButton from "../components/FetchMoreButton";

export default function ContactList() {
    const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, isLoading, isError, error } = useInfiniteQuery({
        queryKey: ["contacts"],
        queryFn: ({ pageParam }) => asyncFetchContacts({ page: pageParam || 1 }),
        getNextPageParam: (lastPage, pages) => {
            if (lastPage.length < 10) {
                return null;
            }
            return pages.length;
        },
    });

    const contacts = useMemo(() => {
        if (data) {
            return data.pages.flatMap((page) => page);
        }
        return [];
    }, [data]);

    return (
        <Container
            maxWidth="xl"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "2rem",
            }}
        >
            <Typography variant="h1">Contacts</Typography>
            <Paper
                elevation={3}
                style={{
                    padding: "2rem",
                    background: "rgba(255, 255, 255, 0.9)",
                    borderRadius: "8px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    width: "80vw"
                }}
            >
                {isLoading && !data && <Skeleton variant="rectangular" height={600} width="100%" />}
                {isError && (
                    <Typography variant="h2" color="error">
                        Error: {error.message}
                    </Typography>
                )}
                <Grid container spacing={1}>
                    {contacts.map((id) => (
                        <Grid item key={id} xs={12} >
                            <ContactCard id={id} isLoadingData={isLoading} />
                        </Grid>
                    ))}
                </Grid>
                <FetchMoreButton isFetchingNextPage={isFetchingNextPage} hasNextPage={hasNextPage} fetchNextPage={fetchNextPage} />
            </Paper>
        </Container>
    );
}

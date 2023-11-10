import { useMemo, useState } from "react";
import StartupCard from "../components/StartupCard";
import { useDeferredValue } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Container, Grid, Paper, Skeleton, Typography } from "@mui/material";
import ListSearchBar from "../components/ListSearchBar";
import FetchMoreButton from "../components/FetchMoreButton";
import { API_URL } from "../config";
import { useParams } from "react-router";

export default function StartupList() {
    const [query, setQuery] = useState("");
    const [deep, setDeep] = useState(false);
    const deferredQuery = useDeferredValue(query, { timeoutMs: 1000 });
    const { eventId } = useParams();

    const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, isLoading, isError, error } = useInfiniteQuery({
        queryKey: ["startups", deferredQuery],
        queryFn: ({ pageParam }) => fetchStartUpList({ id: eventId, query: deferredQuery, page: pageParam || 0 }),
        getNextPageParam: (lastPage, pages) => {
            if (lastPage.length < 10) {
                return null;
            }
            return pages.length;
        },
    });

    const startups = useMemo(() => {
        if (data)
            return data.pages.flatMap((page) => page);
        return [];
    }, [data]);

    return (
        <Container
            maxWidth="lg"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "2rem",
            }}
        >
            <Typography variant="h1">startups</Typography>
            <ListSearchBar isFetching={isFetching} query={query} setQuery={setQuery} deep={deep} setDeep={setDeep} />
            <Paper
                elevation={3}
                sx={{
                    p: {
                        xs: "1rem",
                        sm: "1.5rem",
                        md: "2rem",
                    },
                    background: "rgba(92, 36, 179, 0.2)",
                    borderRadius: "25px",
                    boxShadow: " 15px 15px rgba(0, 0, 0, 0.1) ",
                    width: "100%",

                }}
            >
                {isLoading && !data && <Skeleton variant="rectangular" height={600} width="100%" />}
                {isError && (
                    <Typography variant="h2" color="error">
                        Error: {error.message}
                    </Typography>
                )}
                <Grid container spacing={3} justifyContent='center'>
                    {startups.map((id) => (
                        <Grid item key={id} xs={6}>
                            <StartupCard id={id} />
                        </Grid>
                    ))}
                </Grid>
                <FetchMoreButton isFetchingNextPage={isFetchingNextPage} hasNextPage={hasNextPage} fetchNextPage={fetchNextPage} />
            </Paper>
        </Container>
    );
};

async function fetchStartUpList({ id, query, page }) {
    const response = await fetch(`${API_URL}/events/${id}/registrations/?query=${query}&page=${page}`);
    const data = await response.json();
    if (!data?.payload?.registrations) {
        return [];
    }
    return data.payload.registrations;
};
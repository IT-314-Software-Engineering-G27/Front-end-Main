import { useMemo, useState } from "react";
import EventCard from "../components/EventCard";
import { useDeferredValue } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Container, Grid, Paper, Skeleton, Typography } from "@mui/material";
import ListSearchBar from "../components/ListSearchBar";
import FetchMoreButton from "../components/FetchMoreButton";
import EventSelector from "../components/EventSelector";
import { API_URL } from "../config";

export default function EventList() {
    const [query, setQuery] = useState("");
    const [deep, setDeep] = useState(false);
    const deferredQuery = useDeferredValue(query, { timeoutMs: 1000 });
    const [type, setType] = useState("");

    const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, isLoading, isError, error } = useInfiniteQuery({
        queryKey: ["events", {query: deferredQuery, type}],
        queryFn: ({ pageParam }) => fetchEvents({ query: deferredQuery, page: pageParam || 0, type }),
        getNextPageParam: (lastPage, pages) => {
            if (lastPage.length < 10) {
                return null;
            }
            return pages.length;
        }
    });

    const events = useMemo(() => {
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
            <Typography variant="h1">Events</Typography>
            <EventSelector type={type} setType={setType} />
            <ListSearchBar isFetching={isFetching} query={query} setQuery={setQuery} deep={deep} setDeep={setDeep} />
            <Paper
                elevation={3}
                sx={{
                    padding: {
                        xs: "1rem",
                        sm: "1.5rem",
                        md: "2rem",
                    },
                    background: "rgba(92, 36, 179, 0.2)",
                    borderRadius: "25px",
                    boxShadow: " 10px 10px rgba(0, 0, 0, 0.1) ",
                    width: "100%",
                    marginBottom: "3rem"
                }}
            >
                {isLoading && !data && <Skeleton variant="rectangular" height={600} width="100%" />}
                {isError && (
                    <Typography variant="h2" color="error">
                        Error: {error.message}
                    </Typography>
                )}
                <Grid container spacing={3}>
                    {events.map((id) => (
                        <Grid item key={id} xs={12} sm={6}>
                            <EventCard id={id} />
                        </Grid>
                    ))}
                </Grid>
                <FetchMoreButton isFetchingNextPage={isFetchingNextPage} hasNextPage={hasNextPage} fetchNextPage={fetchNextPage} />
            </Paper>
        </Container>
    );
}

async function fetchEvents({ query, page, type }) {
    query = query.replace(/\s/g, "");
    const response = await fetch(`${API_URL}/events?query=${query}&page=${page}&type=${type}`);
    const data = await response.json();
    return data.payload.events;
}

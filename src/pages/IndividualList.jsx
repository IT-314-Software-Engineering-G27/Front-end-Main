import { useMemo, useState } from "react";
import IndividualCard from "../components/IndividualCard";
import { useDeferredValue } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Box, Container, Grid, Paper, Skeleton, Typography } from "@mui/material";
import ListSearchBar from "../components/ListSearchBar";
import FetchMoreButton from "../components/FetchMoreButton";
import { API_URL } from "../constants.js";

export default function IndividualList() {
    const [query, setQuery] = useState("");
    const [deep, setDeep] = useState(false);
    const deferredQuery = useDeferredValue(query, { timeoutMs: 1000 });

    const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, isLoading, isError, error } = useInfiniteQuery({
        queryKey: ["individuals", deferredQuery, deep],
        queryFn: ({ pageParam }) => fetchIndividuals({ query: deferredQuery, page: pageParam || 0, deep }),
        getNextPageParam: (lastPage, pages) => {
            if (lastPage.length < 10) {
                return null;
            }
            return pages.length;
        }
    });

    const individuals = useMemo(() => {
        if (data) {
            return data.pages.flatMap((page) => page);
        }
        return [];
    }, [data]);

    return (<Container
        maxWidth="lg"
        sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            gap: "1rem",

        }}
    >
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
                alignItems: "center",
                width: "100%",
                gap: "1rem",
                textAlign: "center",
            }}
        >
            <Typography variant="h1">Individuals</Typography>
            <ListSearchBar isFetching={isFetching} query={query} setQuery={setQuery} deep={deep} setDeep={setDeep} />
        </Paper>
        <Box sx={{ textAlign: "center" }}>
            {(isLoading || isFetching) && <Skeleton variant="rectangular" height="100vh" />}
            {isError && <Typography variant="h3" color="danger">{error.message}</Typography>}
            {!isLoading && individuals.length === 0 && <Typography variant="h3" color="InfoText">No results found</Typography>}
        </Box>
        <Paper
            elevation={3}
            style={{
                padding: "2rem",
                background: "rgba(92, 36, 179, 0.2)",
                borderRadius: "25px",
                alignItems: "center",
                boxShadow: " 15px 15px rgba(0, 0, 0, 0.1) ",
                width: "100%",
                marginBottom: "3rem"
            }}
        >
            <Grid container spacing={3}>
                {individuals.map((id) => (
                    <Grid item key={id} xs={12} sm={6}>
                        <IndividualCard id={id} />
                    </Grid>
                ))}
            </Grid>
            <FetchMoreButton isFetchingNextPage={isFetchingNextPage} hasNextPage={hasNextPage} fetchNextPage={fetchNextPage} />
        </Paper>
    </Container >
    );
}

async function fetchIndividuals({ query, page, deep }) {
    query = query.replace(/\s/g, "");
    const response = await fetch(`${API_URL}/individuals?query=${query}&page=${page}&deep=${deep}`);
    const data = await response.json();
    return data.payload.individuals;
}
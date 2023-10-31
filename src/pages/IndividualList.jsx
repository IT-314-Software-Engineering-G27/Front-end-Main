import { useEffect, useMemo, useState } from "react";
import IndividualCard from "../components/IndividualCard";
import { asyncFetchIndividuals } from "../database/individual";
import { useDeferredValue } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Container, Grid, Paper, Skeleton, Typography } from "@mui/material";
import ListSearchBar from "../components/ListSearchBar";
import FetchMoreButton from "../components/FetchMoreButton";


export default function IndividualList() {
    const [query, setQuery] = useState(" ");
    const deferredQuery = useDeferredValue(query, { timeoutMs: 1000 });
    useEffect(() => {
        setQuery("");
    }, []);

    const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, isLoading, isError, error } = useInfiniteQuery({
        queryKey: ["organizations", deferredQuery],
        queryFn: ({ pageParam }) => asyncFetchIndividuals({ query: deferredQuery, page: pageParam + 1 || 1 }),
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
            width : "100%",
            gap: "1rem",
               
        }}
    >
        <Typography variant="h1">Individuals</Typography>
        <ListSearchBar isFetching={isFetching} query={query} setQuery={setQuery} />
        <Paper
            elevation={3}
            style={{
                padding: "2rem",
                background: "rgba(92, 36, 179, 0.2)",
                borderRadius: "25px",
                alignItems: "center",
                boxShadow: " 15px 15px rgba(0, 0, 0, 0.1) ",
                width: "100%",
                marginBottom : "3rem"
            }}
        >
            {isLoading && !data && <Skeleton variant="rectangular" height={600} width="100%" />}
            {isError && (
                <Typography variant="h2" color="error">
                    Error: {error.message}
                </Typography>
            )}
            
            <Grid container spacing={3}>
                {individuals.map((id) => (
                    <Grid item key={id} xs={12} sm={6}>
                        <IndividualCard id={id} isLoadingData={isLoading} />
                    </Grid>
                ))}
            </Grid>
            <FetchMoreButton isFetchingNextPage={isFetchingNextPage} hasNextPage={hasNextPage} fetchNextPage={fetchNextPage} />
        </Paper>
    </Container>
    );
}

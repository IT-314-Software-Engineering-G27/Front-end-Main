import { useDeferredValue, useMemo, useState } from "react";
import OrganizationCard from "../components/OrganizationCard";
import { Box, Container, Grid, Paper, Skeleton, Typography } from "@mui/material";
import { useInfiniteQuery } from "@tanstack/react-query";
import ListSearchBar from "../components/ListSearchBar";
import FetchMoreButton from "../components/FetchMoreButton";
import { API_URL } from "../config";

export default function IndividualList() {
    const [query, setQuery] = useState("");
    const [deep, setDeep] = useState(false);
    const deferredQuery = useDeferredValue(query, { timeoutMs: 1000 });

    const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, isLoading, isError, error } = useInfiniteQuery({
        queryKey: ["organizations", { query: deferredQuery, deep }],
        queryFn: ({ pageParam }) => fetchOrganizations({ query: deferredQuery, page: pageParam || 0, deep }),
        getNextPageParam: (lastPage, pages) => {
            if (lastPage.length < 10) {
                return null;
            }
            return pages.length;
        }
    });

    const organizations = useMemo(() => {
        if (data) {
            return data.pages.flatMap((page) => page);
        }
        return [];
    }, [data]);

    return (


        <Container
            maxWidth="lg"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                gap: "1rem",
            }}
        >
            <Typography variant="h1">Organizations</Typography>
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
                    alignItems: "center",
                    boxShadow: " 15px 15px rgba(0, 0, 0, 0.1) ",
                    width: "100%",
                    marginBottom: "3rem"
                }}
            >
                <Box sx={{ textAlign: "center" }}>
                    {(isLoading || isFetching) && <Skeleton variant="rectangular" height="100vh" />}
                    {isError && <Typography variant="h3" color="danger">{error.message}</Typography>}
                    {!isLoading && organizations.length === 0 && <Typography variant="h3" color="InfoText">No results found</Typography>}
                </Box>
                <Grid container spacing={3}>
                    {organizations.map((id) => (
                        <Grid item key={id} xs={12} sm={6}>
                            <OrganizationCard id={id} />
                        </Grid>
                    ))}
                </Grid>
                <FetchMoreButton isFetchingNextPage={isFetchingNextPage} hasNextPage={hasNextPage} fetchNextPage={fetchNextPage} />
            </Paper>
        </Container>
    );
}


async function fetchOrganizations({ query, page, deep }) {
    query = query.replace(/\s/g, "");
    const response = await fetch(`${API_URL}/organizations?query=${query}&page=${page}&deep=${deep}`);
    const data = await response.json();
    return data.payload.organizations;
}
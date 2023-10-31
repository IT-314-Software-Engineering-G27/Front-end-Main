import { useDeferredValue, useEffect, useMemo, useState } from "react";
import organizationData from "../database/organization";
import OrganizationCard from "../components/OrganizationCard";
import { Container, Grid, Paper, Skeleton, Typography } from "@mui/material";
import { useInfiniteQuery } from "@tanstack/react-query";
import ListSearchBar from "../components/ListSearchBar";
import FetchMoreButton from "../components/FetchMoreButton";
const { asyncFetchOrganizations } = organizationData;

export default function IndividualList() {
    const [query, setQuery] = useState(" ");
    const deferredQuery = useDeferredValue(query, { timeoutMs: 1000 });
    useEffect(() => {
        setQuery("");
    }, []);

    const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, isLoading, isError, error } = useInfiniteQuery({
        queryKey: ["organizations", deferredQuery],
        queryFn: ({ pageParam }) => asyncFetchOrganizations({ query: deferredQuery, page: pageParam + 1 || 1 }),
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
                width : "100%",
                gap: "1rem",
            }}
        >
            <Typography variant="h0.9">Organizations</Typography>
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
                    {organizations.map((id) => (
                        <Grid item key={id} xs={12} sm={6}>
                            <OrganizationCard id={id} isLoadingData={isLoading} />
                        </Grid>
                    ))}
                </Grid>
                <FetchMoreButton isFetchingNextPage={isFetchingNextPage} hasNextPage={hasNextPage} fetchNextPage={fetchNextPage} />
            </Paper>
        </Container>
    );
}

import React, { useMemo, useState } from "react";
import JobCard from "../components/JobCard";
import JobData from "../database/jobs";
import { useDeferredValue } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import {
    Container,
    Grid,
    Paper,
    Skeleton,
    Typography,
} from "@mui/material";
import ListSearchBar from "../components/ListSearchBar";
import FetchMoreButton from "../components/FetchMoreButton";

const { asyncFetchJobs } = JobData;

export default function JobList() {
    const [query, setQuery] = useState("");
    const deferredQuery = useDeferredValue(query, { timeoutMs: 1000 });

    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        isLoading,
        isError,
        error,
    } = useInfiniteQuery({
        queryKey: ["jobs", deferredQuery],
        queryFn: ({ pageParam }) =>
            asyncFetchJobs({ query: deferredQuery, page: pageParam + 1 || 1 }),
        getNextPageParam: (lastPage, pages) => {
            if (lastPage.length < 10) {
                return null;
            }
            return pages.length;
        },
    });

    const jobs = useMemo(() => {
        if (data) {
            return data.pages.flatMap((page) => page);
        }
        return [];
    }, [data]);

    return (
        <Container
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width : "100%",
                gap: "1rem",
               
            }}
        >
            <Typography variant="h1">Jobs</Typography>
            <ListSearchBar isFetching={isFetching} setQuery={setQuery} query={query} />
            <Paper
                elevation={3}
                sx={{
                    p:{
                        xs:"1rem",
                        sm:"1.5rem",
                        md:"2rem",
                    },
                    borderRadius: "25px",
                    alignItems: "center",
                    background: "rgba(92, 36, 179, 0.2)",
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
                    {jobs.map((id) => (
                        <Grid item key={id} xs={12} sm={6} md={4}> 
                            <JobCard id={id} isLoadingData={isLoading} />
                        </Grid>
                    ))}
                </Grid>
                <Grid paper xs={10} sm={6} md={4}> 
                </Grid>
                
                <FetchMoreButton isFetchingNextPage={isFetchingNextPage} hasNextPage={hasNextPage} fetchNextPage={fetchNextPage} />
            </Paper>
        </Container>
    );
}

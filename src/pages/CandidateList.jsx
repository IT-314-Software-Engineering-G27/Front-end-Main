import { useMemo, useState } from "react";
import CandidateCard from "../components/CandidateCard";
import { useDeferredValue } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Container, Grid, Paper, Skeleton, Typography } from "@mui/material";
import ListSearchBar from "../components/ListSearchBar";
import FetchMoreButton from "../components/FetchMoreButton";
import { API_URL } from "../config";
import { useAuth } from "../contexts/session";
import { useParams } from "react-router";

export default function CandidateList() {
    const auth = useAuth();
    const { jobId } = useParams();
    const [deep, setDeep] = useState(false);
    const [query, setQuery] = useState("");
    const deferredQuery = useDeferredValue(query, { timeoutMs: 1000 });

    const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, isLoading, isError, error } = useInfiniteQuery({
        queryKey: ["candidates", deferredQuery],
        queryFn: ({ pageParam }) => fetchCandidates({ id: jobId, query: deferredQuery, page: pageParam || 0 }),
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
            gap: "2rem",
        }}
    >
        <Typography variant="h1">Candidates</Typography>
        <ListSearchBar isFetching={isFetching} query={query} setQuery={setQuery} deep={deep} setDeep={setDeep} />
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
            <Grid container spacing={3}>
                {individuals.map((id) => (
                    <Grid item key={id} xs={12} sm={6} >
                        <CandidateCard id={id} isLoadingData={isLoading} />
                    </Grid>
                ))}
            </Grid>
            <FetchMoreButton isFetchingNextPage={isFetchingNextPage} hasNextPage={hasNextPage} fetchNextPage={fetchNextPage} />
        </Paper>
    </Container>
    );
}

async function fetchCandidates({ id, query, page }) {
    const response = await fetch(`${API_URL}/${id}/applications/?query=${query}&page=${page}`);
    const data = await response.json();
    if (!data?.payload?.jobApplications) {
        return [];
    }
    return data.payload.jobApplications;
};
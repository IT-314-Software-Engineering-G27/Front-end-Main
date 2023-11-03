import {  useMemo, useState } from "react";
import PostCard from "../components/PostCard";
import PostsData from "../database/post";
import { useDeferredValue } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Container, Grid, Paper, Skeleton, Typography } from "@mui/material";
import ListSearchBar from "../components/ListSearchBar";
import FetchMoreButton from "../components/FetchMoreButton";
const { asyncFetchPosts } = PostsData;

export default function PostList() {
    const [query, setQuery] = useState("");
    const deferredQuery = useDeferredValue(query, { timeoutMs: 1000 });

    const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, isLoading, isError, error } = useInfiniteQuery({
        queryKey: ["Posts", deferredQuery],
        queryFn: ({ pageParam }) => asyncFetchPosts({ query: deferredQuery, page: pageParam + 1 || 1 }),
        getNextPageParam: (lastPage, pages) => {
            if (lastPage.length < 10) {
                return null;
            }
            return pages.length;
        },

    });

    const Posts = useMemo(() => {
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
            <Typography variant="h1">Posts</Typography>
            <ListSearchBar isFetching={isFetching} query={query} setQuery={setQuery} />
            <Paper
                elevation={3}
                sx={{
                    p:{
                        xs:"1rem",
                        sm:"1.5rem",
                        md:"2rem",
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
                    {Posts.map((id) => (
                        <Grid item key={id} xs={12}>
                            <PostCard id={id} isLoadingData={isLoading} />
                        </Grid>
                    ))}
                </Grid>
                <FetchMoreButton isFetchingNextPage={isFetchingNextPage} hasNextPage={hasNextPage} fetchNextPage={fetchNextPage} />
            </Paper>
        </Container>
    );
}

import { useEffect, useMemo, useState } from "react";
import PostCard from "../components/PostCard";
import PostsData from "../database/post";
import { useDeferredValue } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Box, Button, CircularProgress, Container, Grid, Paper, Skeleton, TextField, Typography } from "@mui/material";



const { asyncFetchPosts } = PostsData;

export default function PostList() {
    const [query, setQuery] = useState(" ");
    const deferredQuery = useDeferredValue(query, { timeoutMs: 1000 });
    useEffect(() => {
        setQuery("");
    }, []);

    const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, isLoading, isError, error } = useInfiniteQuery({
        queryKey: ["Posts", deferredQuery],
        queryFn: ({ pageParam }) => asyncFetchPosts({ query: deferredQuery, page: pageParam + 1 || 1 }),
        getNextPageParam: (lastPage, pages) => {
            if (lastPage.length < 10) {
                return null;
            }
            return pages.length;
        }
    });

    const Posts = useMemo(() => {
        if (data) {
            return data.pages.flatMap((page) => page);
        }
        return [];
    }, [data]);

    return (


    

      
        <Container maxWidth="lg" sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem" }}>
        <Typography variant="h1">Posts</Typography>
        <Box border={1} p={2} borderRadius={2} sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "1rem" }}>
            <TextField
                label="Search"
                variant="outlined"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                focused
            />
            {isFetching && <CircularProgress color="secondary" />}
        </Box>
        <Paper elevation={3} style={{ padding: '2rem', minWidth: "100vw" }}>
            {isLoading && !data && <Skeleton variant="rectangular" height={600} />}
            {isError && (
                <Typography variant="h2" color="error">
                    Error: {error.message}
                </Typography>
            )}
            
            <Grid container spacing={3}>
                {Posts.map((id) => (
                    <Grid item key={id} xs={12} >
                 
                        
                            <PostCard id={id} isLoadingData={isLoading} />
                     
                         
                    </Grid>
                ))}
            </Grid>
            
            <Button
                onClick={() => fetchNextPage()}
                disabled={!hasNextPage || isFetchingNextPage}
                variant="contained"
                color="primary"
                fullWidth={true}
                sx={{ marginTop: "1rem" }}
                onMouseOver={() => {
                    if (!hasNextPage || isFetchingNextPage)
                        return;
                    fetchNextPage();
                }}
            >
                {isFetchingNextPage ?
                    <Typography variant="h5" color="info.main">
                        Loading more...
                    </Typography>
                    : hasNextPage ? <Typography variant="h5">Load More</Typography>
                        : <Typography variant="h5">Nothing more to load</Typography>
                }
            </Button>
        </Paper>
    </Container>
    );
}
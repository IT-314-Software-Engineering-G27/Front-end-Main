import React, { useMemo, useState } from "react";
import JobCard from "../components/JobCard";
import { useDeferredValue } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Box, Container, Grid, Paper, Skeleton, Typography } from "@mui/material";
import ListSearchBar from "../components/ListSearchBar";
import FetchMoreButton from "../components/FetchMoreButton";
import { API_URL } from "../config";
import Image from "../images/bg.svg";

export default function JobList() {
    const [query, setQuery] = useState("");
    const deferredQuery = useDeferredValue(query, { timeoutMs: 1000 });
    const [deep, setDeep] = useState(false);
    const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, isLoading, isError, error, } = useInfiniteQuery({
        queryKey: ["jobs", { deferredQuery, deep }],
        queryFn: ({ pageParam }) => fetchJobProfiles({ query: deferredQuery, page: pageParam || 0, deep }),
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
          display: "flex",
          alignItems: "center",
          width: "100%",
          gap: "1rem",
        //   background: `url(${Image})`,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" },
            flex: 1,
          }}
        >
          Jobs
        </Typography>
        <ListSearchBar
          isFetching={isFetching}
          setQuery={setQuery}
          query={query}
          deep={deep}
          setDeep={setDeep}
        />
      </Paper>
      <Paper
        elevation={3}
        sx={{
          p: {
            xs: "1rem",
            sm: "1.5rem",
            md: "2rem",
          },
          borderRadius: "25px",
          alignItems: "center",
          background: "rgba(92, 36, 179, 0.2)",
          boxShadow: " 7px 7px rgba(0, 0, 0, 0.1)",
          width: "100%",
          marginBottom: "3rem",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          {(isLoading || isFetching) && <Skeleton variant="rectangular" height="100vh" />}
          {isError && (
            <Typography variant="h3" color="danger">
              {error.message}
            </Typography>
          )}
          {!isLoading && jobs.length === 0 && (
            <Typography variant="h3" color="InfoText">
              No results found
            </Typography>
          )}
        </Box>
        <Grid container spacing={3}>
          {jobs.map((id) => (
            <Grid item key={id} xs={12} sm={6} md={4}>
              <JobCard id={id} />
            </Grid>
          ))}
        </Grid>
        <FetchMoreButton
          isFetchingNextPage={isFetchingNextPage}
          hasNextPage={hasNextPage}
          fetchNextPage={fetchNextPage}
        />
      </Paper>
    </Container>
  );
}

async function fetchJobProfiles({ query, page, deep }) {
  query = query.replace(/\s/g, "");
  const response = await fetch(`${API_URL}/job-profiles?query=${query}&page=${page}&deep=${deep}`);
  const data = await response.json();
  return data.payload.job_profiles;
}

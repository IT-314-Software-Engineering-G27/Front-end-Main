import { useDeferredValue, useEffect, useMemo, useState } from "react";
import organizationData from "../database/organization";
import OrganizationCard from "../components/OrganizationCard";
import { Box, Button, CircularProgress, Container, Grid, Paper, Skeleton, TextField, Typography } from "@mui/material";
import { useInfiniteQuery } from "@tanstack/react-query";
import ClearIcon from "@mui/icons-material/Clear";
const { asyncFetchOrganizations } = organizationData;

export default function IndividualList() {
    const [query, setQuery] = useState(" ");
    const deferredQuery = useDeferredValue(query, { timeoutMs: 1000 });
    useEffect(() => {
        setQuery("");
    }, []);
    const handleClear = () => {
        setQuery("");
      };
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
          gap: "2rem",
        }}
      >
        <Typography variant="h1">Organizations</Typography>
        <Box
          p={2}
          borderRadius={2}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "1rem",
            background: "#f0f4f8",
            width: "80rem",
          }}
        >
          <Box
            p={2}
            borderRadius={2}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "1rem",
              background: "#fff",
              padding: "0.5rem",
              width: "100%", 
            }}
          >
            <TextField
              placeholder="Search here..."
              variant="outlined"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              focused
              fullWidth
              InputProps={{
                endAdornment: query && (
                  <ClearIcon
                    onClick={handleClear}
                    style={{ cursor: "pointer" }}
                  />
                ),
                sx: {
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                  "& .MuiInputBase-input": {
                    background: "white",
                  },
                },
              }}
            />
            {isFetching && (
              <CircularProgress
                color="secondary"
                sx={{ marginLeft: "auto" }} 
              />
            )}
          </Box>
        </Box>
        <Paper
          elevation={3}
          style={{
            padding: "2rem",
            background: "rgba(255, 255, 255, 0.9)",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          {isLoading && !data && <Skeleton variant="rectangular" height={600} />}
          {isError && (
            <Typography variant="h2" color="error">
              Error: {error.message}
            </Typography>
          )}
          <Grid container spacing={3}>
            {organizations.map((id) => (
              <Grid item key={id} xs={12} sm={6} md={4}>
                <OrganizationCard id={id} isLoadingData={isLoading} />
              </Grid>
            ))}
          </Grid>
         
  
  
          <Button
    onClick={() => fetchNextPage()}
    disabled={!hasNextPage || isFetchingNextPage}
    variant="contained"
    color="primary"
    fullWidth={true}
    sx={{
      marginTop: "1rem",
      background: "#007bff",
      color: "#fff",
      padding: "5px 15px", 
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
      "&:hover": {
        backgroundColor: "#0056b3",
      },
      display: "flex", 
      justifyContent: "center", 
    }}
  >
    {isFetchingNextPage ? (
      <Typography variant="h5" color="info.main">
        Loading more...
      </Typography>
    ) : hasNextPage ? (
      <Typography variant="h6">Load More</Typography> 
    ) : (
      <Typography variant="h6">Nothing more to load</Typography> 
    )}
  </Button>
  
  
  
        </Paper>
      </Container>
    );
  }
  
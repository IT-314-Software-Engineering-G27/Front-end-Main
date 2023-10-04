import { useEffect, useMemo, useState } from "react";
import EventCard from "../components/EventCard";
import EventsData from "../database/event";
import { useDeferredValue } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Box, Button, CircularProgress, Container, Grid, Paper, Skeleton, TextField, Typography } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

const { asyncFetchEvents } = EventsData;

export default function EventList() {
    const [query, setQuery] = useState(" ");
    const deferredQuery = useDeferredValue(query, { timeoutMs: 1000 });
    useEffect(() => {
        setQuery("");
    }, []);

    const handleClear = () => {
        
        setQuery("");
      };


    const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, isLoading, isError, error } = useInfiniteQuery({
        queryKey: ["Events", deferredQuery],
        queryFn: ({ pageParam }) => asyncFetchEvents({ query: deferredQuery, page: pageParam + 1 || 1 }),
        getNextPageParam: (lastPage, pages) => {
            if (lastPage.length < 10) {
                return null;
            }
            return pages.length;
        }
    });

    const Events = useMemo(() => {
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
          <Typography variant="h1">Events</Typography>
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
             minWidth: "100vw",
            }}
          >
            {isLoading && !data && <Skeleton variant="rectangular" height={600} />}
            {isError && (
              <Typography variant="h2" color="error">
                Error: {error.message}
              </Typography>
            )}
            <Grid container spacing={3}>
              {Events.map((id) => (
                <Grid item key={id} xs={12} >
                  <EventCard id={id} isLoadingData={isLoading} />
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
    
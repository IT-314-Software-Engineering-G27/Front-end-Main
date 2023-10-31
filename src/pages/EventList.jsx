import { useMemo, useState } from "react";
import EventCard from "../components/EventCard";
import EventsData from "../database/event";
import { useDeferredValue } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Container, Grid, Paper, Skeleton, Typography,ButtonGroup,Button,Box } from "@mui/material";
import ListSearchBar from "../components/ListSearchBar";
import FetchMoreButton from "../components/FetchMoreButton";

const { asyncFetchEvents } = EventsData;

export default function EventList() {
    const [query, setQuery] = useState(" ");
    const deferredQuery = useDeferredValue(query, { timeoutMs: 1000 });

    
    const [selectedButtonIndex, setSelectedButtonIndex] = useState(1); 

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



  

    const buttons = [
      <Button sx={{mr:{lg:2,md:2,sm:0}, width: '200px', borderRadius: '10px',  fontSize: selectedButtonIndex === 0 ? '16px' : '14px',  fontWeight: selectedButtonIndex === 0 ? 'bold' : 'normal',
         backgroundColor: selectedButtonIndex === 0 ? 'white' : 'transparent', border: 'none',
         ':hover': { color:'black', fontWeight: 'bold', backgroundColor: 'white', border: 'none', borderRadius: '10px', },}}
         onClick={() => setSelectedButtonIndex(0)}> 
         Past Events</Button>,
           <Button sx={{mr:{lg:2,md:2,sm:0}, width: '200px', borderRadius: '10px', fontSize: selectedButtonIndex === 1 ? '16px' : '14px',  fontWeight: selectedButtonIndex === 1 ? 'bold' : 'normal', 
            backgroundColor: selectedButtonIndex === 1 ? 'white' : 'transparent', border: 'none',
            ':hover': { color:'black', fontWeight: 'bold', backgroundColor: 'white', border: 'none', borderRadius: '10px', },}}
            onClick={() => setSelectedButtonIndex(1)}>   
            Ongoing Events</Button>,
            
            <Button sx={{ width: '200px', borderRadius: '10px', fontSize: selectedButtonIndex === 2 ? '16px' : '14px',fontWeight: selectedButtonIndex === 2 ? 'bold' : 'normal', 
             backgroundColor: selectedButtonIndex === 2 ? 'white' : 'transparent', border: 'none',
            ':hover': {color:'black',fontWeight: 'bold', backgroundColor: 'white', border: 'none', borderRadius: '10px', },}}
            onClick={() => setSelectedButtonIndex(2)}>     
            Future Events</Button>, ];

    return (
        <Container
            maxWidth="xl"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "2rem",
            }}
        >
            <Typography variant="h1">Events</Typography>

            <Box sx={{ alignItems: 'center',backgroundColor:'rgba(0,0,0,.2)', borderRadius:'10px' , px:2, py:1, }}>
      
                <Box sx={{width:'100%', display:'flex', flexDirection:{xs:'column',sm:'row',md:'row', lg:'row'} }}>
                   {buttons}
                </Box>
            </Box>

    <ListSearchBar isFetching={isFetching} query={query} setQuery={setQuery} />
            <Paper
                elevation={3}
                style={{
                    padding: "3rem",
                    background: "rgba(92, 36, 179, 0.2)",
                    borderRadius: "25px",
                    boxShadow: " 10px 10px rgba(0, 0, 0, 0.1) ",
                    width: "90vw",
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
                    {Events.map((id) => (
                        <Grid item key={id} xs={12}> 
                            <EventCard id={id} isLoadingData={isLoading} />
                        </Grid>
                    ))}
                </Grid>
                <FetchMoreButton isFetchingNextPage={isFetchingNextPage} hasNextPage={hasNextPage} fetchNextPage={fetchNextPage} />
            </Paper>
        </Container>
    );
}

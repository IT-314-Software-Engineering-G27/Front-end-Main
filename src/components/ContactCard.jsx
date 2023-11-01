import { useEffect, useState } from "react";
import { fetchContact } from "../database/contact";
import { Card, CardActions, CardContent, CardHeader, Skeleton, Typography, Button } from "@mui/material";
import { PunchClock } from "@mui/icons-material";
import { Link } from "react-router-dom";


export default function ContactCard({ id, isLoadingData }) {
    const [contact, setContact] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetchContact(id).then((contact) => {
            setContact(contact);
            setIsLoading(false);
        });
    }, [id]);

    if (isLoading) return (<Skeleton height={4} />);

    return (
        <>
            <Card
        sx={{
          border: `1px solid ${isLoadingData ? "grey" : "black"}`,
          height: "100%",
          width: "100%",
          overflow: "clip",
          display: "flex",
          backgroundColor :  'white',
          borderRadius: "10px",
          flexDirection: "column",
          justifyContent: "space-between",
          boxShadow : " 5px 5px rgba(0, 0, 0, 0.15)",
          padding: "1rem",

          
        }}
      >
          <CardHeader
                    titleTypographyProps={{ variant: "h5" }}
                    title={`${contact.individual.username}`}
                    subheader={`${contact.individual.email}`}
                    sx={{ color: isLoadingData ? "grey" : "black" }}
                />
                <CardContent>
                    <Typography variant="h6" gutterBottom sx={{ display: "flex", alignItems: "center" }}>
                        <PunchClock sx={{ marginRight: "0.5rem" }} /> LastSeen: {contact.last_seen.toLocaleString()}
                    </Typography>
                </CardContent>
                <CardActions sx={{ marginTop: "auto", display: 'flex', justifyContent: 'center' }}>
                <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            component={Link}
            to={`/contacts/${id}`}
            sx={{
                  width: '90%',
                  margin: 'auto',
                  transition: 'background-color 0.3s, transform 0.3s',
                  boxShadow: " 5px 5px rgba(163, 23, 205, 0.1)",
                  '&:hover': {
                                backgroundColor: '#1976D2', 
                                transform: 'scale(1.05)', 
                              },
                }}
          >
            Open Chat
          </Button>
          
                </CardActions>
            </Card>
        </>
    );
}

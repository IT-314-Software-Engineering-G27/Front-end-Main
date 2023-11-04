import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StartupsData from '../database/startup';
import {
    Avatar,
    Box,
    CircularProgress,
    Container,
    Paper,
    Typography,
    Divider,
} from '@mui/material';

function StartupDetail() {
    const { startupId } = useParams();
    const [post, setPost] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        StartupsData.fetchPost(startupId)
            .then((StartupsData) => {
                setPost(StartupsData);
            })
            .catch((error) => {
                setError(error);
            });
    }, [startupId]);
    if (error) {
        return (
            <Container maxWidth="md">
                <Paper elevation={3} style={{ padding: '2rem' }}>
                    <Typography variant="h5" color="error">
                        Error: {error.message}
                    </Typography>
                </Paper>
            </Container>
        );
    }

    if (!post) {
        return (
            <Container maxWidth="md">
                <Paper elevation={3} style={{ padding: '2rem' }}>
                    <CircularProgress color="primary" />
                </Paper>
            </Container>
        );
    }

    return (
        <Container maxWidth="md">
            <Box
                style={{
      
                    position : "relative",
                    top  : "3rem",
                    padding: "3rem",
                    background: "rgba(92, 36, 179, 0.2)",
                    borderRadius: "10px",
                    boxShadow: " 7px 7px rgba(0, 0 , 0, 0.1)",
                  }}>
                <Paper  style={{ 
        padding: '2rem', backgroundColor: '#f5f5f5',
        border : "1px solid rgb(0 ,0, 0, 1 )",
        boxShadow: " 7px 7px rgba(163, 23, 205, 0.1)",
        
        }}>
                    <Box display="flex" alignItems="center">
                        <Avatar src={post.logo} sx={{ width: 70, height: 70 }} variant="rounded" />
                        <Box marginLeft="1rem">
                            <Typography variant="h6">
                                {post.first_name} {post.last_name}
                            </Typography>
                            <Typography variant="subtitle1">
                                {`${post.posted_on.toLocaleDateString()} ${post.hour}:${post.min} ${post.ap}`}
                            </Typography>
                        </Box>
                    </Box>
                    <Divider sx={{ margin: '1rem 0' }} />
                    <Typography variant="h6">{post.long_description}</Typography>
                    <img
                        src={post.img}
                        alt="Post"
                        style={{
                            display: 'block',
                            margin: '1rem auto',
                            maxWidth: '100%',
                            borderRadius: '8px',
                        }}
                    />
                    <img
                        src={post.img}
                        alt="Post"
                        style={{
                            display: 'block',
                            margin: '1rem auto',
                            maxWidth: '100%',
                            borderRadius: '8px',
                        }}
                    />
                    <img
                        src={post.img}
                        alt="Post"
                        style={{
                            display: 'block',
                            margin: '1rem auto',
                            maxWidth: '100%',
                            borderRadius: '8px',
                        }}
                    />
                </Paper>
            </Box>
        </Container>
    );
}

export default StartupDetail;

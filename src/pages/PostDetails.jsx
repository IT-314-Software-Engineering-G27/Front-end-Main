import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostsData from '../database/post';
import {
    Avatar,
  Box,
  Button,
  CircularProgress,
  Container,
  Paper,
  Typography,
} from '@mui/material';

function PostDetail() {
  const { PostId } = useParams(); // Get the PostId parameter from the URL
  const [Post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Use the PostId to fetch the specific Post from the database
    PostsData.fetchPost(PostId)
      .then((postsData) => {
        setPost(postsData);
      })
      .catch((error) => {
        setError(error);
      });
  }, [PostId]);

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

  if (!Post) {
    return (
      <Container maxWidth="md">
        <Paper elevation={3} style={{ padding: '2rem' }}>
          <CircularProgress color="primary" />
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl">
      <Paper elevation={3} style={{ padding: '2rem' }}>
        <Box display="flex" alignItems="center">
          <Avatar src={`${Post.post_logo}`} sx={{ width: 70, height: 70 }} variant="rounded" />
          <Box marginLeft="1rem">
            <Typography variant="h6">
              {Post.post_first_name} {Post.post_last_name}
            </Typography>
            <Typography variant="subtitle1">
              {`${Post.posted_on.toLocaleDateString()}` + " " + `${Post.post_hour}` + ":" + `${Post.post_min}` + " " + `${Post.post_ap}`}
            </Typography>
          </Box>
        </Box>
        <Typography variant="h6">
          <img
            src={`${Post.post_img}`}
            alt="Fake Image"
            style={{
                padding: '2rem',
              display: 'block', // Ensures block-level rendering
              margin: '0 auto', // Centers the image horizontally
              maxWidth: '100%', // Ensures the image doesn't exceed its container's width
              textAlign: 'center', // Centers the image vertically
            }} />
        </Typography>
        <Typography variant="h6">
          {Post.post_long_description}
        </Typography>
      </Paper>
    </Container>
  );
}

export default PostDetail;
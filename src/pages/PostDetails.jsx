import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostsData from '../database/post';
import {
  Avatar,
  Box,
  CircularProgress,
  Container,
  Paper,
  Typography,
  Divider,
} from '@mui/material';


function PostDetail() {
  const { postId } = useParams();
  const [Post, setPost] = useState(null);
  const [error, setError] = useState(null);
   

  useEffect(() => {
    PostsData.fetchPost(postId)
      .then((postsData) => {
        setPost(postsData);
      })
      .catch((error) => {
        setError(error);
      });
  }, [postId]);

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
    <Container maxWidth="md">
      <Box
        sx={{
          backgroundColor: '#f5f5f5',
          padding: '1rem', 
        }}
      >
        <Paper elevation={3} style={{
          padding: '2rem',
          backgroundColor: '#f5f5f5', 
          backgroundImage: 'radial-gradient(2px 2px at 50px 200px, #eee, rgba(0, 0, 0, 0)), radial-gradient(2px 2px at 40px 70px, #fff, rgba(0, 0, 0, 0)), radial-gradient(3px 4px at 120px 40px, #ddd, rgba(0, 0, 0, 0))', // Background image
          backgroundRepeat: 'repeat, repeat, repeat',
          backgroundSize: '200px 200px, 200px 200px, 200px 200px',
          height: '100%', 
        }}>
          <Box display="flex" alignItems="center">
            <Avatar src={Post.post_logo} sx={{ width: 70, height: 70 }} variant="rounded" />
            <Box marginLeft="1rem">
              <Typography variant="h6">
                {Post.post_first_name} {Post.post_last_name}
              </Typography>
              <Typography variant="subtitle1">
                {`${Post.posted_on.toLocaleDateString()} ${Post.post_hour}:${Post.post_min} ${Post.post_ap}`}
              </Typography>
            </Box>
          </Box>
          <Divider sx={{ margin: '1rem 0' }} />
          <Typography variant="h6">{Post.post_long_description}</Typography>
          <img
            src={Post.post_img}
            alt="Post Image"
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

export default PostDetail;

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
    IconButton,
    Divider,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';

function PostDetail() {
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const [error, setError] = useState(null);
    const [likeCount, setLikeCount] = useState(0);

    useEffect(() => {
        PostsData.fetchPost(postId)
            .then((postsData) => {
                setPost(postsData);
            })
            .catch((error) => {
                setError(error);
            });
    }, [postId]);


    const handleLikeClick = () => {

        setLikeCount(likeCount + 1);
    };

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
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <IconButton color="primary" onClick={handleLikeClick}>
                            <FavoriteIcon />
                            <Typography variant="body1" sx={{ ml: 1 }}>{likeCount}</Typography>
                        </IconButton>
                        <IconButton color="primary">
                            <CommentIcon />
                        </IconButton>
                    </Box>
                </Paper>
            </Box>
        </Container>
    );
}

export default PostDetail;

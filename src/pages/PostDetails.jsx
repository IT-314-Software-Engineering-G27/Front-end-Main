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

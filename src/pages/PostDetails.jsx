import React from 'react';
import { useParams } from 'react-router-dom';
import { Avatar, Box, CircularProgress, Container, Paper, Typography, Divider, Button, } from '@mui/material';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useAuth } from '../contexts/session';
import { API_URL } from '../config';

function PostDetail() {
    const { postId } = useParams();
    const auth = useAuth();
    const queryClient = useQueryClient();
    const { data: post } = useQuery({
        queryKey: ['post-detail', { id: postId }],
        queryFn: () => fetchPost({ id: postId }),
    });

    const { data: postStatus } = useQuery({
        queryKey: ['post-status', { id: postId }],
        queryFn: () => fetchPostStatus({ id: postId, token: auth.session.token }),
        enabled: !!auth.session.token,
    });

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

                    position: "relative",
                    top: "3rem",
                    padding: "3rem",
                    background: "rgba(92, 36, 179, 0.2)",
                    borderRadius: "10px",
                    boxShadow: " 7px 7px rgba(0, 0 , 0, 0.1)",
                }}>
                <Paper style={{
                    padding: '2rem', backgroundColor: '#f5f5f5',
                    border: "1px solid rgb(0 ,0, 0, 1 )",
                    boxShadow: " 7px 7px rgba(163, 23, 205, 0.1)",

                }}>
                    <Box display="flex" alignItems="center">
                        <Avatar src={post.user.profile_image} sx={{ width: 70, height: 70 }} variant="rounded" />
                        <Box marginLeft="1rem">
                            <Typography variant="h6">
                                {post.user.username} ({post.user.role})
                            </Typography>
                            <Typography variant="subtitle1">
                                {`${new Date(post.time).toLocaleString()}`}
                            </Typography>
                        </Box>
                    </Box>
                    <Divider sx={{ margin: '1rem 0' }} />
                    <Typography variant="h6">{post.description}</Typography>
                    <img
                        src={post.image}
                        alt="Post"
                        style={{
                            display: 'block',
                            margin: '1rem auto',
                            maxWidth: '100%',
                            borderRadius: '8px',
                        }}
                    />
                    <Divider sx={{ margin: '1rem 0' }} />
                    <Box>
                        {postStatus &&
                            <Button color={postStatus.isLiked ? "error" : "primary"} disabled={!postStatus} onClick={() => {
                                if (postStatus.isLiked) {
                                    deleteLike({ id: postId, token: auth.session.token }).then(() => {
                                        queryClient.invalidateQueries(['post-status', { id: postId }]);
                                    });
                                }
                                else {
                                    postLike({ id: postId, token: auth.session.token }).then(() => {
                                        queryClient.invalidateQueries(['post-status', { id: postId }]);
                                    });
                                }
                            }}>
                                {postStatus.isLiked ? 'Unlike' : 'Like'}
                            </Button>}
                        <Typography variant="subtitle1" style={{ marginLeft: '1rem' }}>
                            {postStatus && `${postStatus.likes} likes`}
                        </Typography>
                    </Box>
                </Paper>
            </Box>
        </Container>
    );
}

async function fetchPost({ id }) {
    const response = await fetch(`${API_URL}/posts/${id}`);
    const data = await response.json();
    return data.payload.post;
};

async function fetchPostStatus({ id, token }) {
    const response = await fetch(`${API_URL}/posts/${id}/status`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const data = await response.json();
    return data.payload.status;
};

async function postLike({ id, token }) {
    await fetch(`${API_URL}/posts/${id}/like`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        method: 'POST',
    });
};

async function deleteLike({ id, token }) {
    await fetch(`${API_URL}/posts/${id}/like`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        method: 'DELETE',
    });
};

export default PostDetail;

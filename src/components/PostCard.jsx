import { Divider, Avatar, Button, Card, CardActions, CardContent, CardHeader, Skeleton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../config";

export default function PostCard({ id }) {
    const { data: post, isLoading } = useQuery({
        queryKey: ["post-card", { id }],
        queryFn: () => fetchPost({ id }),
    });

    if (!post) return (<Skeleton height={400} />);
    
    return (<>
        <Card sx={{
            border: `1px solid black`,
            height: "100%",
            width: "100%",
            overflow: "clip",
            display: "flex",
            backgroundColor: 'white',
            borderRadius: "10px",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: " 7px 7px rgba(0, 0, 0, 0.15)",
            padding: "1rem",
        }}>
            <CardHeader
                avatar={<Avatar src={`${post.logo}`} sx={{ width: 55, height: 55 }} variant="rounded" />}
                titleTypographyProps={{ variant: "h7" }}
                title={`${post.user.username}`}
                subheader={`${new Date(post.time).toLocaleString()}`}
                sx={{ color: "black" }} />
            <Divider sx={{ margin: '0rem 0' }} />
            <CardContent>

                <Typography variant="h5" gutterBottom>
                    {post.title}
                </Typography>
                <Typography variant="h6" gutterBottom>
                    {post.subject}
                </Typography>
            </CardContent>

            <CardActions sx={{ marginTop: "auto", display: 'flex', justifyContent: 'center' }}>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    component={Link}
                    to={`/posts/${id}`}
                    sx={{
                        width: '50%',
                        margin: 'auto',
                        transition: 'background-color 0.3s, transform 0.3s',
                        boxShadow: " 5px 5px rgba(163, 23, 205, 0.1)",
                        '&:hover': {
                            backgroundColor: '#1976D2',
                            transform: 'scale(1.05)',
                        },
                    }}
                >
                    Read more
                </Button>
            </CardActions>
        </Card>
    </>);
}

async function fetchPost({ id }) {
    const response = await fetch(`${API_URL}/posts/${id}/basic`);
    const data = await response.json();
    return data.payload.post;
}
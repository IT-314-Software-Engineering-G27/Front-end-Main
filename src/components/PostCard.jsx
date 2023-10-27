import { useEffect, useState } from "react";
import PostData from "../database/post";

import { Divider, Avatar, Button, Card, CardActions, CardContent, CardHeader, Skeleton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const { fetchPost } = PostData;

export default function PostCard({ id, isLoadingData }) {
    const [post, setPost] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true);
        fetchPost(id).then((post) => {
            setPost(post);
            setIsLoading(false);
        });
    }, [id]);

    if (isLoading) return (<Skeleton height={4} />);
    return (<>
        <Card sx={{
          border: `1px solid ${isLoadingData ? "grey" : "black"}`,
          height: "100%",
          width: "100%",
          overflow: "clip",
          display: "flex",
          backgroundColor :  'white',
          borderRadius: "10px",
          flexDirection: "column",
          justifyContent: "space-between",
          boxShadow : " 7px 7px rgba(0, 0, 0, 0.15)",
          padding: "1rem",

          
        }}>
            <CardHeader
                avatar={
                    <Avatar src={`${post.logo}`} sx={{ width: 55, height: 55 }} variant="rounded" />}
                titleTypographyProps={{ variant: "h7" }}
                title={`${post.first_name} ${post.last_name}`}
                subheader={`${post.posted_on.toLocaleDateString()} ${post.hour} : ${post.min} ${post.ap}`}
                sx={{ color: isLoadingData ? "grey" : "black" }}
            /><Divider sx={{ margin: '0rem 0' }} />
            <CardContent>

                <Typography variant="h6" gutterBottom>
                    {post.description}
                </Typography>
                <Typography variant="h4" gutterBottom>
                    <image src={`${post.img}`}
                        alt="Fake Image"
                        style={{
                            display: 'block',
                            margin: '0 auto',
                            maxWidth: '100%',
                            textAlign: 'center',
                        }} />
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
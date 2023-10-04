import { useEffect, useState } from "react";
import PostData from "../database/post";

import { Divider,Avatar, Button, Card, CardActions, CardContent, CardHeader, Skeleton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const { fetchPost } = PostData;

export default function PostCard({ id, isLoadingData }) {
    const [Post, setPost] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true);
        fetchPost(id).then((Post) => {
            setPost(Post);
            setIsLoading(false);
        });
    }, [id]);

    if (isLoading) return (<Skeleton height={4} />);
    return (<>
        <Card sx={{ border: `1px solid ${isLoadingData ? "grey" : "black"}`, height: "100%", width: "100%", overflow: "clip", display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <CardHeader
                avatar={
                    <Avatar src={`${Post.post_logo}`} sx={{ width: 55, height: 55 }} variant="rounded" />}
                titleTypographyProps={{ variant: "h7" }}
                title={`${Post.post_first_name} ${Post.post_last_name}`}
                subheader={`${Post.posted_on.toLocaleDateString()} ${Post.post_hour} : ${Post.post_min} ${Post.post_ap}`}
                sx={{ color: isLoadingData ? "grey" : "black" }}
            /><Divider sx={{ margin: '0rem 0' }} />
            <CardContent>

                <Typography variant="h6" gutterBottom>
                    {Post.post_description}
                </Typography>
                <Typography variant="h4" gutterBottom>
                    <image src={`${Post.post_img}`}
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
  <Button variant="contained" color="primary" sx={{ width: '30%' }}>
    <Link to={`/posts/${id}`}> Read more</Link>
  </Button>
</CardActions>
        </Card>
    </>);
}
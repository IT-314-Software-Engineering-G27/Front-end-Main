import { useEffect, useState } from "react";
import PostData from "../database/post";

import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Divider, LinearProgress, Skeleton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { HorizontalRule } from "@mui/icons-material";
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
                title={`${Post.post_first_name}`+ " " + `${Post.post_last_name}`}
                subheader={`${Post.posted_on.toLocaleDateString()}` + " " + `${Post.post_hour}`+ ":" +`${Post.post_min}`+" "+  `${Post.post_ap}`}
                sx={{ color: isLoadingData ? "grey" : "black" }}
            />
            
            <CardContent>
                
                <Typography variant="h6" gutterBottom>
                    {Post.post_description}
                </Typography>
                <Typography variant="h4" gutterBottom>
                   <img src={`${Post.post_img}`}  alt="Fake Image"
            style={{
                display: 'block', // Ensures block-level rendering
                margin: '0 auto', // Centers the image horizontally
                maxWidth: '100%', // Ensures the image doesn't exceed its container's width
                textAlign: 'center', // Centers the image vertically
            }}/> 
                </Typography>
                
            </CardContent>
            <Divider />
            <CardActions sx={{ marginTop: "auto" }}>
                <Button variant="contained" color="primary" fullWidth>
                    <Link to={`/Post/${id}`}> Read more</Link>
                </Button>
            </CardActions>
        </Card>
    </>);   
}
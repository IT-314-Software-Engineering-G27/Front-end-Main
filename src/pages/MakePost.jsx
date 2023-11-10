import { Paper, TextField, Button, Container, Box, Typography } from "@mui/material";
import { useRef, useState } from "react";
import "./EventRegistration.css";
import { useAuth } from "../contexts/session";
import { API_URL } from "../config";
import { useNavigate } from "react-router-dom";

export default function EventRegistration() {
    const auth = useAuth();
    const navigate = useNavigate();
    const [post, setPost] = useState({
        title: "",
        subject: "",
        description: "",
    });

    const inputRef1 = useRef(null);
    const [image1, setImage1] = useState("");

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <h1>Make Post</h1>
            <Paper elevation={10}
                sx={{
                    margin: "30px",
                    marginTop: " 15px",
                    width: "80vw",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "30px",
                    gap: "15px"
                }}>
                <TextField
                    label="Post Title"
                    placeholder="Write the title here.."
                    sx={{ margin: "5px", width: "75%" }}
                    onChange={(event) => { setPost({ ...post, title: event.target.value }) }}
                    focused
                />
                <TextField
                    label="Post Subject"
                    multiline
                    rows={2}
                    placeholder="Write the subject here.."
                    sx={{ margin: "5px", width: "75%" }}
                    onChange={(event) => { setPost({ ...post, subject: event.target.value }) }}
                    focused
                />

                <TextField
                    label="Post Description"
                    multiline
                    rows={6}
                    placeholder="Write the description here.."
                    sx={{ margin: "5px", width: "75%" }}
                    onChange={(event) => { setPost({ ...post, description: event.target.value }) }}
                    focused
                />
                <h4>Click on the image to add a new image</h4>
                <div style={{
                    width: "75%",
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <Container spacing={11} sx={{
                        margin: "5px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <Box onClick={() => {
                            inputRef1.current.click();
                        }}>
                            {image1 ? (
                                <img src={URL.createObjectURL(image1)} style={{ height: "250px", width: "250px" }} alt="post" />
                            ) : (
                                <img src="https://cdn2.iconfinder.com/data/icons/design-development-7/512/022-add_image-512.png" style={{ height: "250px", width: "250px" }} alt="placeholder" />
                            )}
                            <input type="file" ref={inputRef1} onChange={(event) => {
                                const file = event.target.files[0];
                                setImage1(file);
                            }} style={{ display: "none" }} />
                        </Box>
                    </Container>
                </div>
                <Button variant="contained" sx={{ width: " 200px", border: "solid white 1px", borderRadius: "5px" }} disabled={post.title === "" || post.subject === "" || post.description === "" || !auth?.session?.user}
                    onClick={() => {
                        postPost({ post, file: image1, token: auth.session.token }).then((response) => {
                            if (response.error)
                                alert(response.error);
                            else
                                navigate(`/posts/${response._id}`);
                        })
                    }}>
                    Post
                </Button>
                <Typography variant="body1" sx={{ color: "red" }}>  {post.title === "" && "Please enter a title"}  </Typography>
                <Typography variant="body1" sx={{ color: "red" }}>  {post.subject === "" && "Please enter a subject"}</Typography>
                <Typography variant="body1" sx={{ color: "red" }}>  {post.description === "" && "Please enter a description"}</Typography>
                <Typography variant="body1" sx={{ color: "red" }}>   {!auth?.session?.user && "Please login to post"}</Typography>
            </Paper>
        </div >
    )
}

async function postPost({ post, file, token }) {
    console.log(token);
    const data_response = await fetch(`${API_URL}/posts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ post }),
    });
    const data = await data_response.json();
    if (!data_response.ok) {
        return {
            error: data.message,
        }
    };
    const post_id = data.payload.post._id;
    if (file) {
        const formData = new FormData();
        formData.append("file", file);
        const image_response = await fetch(`${API_URL}/files/posts/${post_id}`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
            },
            body: formData,
        });
        const image_data = await image_response.json();
        if (!image_response.ok) {
            return {
                error: image_data.message,
            }
        };
    }
    return {
        _id: post_id,
    }
}
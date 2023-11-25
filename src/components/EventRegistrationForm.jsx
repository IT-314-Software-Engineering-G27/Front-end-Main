import { Paper, TextField, Grid, Button } from "@mui/material";
import { useState } from "react";
import EventImage from "./EventImage";
import { useNavigate, useParams } from "react-router";
import { API_URL } from "../config";
import { useAuth } from "../contexts/session";

export default function EventRegistration() {
    const auth = useAuth();
    const [images, setImages] = useState([]);
    const { eventId } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const [registration, setRegistration] = useState({
        title: "",
        description: "",
    });
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <h1>Event Registration</h1>
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
                    required
                    id="outlined-required"
                    label="Startup Idea"
                    placeholder="Type the Idea here.."
                    sx={{ margin: "5px", width: "75%" }}
                    value={registration.title}
                    onChange={(e) => setRegistration({ ...registration, title: e.target.value })}
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Idea Description"
                    multiline
                    rows={6}
                    placeholder="Write the description here.."
                    sx={{ margin: "5px", width: "75%" }}
                    value={registration.description}
                    onChange={(e) => setRegistration({ ...registration, description: e.target.value })}
                />

                <h4>Click on the image to add a new image</h4>
                <Grid container spacing={3} sx={{
                    margin: "5px",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "3rem",
                }}>
                    <EventImage id={0} setImages={setImages} />
                    <EventImage id={1} setImages={setImages} />
                    <EventImage id={2} setImages={setImages} />
                </Grid>
                <Button variant="contained" sx={{ width: " 200px", border: "solid white 1px", borderRadius: "5px" }}
                    disabled={loading}
                    onClick={() => {
                        setLoading(true);
                        postRegistration({ token: auth?.session?.token, registration, eventId, images }).then((data) => {
                            if (data.error) {
                                alert(data.error.message);
                            } else {
                                navigate(`/startups/${data._id}`);
                            }
                            setLoading(false);
                        });
                    }}
                > {loading ? "Loading..." : "Submit"}
                </Button>
            </Paper>
        </div>
    )
}

async function postRegistration({ token, registration, eventId, images }) {
    const response = await fetch(`${API_URL}/events/${eventId}/registrations`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ registration })
    });
    const data = await response.json();
    if (!response.ok) {
        return { error: data };
    };

    const registration_id = data.payload.registration._id;
    await Promise.all(images.map(async (image) => {
        if (!image) return;
        const formData = new FormData();
        formData.append("file", image);
        const image_response = await fetch(`${API_URL}/files/registrations/${registration_id}`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: formData
        });
        const image_data = await image_response.json();
        if (!image_response.ok) {
            return { error: image_data };
        };
        return image_data;
    }));
    return { _id: registration_id };
}
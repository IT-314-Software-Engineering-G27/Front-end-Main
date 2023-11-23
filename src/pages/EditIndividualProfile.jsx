import { Paper, TextField, Button, Box, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import "./EventRegistration.css";
import { useAuth } from "../contexts/session";
import { API_URL } from "../config";
import { useNavigate } from "react-router-dom";

export default function EditIndividual() {
    const auth = useAuth();
    const inputRef1 = useRef(null);
    const [image1, setImage1] = useState("");
    const [individual, setIndividual] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        if (auth?.session?.token) {
            fetchIndividualProfile({ token: auth.session.token }).then((data) => {
                setIndividual(data);
            });
        }
    }, [auth?.session?.token]);

    const handleImageClick1 = () => {
        inputRef1.current.click();
    }

    const handleImageChange1 = (event) => {
        const file1 = event.target.files[0];
        setImage1(file1);
    }


    return (
        <Box>
            <Typography sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} variant="h1" >Edit Profile</Typography>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}>
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
                        disabled
                        id="outlined-disabled-1"
                        label="User Name"
                        sx={{ margin: "5px", width: "75%" }}
                        value={individual?.user?.username || ""}
                        onChange={(event) => setIndividual({ ...individual, user: { ...individual.user, username: event.target.value } })}
                    />
                    <TextField
                        disabled
                        id="outlined-disabled-2"
                        label="Email"
                        sx={{ margin: "5px", width: "75%" }}
                        value={individual?.user?.email || ""}
                        onChange={(event) => setIndividual({ ...individual, user: { ...individual.user, email: event.target.value } })}
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="First Name"
                        sx={{ margin: "5px", width: "75%" }}
                        value={individual?.first_name || ""}
                        onChange={(event) => setIndividual({ ...individual, first_name: event.target.value })}
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="Last Name"
                        sx={{ margin: "5px", width: "75%" }}
                        value={individual?.last_name || ""}
                        onChange={(event) => setIndividual({ ...individual, last_name: event.target.value })}
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="PhoneNo"
                        sx={{ margin: "5px", width: "75%" }}
                        value={individual?.user?.phone_number || ""}
                        onChange={(event) => setIndividual({ ...individual, user: { ...individual.user, phone_number: event.target.value } })}
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="College"
                        sx={{ margin: "5px", width: "75%" }}
                        value={individual?.college || ""}
                        onChange={(event) => setIndividual({ ...individual, college: event.target.value })}
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="Country"
                        sx={{ margin: "5px", width: "75%" }}
                        value={individual?.country || ""}
                        onChange={(event) => setIndividual({ ...individual, country: event.target.value })}
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="Age"
                        type="number"
                        InputProps={{ inputProps: { min: 18, max: 200 } }}
                        value={individual?.age || 20}
                        onChange={(event) => setIndividual({ ...individual, age: event.target.value })}
                        sx={{ margin: "5px", width: "75%" }}
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="Highest Qualification"
                        placeholder="Highest Qualification"
                        sx={{ margin: "5px", width: "75%" }}
                        value={individual?.degree || ""}
                        onChange={(event) => setIndividual({ ...individual, degree: event.target.value })}
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="Skills"
                        placeholder="Skills"
                        sx={{ margin: "5px", width: "75%" }}
                        value={individual?.skills?.join(", ") || ""}
                        onChange={(event) => setIndividual({ ...individual, skills: event.target.value.split(",").map((skill) => skill.trim()) })}
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="Bio"
                        multiline
                        rows={6}
                        placeholder="Write the Bio here.."
                        sx={{ margin: "5px", width: "75%" }}
                        value={individual?.bio || ""}
                        onChange={(event) => setIndividual({ ...individual, bio: event.target.value })}
                    />
                    <Typography variant="h4">Click on the image to upload new profile image</Typography>
                    <Box sx={{ margin: "5px", width: "30%", display: "flex", alignItems: "center", }}>
                        <Box sx={{ display: "flex", justifyContent: "center", }} onClick={handleImageClick1}>
                            {image1 ? (
                                <img src={URL.createObjectURL(image1)} style={{ height: "250px", width: "250px" }} alt="profile" />
                            ) : (
                                <img src="https://cdn2.iconfinder.com/data/icons/design-development-7/512/022-add_image-512.png" style={{ width: "100%" }} alt="placeholder" />
                            )}
                            <input type="file" ref={inputRef1} onChange={handleImageChange1} style={{ display: "none" }}></input>
                        </Box>
                    </Box>
                    <Button variant="contained" style={{ width: " 100px", border: "solid white 1px", borderRadius: "5px" }} disabled={!auth?.session?.token} onClick={() => {
                        editIndividual({ individual, file: image1, token: auth.session.token }).then((response) => {
                            if (response.error)
                                alert(response.error);
                            else
                                navigate(`/profile`);
                        })
                    }}>
                        Save
                    </Button>
                </Paper>
            </Box>
        </Box>
    )
}

async function fetchIndividualProfile({ token }) {
    const response = await fetch(`${API_URL}/individuals/profile`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const data = await response.json();
    if (!response.ok) {
        return {
            error: data.message,
        }
    };
    return data.payload.individual;
};

async function editIndividual({ token, individual, file }) {
    const data_response = await fetch(`${API_URL}/individuals`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ individual }),
    });
    const data = await data_response.json();
    if (!data_response.ok) {
        return {
            error: data.message,
        }
    };
    const individual_id = data.payload.individual._id;
    if (file) {
        const formData = new FormData();
        formData.append("file", file);
        const image_response = await fetch(`${API_URL}/files/profile/`, {
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
        _id: individual_id,
    }
}
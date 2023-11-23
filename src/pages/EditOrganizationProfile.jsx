import { Paper, TextField, Button, Box, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import "./EventRegistration.css";
import { useAuth } from "../contexts/session";
import { API_URL } from "../config";
import { useNavigate } from "react-router-dom";

export default function EditOrganization() {
    const inputRef1 = useRef(null);
    const [image1, setImage1] = useState('');
    const [organization, setOrganization] = useState({});
    const auth = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (auth?.session?.token) {
            fetchOrganizationProfile({ token: auth.session.token }).then((data) => {
                setOrganization(data);
            });
        }
    }, [auth?.session?.token]);

    const handleImageClick1 = () => {
        inputRef1.current.click();
    };

    const handleImageChange1 = (event) => {
        const file1 = event.target.files[0];
        setImage1(file1);
    };

    return (
        <Box>
            <Typography sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} variant="h1">
                Edit Profile
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Paper
                    elevation={10}
                    sx={{
                        margin: '30px',
                        marginTop: ' 15px',
                        width: '80vw',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '30px',
                        gap: '15px',
                    }}

                    
                >
                    <TextField
                        disabled
                        id="outlined-disabled-2"
                        label="Username"
                        value={organization?.user?.username || ''}
                        style={{ margin: "5px", width: "75%" }}
                    />
                    <TextField
                        disabled
                        id="outlined-disabled-2"
                        label="Email"
                        value={organization?.user?.email || ''}
                        style={{ margin: "5px", width: "75%" }}
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="Company's Legal Name"
                        value={organization?.company_name || ''}
                        onChange={(event) => setOrganization({ ...organization, company_name: event.target.value })}
                        style={{ margin: '5px', width: '75%' }}
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="Headquarter's Location"
                        value={organization?.headquarter_location || ''}
                        onChange={(event) => setOrganization({ ...organization, headquarter_location: event.target.value })}
                        style={{ margin: '5px', width: '75%' }}
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="CEO Name"
                        value={organization?.CEOname || ''}
                        onChange={(event) => setOrganization({ ...organization, CEOname: event.target.value })}
                        style={{ margin: '5px', width: '75%' }}
                    />

                    <TextField
                        id="outlined-multiline-static"
                        label="Phone No."
                        value={organization?.user?.phone_number || ''}
                        onChange={(event) => setOrganization({ ...organization, user: { ...organization.user, phone_number: event.target.value } })}
                        style={{ margin: '5px', width: '75%' }}
                    />

                    <TextField
                        disabled
                        id="outlined-multiline-static"
                        label="Year establishment"
                        value={organization?.year_of_establishment || ''}
                        onChange={(event) => setOrganization({ ...organization, year_of_establishment: event.target.value })}
                        style={{ margin: '5px', width: '75%' }}
                    />

                    <TextField
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        rows={6}
                        value={organization?.description || ''}
                        onChange={(event) => setOrganization({ ...organization, description: event.target.value })}
                        style={{ margin: '5px', width: '75%' }}
                    />
                    <Typography variant="h4">Click on the image to upload a new profile image</Typography>
                    <Box sx={{ margin: '5px', width: '30%', display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }} onClick={handleImageClick1}>
                            {image1 ? (
                                <img src={URL.createObjectURL(image1)} style={{ height: '250px', width: '250px' }} alt="profile" />
                            ) : (
                                <img
                                    src="https://cdn2.iconfinder.com/data/icons/design-development-7/512/022-add_image-512.png"
                                    style={{ width: '100%' }}
                                    alt="placeholder"
                                />
                            )}
                            <input type="file" ref={inputRef1} onChange={handleImageChange1} style={{ display: 'none' }}></input>
                        </Box>
                    </Box>
                    <Button
                        variant="contained"
                        style={{ width: '100px', border: 'solid white 1px', borderRadius: '5px' }}
                        disabled={!auth?.session?.token}
                        onClick={() => {
                            editOrganization({ organization, file: image1, token: auth.session.token }).then((response) => {
                                if (response.error)
                                    alert(response.error);
                                else
                                    navigate(`/profile`);
                            })
                        }}
                    >
                        Submit
                    </Button>
                </Paper>
            </Box>
        </Box>
    );
}



async function fetchOrganizationProfile({ token }) {
    const response = await fetch(`${API_URL}/organizations/profile`, {
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
    return data.payload.organization;
};


async function editOrganization({ token, organization, file }) {
    const data_response = await fetch(`${API_URL}/organizations`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ organization }),
    });
    const data = await data_response.json();
    if (!data_response.ok) {
        return {
            error: data.message,
        }
    };
    const organization_id = data.payload.organization._id;
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
        _id: organization_id,
    }
}

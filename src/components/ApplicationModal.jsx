import React, { useEffect, useState } from "react";
import { Button, FormControl, FormGroup, Modal, TextField } from "@mui/material";
import { useAuth } from "../contexts/session";
import { Link } from "react-router-dom";
import { API_URL } from "../config";
const buttonStyle = { width: '80%',margin: 'auto', alignItems: 'center', transition: 'background-color 0.3s, transform 0.3s', boxShadow: " 5px 5px rgba(163, 23, 205, 0.1)", '&:hover': { backgroundColor: '#1976D2', transform: 'scale(1.05)', },};

function ApplicationButton({ id }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [status, setStatus] = useState("none");
    const [jobApplication, setJobApplication] = useState(null);
    const auth = useAuth();
    useEffect(() => {
        fetchApplicationStatus({ id, token: auth.session.token }).then((jobApplication) => {
            setStatus(jobApplication.status);
            setJobApplication(jobApplication);
        });
    }, [auth.session.token, id]);

    if (status === "none")
        return <Button variant="contained"  sx={{ ...buttonStyle,  }}> Loading...  </Button>;

    if (status === "not-logged-in")
        return <Button variant="contained"  sx={{ ...buttonStyle,  }} LinkComponent={Link} to="/login"> Login to apply </Button>;


    if (status === "pending")
        return (<>
            <ApplicationModal open={open} handleClose={handleClose} id={id} application={jobApplication} edit />
            <Button variant="contained" sx={{ ...buttonStyle, }} onClick={handleOpen}> Edit Application </Button></>);

    if (status === "accepted")
        return <Button variant="contained" sx={{ ...buttonStyle, }}> Accepted </Button>;

    if (status === "rejected")
        return <Button variant="contained" sx={{ ...buttonStyle }}> Rejected </Button>;

    return <>
        <Button variant="contained" sx={{ ...buttonStyle,  }} onClick={handleOpen}> Apply Now  </Button>
        <ApplicationModal open={open} handleClose={handleClose} id={id} />
    </>;
}

function ApplicationModal({ open, handleClose, id, application, edit }) {
    const auth = useAuth();
    const [content, setContent] = useState(application?.cover_letter || "");
    return <Modal
        open={open}
        sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: "60vw",
            height: "fit-content",
            padding: "3px",
            backgroundColor: 'white',
            border: '2px solid #000',
            borderRadius: "5px",
        }}
    >
        <FormControl sx={{ width: "100%", backgroundColor: 'white', padding: "20px" }}>
            <TextField multiline label="cover letter" rows={12} variant="outlined" sx={{ width: "100%", mb: 2 }} focused onChange={(e) => setContent(e.target.value)} value={content} placeholder="write about your skills, qualifications and achivements"/>
            <FormGroup sx={{ display: "flex", justifyContent: "flex-end", flexDirection: "row", gap: "10px" }}>
                <Button variant="contained" sx={{ ...buttonStyle }} onClick={() => {
                    if (edit)
                        editApplication({ id: application._id, token: auth.session.token, cover_letter: content }).then(() => {
                            window.location.reload();
                        });
                    else
                        submitApplication({ id, token: auth.session.token, cover_letter: content }).then(() => {
                            window.location.reload();
                        })
                }}> Submit </Button>
                <Button variant="contained" sx={{ ...buttonStyle,}} onClick={handleClose}> Close </Button>
            </FormGroup>
        </FormControl>
    </Modal>;
}

async function fetchApplicationStatus({ id, token }) {
    if (!token) return {
        status: "not-logged-in",
    };
    const response = await fetch(`${API_URL}/job-profiles/${id}/status`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
    });
    const data = await response.json();
    if (!data.payload.jobApplication) return {
        status: "not-logged-in",
    };
    return data.payload.jobApplication;
}

async function submitApplication({ id, token, cover_letter }) {
    const response = await fetch(`${API_URL}/job-profiles/${id}/apply`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ cover_letter }),
    });
    const data = await response.json();
    return data.payload.jobApplication;
}

async function editApplication({ id, token, cover_letter }) {
    const response = await fetch(`${API_URL}/job-applications/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ cover_letter }),
    });
    const data = await response.json();
    console.log(data);
    return data.payload.jobApplication;
}

export default ApplicationButton;



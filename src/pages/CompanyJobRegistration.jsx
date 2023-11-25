import { Paper, TextField, Button, Select, MenuItem } from "@mui/material";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { API_URL } from "../config";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/session";
import { useNavigate } from "react-router-dom";

export default function CompanyJobRegistration() {
    const auth = useAuth();
    const [jobProfile, setJobProfile] = useState({
        title: "",
        description: "",
        posting_location: "",
        requirements: "",
        salary: 0,
        deadline: "none",
        compensations: "",
        duration: "full-time"
    });

    const navigate = useNavigate();

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <h1>Company's Job Registration</h1>
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
                    id="outlined-required"
                    label="Job profile Title"
                    placeholder="Enter the job profile"
                    sx={{ margin: "5px", width: "75%" }}
                    focused
                    onChange={(e) => setJobProfile({ ...jobProfile, title: e.target.value })}
                    value={jobProfile.title}
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Job description"
                    multiline
                    rows={6}
                    placeholder="Enter the job description"
                    sx={{ margin: "5px", width: "75%" }}
                    focused
                    onChange={(e) => setJobProfile({ ...jobProfile, description: e.target.value })}
                    value={jobProfile.description}
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Requirements"
                    multiline
                    rows={6}
                    placeholder="Enter the job requirements"
                    sx={{ margin: "5px", width: "75%" }}
                    focused
                    onChange={(e) => setJobProfile({ ...jobProfile, requirements: e.target.value })}
                    value={jobProfile.requirements}
                />

                <TextField
                    id="outlined-multiline-static"
                    label="Compensations"
                    multiline
                    rows={6}
                    placeholder="Enter the compensations provided by the company"
                    sx={{ margin: "5px", width: "75%" }}
                    focused
                    onChange={(e) => setJobProfile({ ...jobProfile, compensations: e.target.value })}
                    value={jobProfile.compensations}
                />
                <FormControl fullWidth sx={{ m: 1 }} style={{ width: "75%" }}>
                    <InputLabel htmlFor="outlined-adornment-amount" >Salary</InputLabel>
                    <OutlinedInput type='number'
                        id="outlined-adornment-amount"
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        label="Amount"
                        onChange={(e) => setJobProfile({ ...jobProfile, salary: e.target.value })}
                        value={jobProfile.salary}
                    />
                </FormControl>
                <FormControl fullWidth sx={{ m: 1 }} style={{ width: "75%" }}>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={jobProfile.duration}
                        label="Type"
                        onChange={(e) => setJobProfile({ ...jobProfile, duration: e.target.value })}
                    >
                        <MenuItem value={"full-time"}>Full-time</MenuItem>
                        <MenuItem value={"part-time"}>Part-time</MenuItem>
                        <MenuItem value={"internship"}>Internship</MenuItem>
                        <MenuItem value={"contract"}>Contract</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    id="outlined-required"
                    label="Location"
                    placeholder="Enter the location"
                    sx={{ margin: "5px", width: "75%" }}
                    focused
                    onChange={(e) => setJobProfile({ ...jobProfile, posting_location: e.target.value })}
                    value={jobProfile.posting_location}
                />
                <TextField
                    id="outlined-required"
                    label="Last date to apply"
                    placeholder="Enter the dead-line for accepting applications"
                    sx={{ margin: "5px", width: "75%" }}
                    focused
                    type="date"
                    onChange={(e) => {
                        setJobProfile({
                            ...jobProfile, deadline: e.target.value
                        })
                    }}
                    value={jobProfile.deadline}
                />
                <Button variant="contained" sx={{ width: " 200px", border: "solid white 1px", borderRadius: "5px" }} disabled={!auth?.session?.user?.organization} onClick={async () => {
                    const { _id, error } = await postJobProfile({ token: auth.session.token, jobProfile });
                    if (error) {
                        alert(error);
                        return;
                    }
                    else {
                        navigate(`/jobs/${_id}`);
                    }
                }}>
                    {auth?.session?.user?.organization ? "Register" : "You need to be an organization to register a job profile"}
                </Button>
            </Paper>
        </div>
    )
}

async function postJobProfile({ token, jobProfile }) {
    jobProfile.deadline = new Date(jobProfile.deadline);
    const response = await fetch(`${API_URL}/job-profiles`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ jobProfile })
    });
    const data = await response.json();
    if (!response.ok) {
        return {
            error: data.message
        }
    };
    const newJobProfile = data.payload.jobProfile;
    return {
        _id: newJobProfile._id,
    }
}
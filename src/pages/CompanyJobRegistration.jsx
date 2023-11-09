import { Paper, TextField, Grid, Button } from "@mui/material";
import { useRef, useState } from "react";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';

export default function CompanyJobRegistration() {


    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <h1>Company's Job Registration</h1>
            <Paper elevation={10}
                style={{
                    margin: "30px",
                    marginTop: " 15px",
                    width: "80vw",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",

                    // height:"78vh",
                    padding: "30px",
                    gap: "15px"
                }}>
                <TextField
                    id="outlined-required"
                    label="Job profile"
                    placeholder="Enter the job profile"
                    style={{ margin: "5px", width: "75%" }}
                />

                <TextField
                    id="outlined-multiline-static"
                    label="Job description"
                    multiline
                    rows={6}
                    
                    placeholder="Enter the job description"
                    style={{ margin: "5px", width: "75%" }}
                />

                <TextField
                    id="outlined-multiline-static"
                    label="Requirements"
                    multiline
                    rows={6}
                    placeholder="Enter the job requirements"
                    style={{ margin: "5px", width: "75%" }}
                />

                <TextField
                    id="outlined-multiline-static"
                    label="Compensations"
                    multiline
                    rows={6}
                    
                    placeholder="Enter the compensations provided by the company"
                    style={{ margin: "5px", width: "75%" }}
                />

                <FormControl fullWidth sx={{ m: 1 }} style={{ width: "75%" }}>
                    <InputLabel htmlFor="outlined-adornment-amount" >Salary</InputLabel>
                    <OutlinedInput type='number'
                        id="outlined-adornment-amount"
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        label="Amount" />
                </FormControl>
                
                <TextField
                    id="outlined-required"
                    label="Timings"
                    
                    placeholder="Enter the timings of your job"
                    style={{ margin: "5px", width: "75%" }}
                />

                <TextField
                    id="outlined-required"
                    label="Location"
                 
                    placeholder="Enter the location"
                    style={{ margin: "5px", width: "75%" }}
                />

                <TextField
                    id="outlined-required"
                    label="Last date to apply"
                   
                    placeholder="Enter the dead-line for accepting applications"
                    style={{ margin: "5px", width: "75%" }}
                />
                


                <Button variant="contained" style={{ width: " 200px", border: "solid white 1px", borderRadius: "5px" }}>Submit</Button>
            </Paper>
        </div>
    )
}
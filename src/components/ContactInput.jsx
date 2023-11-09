import { Box, Button, CircularProgress, TextField } from '@mui/material';
import React, { useState } from 'react';
import ClearIcon from "@mui/icons-material/Clear";
import { Send } from '@mui/icons-material';
import { useQueryClient } from '@tanstack/react-query';
import { API_URL } from "../config";

function ContactInput({ id, token }) {
    const [input, setInput] = useState("");
    const queryClient = useQueryClient();
    const [isLoading, setIsLoading] = useState(false);

    return (
        <Box
            p={2}
            borderRadius={2}
            sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                background: "#f0f4f8",
                width: "100%",
            }}
        >
            <Box
                p={2}
                borderRadius={2}
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "1rem",
                    background: "#fff",
                    padding: "0.5rem",
                    width: "100%",
                }}
            >
                <TextField
                    placeholder="Type here..."
                    variant="outlined"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    focused
                    fullWidth
                    InputProps={{
                        endAdornment: input && (
                            <ClearIcon
                                onClick={() => setInput("")}
                                style={{ cursor: "pointer" }}
                            />
                        ),
                        sx: {
                            "& .MuiOutlinedInput-notchedOutline": {
                                border: "none",
                            },
                            "& .MuiInputBase-input": {
                                background: "white",
                            },
                        },
                    }}
                    disabled={isLoading}
                />
                {isLoading ?
                    <CircularProgress
                        color="secondary"
                        sx={{ marginLeft: "auto" }}
                    />
                    : <Button
                        onClick={() => {
                            setIsLoading(true);
                            setInput("");
                            postMessage({ id, token, content: input }).then(() => {
                                queryClient.invalidateQueries(["messages", { id, token }]);
                                setIsLoading(false);
                            });
                        }}
                        sx={{ marginLeft: "auto" }}
                        disabled={!input.length}
                    ><Send />
                    </Button>}
            </Box>
        </Box >
    );
}

async function postMessage({ id, token, content }) {
    const response = await fetch(`${API_URL}/connections/${id}/messages`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ content }),
    });
    const data = await response.json();
    return data;
}

export default ContactInput;

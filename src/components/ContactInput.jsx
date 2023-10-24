import { Box, Button, CircularProgress, TextField } from '@mui/material';
import React, { useState } from 'react';
import ClearIcon from "@mui/icons-material/Clear";
import { Send } from '@mui/icons-material';
import { addMessages } from '../database/message';

function ContactInput(setMessages) {
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    return (
        <Box
            p={2}
            borderRadius={2}
            sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "1rem",
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
                            addMessages(setMessages);
                            setTimeout(() => setIsLoading(false), 7000);
                        }}
                        sx={{ marginLeft: "auto" }}
                        disabled={!input.length}
                    ><Send />
                    </Button>}
            </Box>
        </Box >
    );
}

export default ContactInput;

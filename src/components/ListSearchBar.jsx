import { Box, CircularProgress, TextField, ToggleButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";

export default function ListSearchBar({ isFetching, setQuery, query,deep,setDeep }) {
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
                background: "rgba(92, 36, 179, 0.2)",
                boxShadow: " 15px 15px rgba(0, 0, 0, 0.1) ",
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
                    placeholder="Search here..."
                    variant="outlined"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    focused
                    fullWidth
                    InputProps={{
                        endAdornment: query && (
                            <ClearIcon
                                onClick={() => setQuery("")}
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
                />
                {isFetching && (
                    <CircularProgress
                        color="secondary"
                        sx={{ marginLeft: "auto" }}
                    />
                )}
                <ToggleButton
                    value="check"
                    selected={deep}
                    onChange={() => {
                        setDeep(!deep);
                    }}
                >
                    Deep
                </ToggleButton>
            </Box>
        </Box >
    );
}
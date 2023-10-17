import { Box, CircularProgress, TextField } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

export default function ListSearchBar({ isFetching, setQuery, query }) {
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
                width: "80rem",
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
            </Box>

        </Box >
    );
}
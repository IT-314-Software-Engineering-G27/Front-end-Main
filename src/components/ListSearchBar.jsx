import React, { useState } from "react";
import {
  Box,
  InputAdornment,
  IconButton,
  TextField,
  FormControlLabel,
  Switch,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import CircularProgress from "@mui/material/CircularProgress";

export default function EnhancedSearchBar({
  isFetching,
  setQuery,
  query,
  deep,
  setDeep,
}) {
  const handleClear = () => {
    setQuery("");
  };

  return (
    
      <Box
        p={2}
        borderRadius={2}
        sx={{
          border : "0.5px solid gray",
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
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                {query && (
                  <IconButton size="small" onClick={handleClear}>
                    <ClearIcon />
                  </IconButton>
                )}
              </InputAdornment>
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
          <CircularProgress color="secondary" sx={{ marginLeft: "auto" }} />
        )}
        <FormControlLabel
          control={<Switch value={deep} onChange={(e) => setDeep(e.target.checked)} />}
          label="Deep"
        />
      </Box>
  );
}

import { Button, Typography } from "@mui/material";


export default function FetchMoreButton({ isFetchingNextPage, hasNextPage, fetchNextPage }) {
    return (
        <Button
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
            variant="contained"
            color="primary"
            fullWidth={true}
            sx={{
                marginTop: "1rem",
                background: "#007bff",
                color: "#fff",
                padding: "5px 15px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
                "&:hover": {
                    backgroundColor: "#0056b3",
                },
                display: "flex",
                justifyContent: "center",
            }}
        >
            {isFetchingNextPage ? (
                <Typography variant="h5" color="info.main">  Loading more...</Typography>
            ) : hasNextPage ? (
                <Typography variant="h6">Load More</Typography>
            ) : (
                <Typography variant="h6">Nothing more to load</Typography>
            )}
        </Button>
    )
}
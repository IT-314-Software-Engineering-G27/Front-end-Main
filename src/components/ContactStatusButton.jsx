import { Box, Button } from "@mui/material";
import { useAuth } from "../contexts/session";
import { useQueryClient } from "@tanstack/react-query";
import { API_URL } from "../config";

export default function ContactStatusButton({ connection }) {
    const auth = useAuth();
    const queryClient = useQueryClient();
    if (!auth?.session?.token) return <></>;

    if (!connection.editable) {
        if (connection.status === "pending")
            return <Button variant="outlined" sx={{ width: "100%", marginTop: "0.5rem" }} disabled>Pending</Button>;
    }
    else {
        if (connection.status === "pending")
            return <Box sx={{
                display: "flex",
                flexDirection: {
                    xs: "column",
                    lg: "row",
                },
                justifyContent: "space-evenly", width: "100%"
            }}>
                <Button variant="contained" sx={{ marginTop: "0.5rem" }} onClick={() => {
                    acceptConnection({ token: auth.session.token, id: connection._id }).then(() => {
                        queryClient.invalidateQueries(["contact", { token: auth.session.token, id: connection._id }]);
                    });
                }}>Accept</Button>
                <Button variant="contained" sx={{ marginTop: "0.5rem" }} onClick={() => {
                    rejectConnection({ token: auth.session.token, id: connection._id }).then(() => {
                        queryClient.invalidateQueries(["contact", { token: auth.session.token, id: connection._id }]);
                    });
                }}>Reject</Button>
            </Box>;
        else if (connection.status === "accepted")
            return <Button variant="outlined" sx={{ width: "100%", marginTop: "0.5rem" }} onClick={() => {
                rejectConnection({ token: auth.session.token, id: connection._id }).then(() => {
                    queryClient.invalidateQueries(["contact", { token: auth.session.token, id: connection._id }]);
                });
            }}>Remove</Button>;
        else
            return <></>;
    }
};


async function acceptConnection({ id, token }) {
    const response = await fetch(`${API_URL}/connections/${id}/accept`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const data = await response.json();
    return data.payload.connection;
}

async function rejectConnection({ id, token }) {
    const response = await fetch(`${API_URL}/connections/${id}/reject`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const data = await response.json();
    return data.payload.connection;
}
import { Button } from "@mui/material";
import { API_URL } from '../config';
import { useAuth } from '../contexts/session';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function ConnectionButton({ id }) {
    const auth = useAuth();

    const [connection, setConnection] = useState({
        _id: null,
        status: null
    });

    useEffect(() => {
        if (!auth.session.token) {
            return;
        }
        fetchConnectionStatus({ id, token: auth.session.token }).then((connection) => {
            setConnection(connection);
        });
    }, [auth, id]);

    if (!connection?.status) {
        return <></>;
    }

    if (connection.status === "pending" || connection.status === "rejected") {
        return <Button variant="contained" color="primary" disabled> Request {connection.status}</Button>;
    }

    return <Button variant="contained" color="primary" LinkComponent={Link} to={`/contacts/${connection._id}`}>
        View Connection
    </Button>;

};

async function fetchConnectionStatus({ id, token }) {
    const response = await fetch(`${API_URL}/connections/${id}/status`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    const data = await response.json();
    return data.payload.connection;
}



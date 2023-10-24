import React, { useEffect, useState } from 'react';
import { fetchMessage } from '../database/message';
import { Box, Typography } from '@mui/material';

function MessageCard({ id, isLoadingData }) {
    const [message, setMessage] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetchMessage(id).then((message) => {
            setMessage(message);
            setIsLoading(false);
        });
    }, [id]);


    return (
        <Box sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: `${message.type === "incoming" ? "flex-start" : "flex-end"}`,
        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                maxWidth: "80%",
                gap: "5px",
                textAlign: "left",
                border: "2px solid black",
                padding: "5px", borderRadius: "5px",
                backgroundColor: `${message.type === "incoming" ? "white" : "lightblue"}`,
            }}>
                <Typography variant="h6" sx={{ wordWrap: "break-word" }}>
                    {isLoadingData || isLoading ? "Loading..." : message.content}
                </Typography>
                <Typography variant="h6" sx={{ color: "black", minWidth: "10vw", textAlign: "end" }}>
                    {isLoadingData || isLoading ? "Loading..." : message.type === "incoming" ?
                        message.timestamp.toLocaleTimeString() : (
                            message.read ? message.read.toLocaleTimeString() : "..."
                        )}
                </Typography>
            </Box>
        </Box >
    );
}

export default MessageCard;

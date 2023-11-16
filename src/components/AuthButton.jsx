import React from "react";
import { useAuth } from "../contexts/session";
import {  Box, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useNavigate } from "react-router";
import { LogoutRounded as LogoutRoundedIcon } from "@mui/icons-material";

export default function AuthButton() {
    const auth = useAuth();
    const navigate = useNavigate();
    return (
        <ListItem key="auth" disablePadding>
            <ListItemButton component={Box} onClick={() => {
                auth.logout();
                navigate("/login");
            }}>
                <ListItemIcon>
                    <LogoutRoundedIcon />
                </ListItemIcon>
                <ListItemText primary={auth?.session?.token ? "Log out" : "Log in"} />
            </ListItemButton>
        </ListItem>
    );
}


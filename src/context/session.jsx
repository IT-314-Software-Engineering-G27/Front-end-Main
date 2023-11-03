"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

const SessionContext = createContext({
    session: {},
    setSession: (session) => { },
});

export default function SessionProvider({ children }) {
    const [session, setSession] = useState({});
    useEffect(() => {
        const stored_session = JSON.parse(localStorage.getItem("session"));
        if (stored_session?.token) {
            setSession(stored_session);
        }
        else {
            setSession({});
        }
    }, []);
    useEffect(() => {
        if (session.token)
            localStorage.setItem("session", JSON.stringify(session));
    }, [session]);

    return (
        <SessionContext.Provider value={{ session, setSession }}>
            {children}
        </SessionContext.Provider>
    );
};

export function useAuth() {
    const { session, setSession } = useContext(SessionContext);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    const login = async ({ email, password }) => {
        const { session, message } = {} //
        setIsLoading(false);
        if (session) {
            navigate("/profile", { replace: true });
            setError("");
            setSession(session);
        }
        else {
            setError(message);
            setSession({});
        }
        return {
            session,
            message,
        };
    }

    const logout = async () => {
        setSession({});
        localStorage.removeItem("session");
        navigate("/", { replace: true });
    };


    return {
        session,
        login,
        logout,
        isLoading,
        error,
    };
};
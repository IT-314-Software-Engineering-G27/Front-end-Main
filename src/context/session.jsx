import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { API_URL } from "../constants";

const SessionContext = createContext({
    session: { token: null },
    setSession: (session) => { },
});

export default function SessionProvider({ children }) {
    const [session, setSession] = useState({ token: null });
    useEffect(() => {
        const stored_session = JSON.parse(localStorage.getItem("session"));
        if (stored_session?.token)
            setSession(stored_session);
        else
            setSession({});
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
        const response = await fetch(`${API_URL}/auth`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ auth: { email} }),
        });
        const data = await response.json();
        const token = data.payload?.token;
        const message = data.message;
        setIsLoading(false);
        if (token) {
            navigate("/profile", { replace: true });
            setError("");
            setSession({ token });
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
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { API_URL } from "../config";

const SessionContext = createContext({
    session: { token: null, user: null },
    setSession: (session) => { },
});

export default function SessionProvider({ children }) {
    const [session, setSession] = useState({ token: null, user: null });
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
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const login = async ({ email, password }) => {
        setIsLoading(true);
        const { token, user, message } = await postAuth(email, password);
        if (user) {
            setError("");
            setSession({ token, user });
        }
        else {
            setError(message);
            setSession({});
        }
        setIsLoading(false);
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

async function postAuth(email, password) {
    const auth_response = await fetch(`${API_URL}/auth`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ auth: { email, password } }),
    });
    const auth_data = await auth_response.json();
    const token = auth_data?.payload?.token;
    if (!token) { return { message: auth_data?.message }; };

    const profile_response = await fetch(`${API_URL}/auth`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });

    const profile_data = await profile_response.json();
    const user = profile_data?.payload?.user;

    if (!user) { return { message: profile_data?.message }; };

    return { token, user };
}

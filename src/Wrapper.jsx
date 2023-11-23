

import ThemeContextProvider from './contexts/theme';
import { CssBaseline } from "@mui/material";
import QueryContextProvider from "./contexts/query";
import SessionProvider from "./contexts/session";
import { BrowserRouter } from 'react-router-dom';

export default function AppWrapper({ children }) {
    return (<QueryContextProvider>
        <ThemeContextProvider>
            <SessionProvider>
                <CssBaseline />
                <BrowserRouter>
                    {children}
                </BrowserRouter>
            </SessionProvider>
        </ThemeContextProvider>
    </QueryContextProvider>
    );
}
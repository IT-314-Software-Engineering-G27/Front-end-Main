"use client";

import { useMediaQuery } from '@mui/material';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
const theme = createTheme({
    palette: {
        primary: {
            main: '#471899',
            light: '#cfa3f2',
            dark: '#531a98',
        },
        secondary: {
            main: '#985db1',
            light: '#c3c0d3aa',
            dark: '#453d51aa',
        },
        info: {
            main: '#7162f2aa',
            dark: '#2c2b36aa',
        },
        background: {
            default: '#ffffff',
            paper: '#ffffff',
        },
    },
    typography: {
        h1: {
            fontFamily: 'Titillium Web, sans-serif',
            fontWeight: 700,
            fontSize: '7rem',
        },
        h2: {
            fontFamily: 'Titillium Web, sans-serif',
            fontWeight: 600,
            fontSize: '5rem',
        },
        h3: {
            fontFamily: 'Titillium Web, sans-serif',
            fontWeight: 500,
            fontSize: '4rem',
        },
        h4: {
            fontFamily: 'Titillium Web, sans-serif',
            fontWeight: 400,
            fontSize: '3rem',
        },
        h5: {
            fontFamily: 'Anton, sans-serif',
            fontWeight: 500,
            fontSize: '2rem',
        },
        h6: {
            fontFamily: 'Anton, sans-serif',
            fontWeight: 300,
            fontSize: '1.5rem',
        },
        body1: {
            fontFamily: 'Maven Pro, sans-serif',
            fontWeight: 300,
            fontSize: '1rem',
        },
        body2: {
            fontFamily: 'Maven Pro, sans-serif',
            fontWeight: 500,
            fontSize: '0.8rem',
        },
        button: {
            fontFamily: 'Anton, sans-serif',
            fontWeight: 500,
            fontSize: '1rem',
        },
        caption: {
            fontFamily: 'Maven Pro, sans-serif',
            fontWeight: 400,
            fontSize: '0.8rem',
        },
    }
});


export default function ThemeContextProvider({ children }) {
    theme.palette.mode = useMediaQuery('(prefers-color-scheme: dark)') ? 'dark' : 'light';
    return (
        <ThemeProvider theme={responsiveFontSizes(theme, { factor: 2 })}>
            {children}
        </ThemeProvider>
    );
};

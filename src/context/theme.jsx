"use client";

import { useMediaQuery } from '@mui/material';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import { useEffect, useState } from 'react';
const theme = createTheme({
    palette: {
        primary: {
            main: '#9458faaa',
            dark: '#531a98aa',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#8f84adaa',
            dark: '#453d51aa',
        },
        info: {
            main: '#7162f2aa',
            dark: '#2c2b36aa',
        },
        background: {
            default: '#f6f0f9aa',
            paper: '#303140aa',
        },
        text: {
            primary: '#ffffff',
            secondary: '#a3a3a3',
            disabled: '#a3a3a3',
        }
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
            fontSize: '1rem',
        },
        body1: {
            fontFamily: 'Maven Pro, sans-serif',
            fontWeight: 300,
            fontSize: '0.8rem',
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

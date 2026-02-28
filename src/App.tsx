import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles.scss";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from "./views/home/home";

function App() {
    const theme = createTheme({
        palette: {
            mode: 'dark',
            background: { default: '#07070a', paper: '#0f0f15' },
            primary: { main: '#7c3aed' },
            text: { primary: '#ededf2', secondary: '#8b8ba8' },
        },
        typography: {
            fontFamily: "'Inter', -apple-system, sans-serif",
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Router basename="/henryromero">
                <div className="app">
                    <Home />
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;

import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import "./styles.scss";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Card from "./components/card/card";
import Home from "./views/home/home";

function App() {
    const theme = createTheme({ 
        cssVariables: true,
    });

    return (
        <ThemeProvider theme={theme}>
            <Router basename={'/henryromero'}>
                <div className="app d-flex flex-column w-100 py-lg-5">
                    <Home />
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/css/styles.css';
import { ThemeProvider } from '@mui/material';
import { theme } from './config';


ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
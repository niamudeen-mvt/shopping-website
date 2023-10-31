import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./assets/css/styles.css"
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      // dark blue
      main: '#4b9ad5',
    },
    secondary: {
      // black
      main: '#000000',
    },
    default: {
      // white
      main: 'white'
    },
    inherit: {
      // light-blue
      main: '#4175bd'
    }
  },
});




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);


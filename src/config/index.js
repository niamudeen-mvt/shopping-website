import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: ["Jost", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#4175BD",
      light: "#4B9AD5",
      dark: "#3A5CAC",
    },
    secondary: {
      // black
      main: "#000000",
    },
    default: {
      // white
      main: "white",
    },
    inherit: {
      main: "white",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        // root: {
        //   width: '175px',
        //   height: '35px',
        //   backgroundColor: 'white',
        //   color: 'black',
        //   padding: '25px 25px',
        //   fontSize: '18px',
        //   fontWeight: '400',
        //   textTransform: 'capitalize'
        // }
      },
    },
  },
});

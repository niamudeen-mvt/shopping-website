import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: ["Jost", "sans-serif"].join(","),
    h1: {
      fontSize: "48px",
      fontWeight: "700",
      lineHeight: "59px",
      fontStyle: "normal",
      textTransform: "uppercase",
    },
    h2: {
      fontSize: "38px",
      fontWeight: "600",
      lineHeight: "60.5px",
      fontStyle: "normal",
      textTransform: "capitalize",
    },
    h3: {
      fontSize: "36px",
      fontWeight: "700",
      lineHeight: "59px",
      fontStyle: "normal",
      textTransform: "capitalize",
    },
    h4: {
      fontSize: "30px",
      fontWeight: "700",
      lineHeight: "59px",
      fontStyle: "normal",
      textTransform: "capitalize",
    },
    h5: {
      fontSize: "26px",
      fontWeight: "400",
      lineHeight: "44px",
      fontStyle: "normal",
      textTransform: "capitalize",
    },
    h6: {
      fontSize: "24px",
      fontWeight: "400",
      lineHeight: "44px",
      fontStyle: "normal",
      textTransform: "capitalize",
    },
    subtitle1: {
      fontSize: "22px",
      fontWeight: "400",
      lineHeight: "34px",
      fontStyle: "normal",
    },
    body2: {
      fontSize: "18px",
      fontWeight: "400",
      lineHeight: "normal",
      fontStyle: "normal",
    },
    body1: {
      fontSize: "16px",
      fontWeight: "400",
      fontStyle: "normal",
      lineHeight: "normal",
    },
    caption: {
      fontSize: "14px",
      fontWeight: "400",
      fontStyle: "normal",
      lineHeight: "normal",
    },
  },
  palette: {
    primary: {
      main: "#4175BD",
      light: "#4B9AD5",
      dark: "#3A5CAC",
    },
    secondary: {
      main: "#D9D9D9",
      light: "#D9D9D9",
    },
    warning: {
      main: "#FF9000",
    },
    error: {
      main: "#E31D1C",
    },
    info: {
      main: "#000000",
    },
    success: {
      main: "#FFFFFF",
    },
    common: {
      black: "#000000",
      white: "#FFFFFF",
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
  // custom: {
  //   mango: "purple",
  //   para: {
  //     fontSize: "100px",
  //     fontWeight: "bold",
  //   },
  // },
});

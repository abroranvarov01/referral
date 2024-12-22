import { createTheme } from "@mui/material";
const theme = createTheme({
  components: {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "#fff",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#222222",
    },
    secondary: {
      main: "#EAB308",
    },
    background: {
      default: "#252525",
    },
  },
  typography: {
    fontFamily: "'Nunito Sans', sans-serif",
    h1: {
      fontSize: "24px",
      fontWeight: 600,
    },
    h2: {
      color: "#fff",
      lineHeight: "29px",
      fontSize: "20px",
      fontWeight: 500,
    },
    h4: {
      fontSize: "1.25rem",
      fontWeight: 700,
    },
    h5: {
      fontSize: "1rem",
      fontWeight: 700,
    },
    body1: {
      color: "#fff",
      fontSize: "16px",
      fontWeight: 500,
    },
    body2: {
      fontSize: "14px",
      fontWeight: 500,
    },
  },
});

export default theme;

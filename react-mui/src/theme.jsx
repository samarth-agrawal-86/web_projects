import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00bcd4",
      light: "#80deea",
      contrastText: "#fff",
    },
    secondary: {
      main: "#ff9800",
      contrastText: "#fff",
    },
    other: {
      main: "#999",
      contrastText: "#fff",
    },
  },
});

export default theme;

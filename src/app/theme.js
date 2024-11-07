import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif", // Default font
    h1: {
      fontFamily: "Cal Sans, sans-serif", // Specific font for headers
      fontWeight: 600,
    },
    body1: {
      fontFamily: "Roboto, sans-serif", // Default for body text
      fontWeight: 400,
    },
    button: {
      fontFamily: "Cal Sans, sans-serif", // Specific font for buttons
      fontWeight: 600,
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none", // Removes underline from all links
          "&:hover": {
            textDecoration: "none", // Ensures no underline on hover
          },
        },
      },
    },
  },
});

export default theme;

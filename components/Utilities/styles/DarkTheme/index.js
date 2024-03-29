import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const DarkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#2C3639",
            light: "#2C3639"
        },
        secondary: {
            main: "#FF6046"
        },
        error: {
            main: red.A400
        },
        background: {
            default: "#070919"
        },
        text: {
            primary: "#f1f5f9",
            secondary: "#94a3b8"
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 768,
            md: 900,
            lg: 1200,
            xl: 1536
        }
    },
    typography: {
        fontFamily: [
            "Lato",
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"'
        ].join(","),
    }
});

export default DarkTheme;

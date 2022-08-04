import { createTheme } from "@mui/material/styles";


// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'dark'
  },
  typography: {
    fontFamily: [
      'Radiance',
      'Reaver',
      'Arial',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: {
      fontFamily: 'ReaverBold',
    },
    h2: {
      fontFamily: 'Reaver'
    },
    h3: {
      fontFamily: 'RadianceBold'
    },
    h4: {
      fontFamily: 'Radiance'
    },
    h5: {
      fontFamily: 'Radiance'
    },
    h6: {
      fontFamily: 'RadianceSemiBold',
      fontSize: 24
    }
  },
});

export default theme;

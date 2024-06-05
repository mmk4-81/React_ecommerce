import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#fae9ea',
    },
    secondary: {
      main: '#8d494a',
    },
    tertiary: {
      main: '#a36666',
    },
    quaternary: {
      main: '#ba8383',
    },
    quinary: {
      main: '#d1a1a0',
    },
  },
  typography: {
    fontFamily: 'Vazir, Arial',
    fontSize: 14,
  },
});

export default theme;

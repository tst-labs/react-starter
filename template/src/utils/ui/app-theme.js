import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#3dcd8e',
      main: '#014260',
      dark: '#001c36',
      contrastText: '#fff',
    },
    secondary: {
      light: '#5095d1',
      main: '#0067a0',
      dark: '#003d71',
      contrastText: '#fff',
    },
  },
});

export default theme;

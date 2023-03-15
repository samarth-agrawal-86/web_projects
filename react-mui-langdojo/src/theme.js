import { createTheme } from '@mui/material';
import { createBreakpoints } from '@mui/system';

const breakpoints = createBreakpoints({});

const theme = createTheme({
  palette: {
    primary: {
      main: '#BE6DB7',
    },
    secondary: {
      main: '#FDD36A',
    },
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    // mobile first, Got these details from Figma
    h1: {
      fontWeight: 700,
      fontSize: '36px',
      lineHeight: '55px',
      textTransform: 'capitalize',
      // here breakpoints for all higher res screens we define new font details.
      [breakpoints.up('md')]: {
        fontSize: '64px',
        lineHeight: '78px',
      },
    },
    h2: {
      //color: '#ffffff',
      fontSize: '24px',
      lineHeight: '29px',
      textTransform: 'capitalize',
      // here breakpoints for all higher res screens we define new font details.
      [breakpoints.up('md')]: {
        fontSize: '36px',
        lineHeight: '44px',
      },
    },
    h3: {
      color: '#ffffff',
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '20px',
      textTransform: 'uppercase',
      // here breakpoints for all higher res screens we define new font details.
      [breakpoints.up('md')]: {
        fontSize: '24px',
        lineHeight: '29px',
      },
    },
    body2: {
      color: '#000000',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '17px',
      // here breakpoints for all higher res screens we define new font details.
      [breakpoints.up('md')]: {
        fontSize: '20px',
        lineHeight: '24px',
      },
    },
  },
});

export default theme;

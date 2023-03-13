import { createTheme } from '@mui/material';
import { createBreakpoints } from '@mui/system';

const breakpoints = createBreakpoints({});

const theme = createTheme({
  palette: {
    primary: {
      main: '#686868',
    },
    slateBlue: {
      main: '#777FEB',
    },
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    h2: {
      fontWeight: 500,
      fontSize: '32px',
      lineHeight: '39px',
      color: '#000000',
      [breakpoints.up('md')]: {
        fontWeight: 700,
        fontSize: '64px',
        lineHeight: '78px',
      },
    },
    h3: {
      fontWeight: 500,
      fontSize: '24px',
      lineHeight: '29px',
      color: '#000000',
      [breakpoints.up('md')]: {
        fontSize: '48px',
        lineHeight: '59px',
      },
    },

    h4: {
      fontWeight: 700,
      fontSize: '24px',
      lineHeight: '29px',
      color: '#000000',
    },
    body1: {
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '17px',
      color: '#686868',
      [breakpoints.up('md')]: {
        fontWeight: 500,
        fontSize: '24px',
        lineHeight: '30px',
      },
    },
    body2: {
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '17px',
      color: '#000000',
      [breakpoints.up('md')]: {
        fontWeight: 500,
        fontSize: '24px',
        lineHeight: '30px',
      },
    },
  },
});

export default theme;

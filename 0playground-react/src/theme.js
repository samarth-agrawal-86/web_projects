// Create a new file theme.js

import { createTheme } from '@mui/material';
import { createBreakpoints } from '@mui/system';

const breakpoints = createBreakpoints({});

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#9B70FF', //RGB 155 112 255 //673de6
    },
    secondary: {
      main: '#00EBC0',
    },
    contrastText: '#ffffff',
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    h1: {
      fontSize: '48px',
      lineHeight: '56px',
      fontWeight: 700,
      color: '#000000',
      [breakpoints.up('md')]: {
        fontSize: '56px',
        lineHeight: '64px',
      },
    },
    h2: {
      fontSize: '36px',
      lineHeight: '44px',
      fontWeight: 700,
      color: '#000000',
      [breakpoints.up('md')]: {
        fontSize: '40px',
        lineHeight: '48px',
      },
    },
    h3: {
      fontSize: '28px',
      lineHeight: '36px',
      fontWeight: 700,
      color: '#000000',
      [breakpoints.up('md')]: {
        fontSize: '32px',
        lineHeight: '40px',
      },
    },
    h4: {
      fontSize: '24px',
      lineHeight: '32px',
      fontWeight: 700,
      color: '#000000',
      [breakpoints.up('md')]: {
        fontSize: '28px',
        lineHeight: '36px',
      },
    },
    h5: {
      fontSize: '20px',
      lineHeight: '28px',
      fontWeight: 700,
      color: '#000000',
      [breakpoints.up('md')]: {
        fontSize: '24px',
        lineHeight: '32px',
      },
    },
    h6: {
      fontSize: '18px',
      lineHeight: '24px',
      fontWeight: 700,
      color: '#000000',
      [breakpoints.up('md')]: {
        fontSize: '20px',
        lineHeight: '28px',
      },
    },
    body1: {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 400,
      color: '#333333',
      [breakpoints.up('md')]: {
        fontSize: '18px',
        lineHeight: '28px',
      },
    },
    body2: {
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: 400,
      color: '#333333',
      [breakpoints.up('md')]: {
        fontSize: '16px',
        lineHeight: '24px',
      },
    },
    subtitle1: {
      fontSize: '20px',
      lineHeight: '28px',
      fontWeight: 700,
      color: '#000000',
      [breakpoints.up('md')]: {
        fontSize: '24px',
        lineHeight: '32px',
      },
    },
  },
});

export default theme;

/*
h2: {
      fontWeight: 700,
      fontSize: '32px',
      lineHeight: '40px',
      color: '#000000',
      // here breakpoints for all higher res screens we define new font details.
      [breakpoints.up('md')]: {
        fontWeight: 700,
        fontSize: '64px',
        lineHeight: '78px',
      },
    },
    */

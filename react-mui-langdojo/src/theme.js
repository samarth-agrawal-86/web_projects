import { createTheme } from '@mui/material';
import { createBreakpoints } from '@mui/system';

const breakpoints = createBreakpoints({});
const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });

const theme = createTheme({
  palette: {
    primary: {
      main: '#673F86',
    },
    secondary: {
      main: '#FDD36A',
    },
    buttonPrimaryLight: createColor('#9980B7'),
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    // mobile first, Got these details from Figma
    h1: {
      fontWeight: 700,
      fontSize: '48px',
      lineHeight: '58px',
      textTransform: 'capitalize',
      // here breakpoints for all higher res screens we define new font details.
      [breakpoints.down('sm')]: {
        fontSize: '24px',
        lineHeight: '29px',
      },
    },
    h2: {
      color: '#ffffff',
      fontWeight: 700,
      fontSize: '48px',
      lineHeight: '58px',
      //textTransform: 'capitalize',
      // here breakpoints for all higher res screens we define new font details.
      [breakpoints.down('sm')]: {
        fontSize: '24px',
        lineHeight: '29px',
      },
    },
    // h3: {
    //   color: '#ffffff',
    //   fontWeight: 500,
    //   fontSize: '16px',
    //   lineHeight: '20px',
    //   textTransform: 'uppercase',
    //   // here breakpoints for all higher res screens we define new font details.
    //   [breakpoints.up('md')]: {
    //     fontSize: '24px',
    //     lineHeight: '29px',
    //   },
    // },
    body1: {
      color: '#ffffff',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '17px',
      // here breakpoints for all higher res screens we define new font details.
      [breakpoints.up('md')]: {
        fontSize: '20px',
        lineHeight: '24px',
      },
    },
    // body2: {
    //   color: '#000000',
    //   fontWeight: 400,
    //   fontSize: '14px',
    //   lineHeight: '17px',
    //   // here breakpoints for all higher res screens we define new font details.
    //   [breakpoints.up('md')]: {
    //     fontSize: '20px',
    //     lineHeight: '24px',
    //   },
    // },
  },
});

export default theme;

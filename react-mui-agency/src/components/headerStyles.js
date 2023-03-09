const headerStyles = {
  appBar: (theme) => ({
    background: '#fff',
    boxShadow: 'none',
    padding: '0',
    [theme.breakpoints.up('md')]: {
      borderBottom: '1px solid #777FEB',
      padding: '16px 0',
      margin: 'auto',
      maxWidth: '1240px',
    },
  }),
  container: (theme) => ({
    [theme.breakpoints.up('md')]: {
      padding: '0',
      margin: 'auto',
    },
  }),
  logoDesk: {
    mr: 2,
    display: { xs: 'none', lg: 'flex' },
    flexGrow: 1,
  },
  logoMob: {
    mr: 2,
    display: { sx: 'flex', lg: 'none' },
    flexGrow: 1,
  },
  menuIcon: { flexGrow: 1, display: { xs: 'flex', md: 'none' } },
  headerBox: {
    flexGrow: 1,
    display: { md: 'flex' },
    justifyContent: 'flex-end',
  },
  btnLinks: {
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: '500',
    fontSize: '18px',
    lineHeight: '22px',
    textTransform: 'capitalize',
    display: 'flex',
    padding: '4px',
    color: '#000000',
    margin: '20px',
  },
  topBar: {
    flexGrow: 1,
    display: { xs: 'none', md: 'flex' },
    justifyContent: 'flex-end',
  },
};

export default headerStyles;

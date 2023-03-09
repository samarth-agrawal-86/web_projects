import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Container,
  Button,
  Drawer,
} from '@mui/material';
import { Menu, Close } from '@mui/icons-material';

import logo_desk from '../../src/assets/img/logo_desk.svg';
import logo_mob from '../../src/assets/img/logo_mob.svg';
import headerStyles from './headerStyles';

const pages = ['Demos', 'Services', 'Pages', 'Portofio', 'Blog', 'Contact'];

function LeftDrawer({ openDrawer, handleOpenDrawer }) {
  return (
    <Drawer
      anchor="left"
      open={openDrawer}
      onClose={handleOpenDrawer}
      //PaperProps={{ sx: { width: '100%' } }}
    >
      <Box>
        <IconButton onClick={handleOpenDrawer}>
          <Close />
        </IconButton>
      </Box>
      <Box sx={{ width: 250 }}>
        {pages.map((page) => (
          <Button key={page} style={headerStyles.btnLinks}>
            {page}
          </Button>
        ))}
      </Box>
    </Drawer>
  );
}

function TopBar() {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  return (
    <AppBar position="static" sx={headerStyles.appBar}>
      <Container maxWidth="xl" sx={headerStyles.container}>
        <Toolbar disableGutters>
          <LeftDrawer
            open={openDrawer}
            handleOpenDrawer={() => setOpenDrawer(false)}
          />

          <Box sx={headerStyles.menuIcon}>
            <IconButton size="large" onClick={() => setOpenDrawer(true)}>
              <Menu />
            </IconButton>
          </Box>
          <Box sx={headerStyles.logoMob}>
            <img src={logo_mob} alt="logo" />
          </Box>
          <Box sx={headerStyles.logoDesk}>
            <img src={logo_desk} alt="logo" />
          </Box>
          <Box sx={headerStyles.topBar}>
            {pages.map((page) => (
              <Button key={page} style={headerStyles.btnLinks}>
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default TopBar;

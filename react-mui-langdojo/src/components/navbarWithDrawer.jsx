import React from 'react';

import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import { Menu } from '@mui/icons-material';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];
const navButtons = (
  <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
    {navItems.map((item) => (
      <Button key={item} color="inherit" sx={{ margin: '5px 20px' }}>
        {item}
      </Button>
    ))}
    <Button color="secondary" variant="contained">
      Login
    </Button>
  </Box>
);

const drawerButtons = (
  <List>
    {navItems.map((item) => (
      <ListItem key={item} disablePadding>
        <ListItemButton>
          <ListItemText primary={item} sx={{ textAlign: 'center' }} />
        </ListItemButton>
      </ListItem>
    ))}
  </List>
);

function NavbarWithDrawer() {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  function toggleDrawer() {
    setOpenDrawer(!openDrawer);
  }
  return (
    <Box border="2px solid black">
      <AppBar position="static" sx={{ margin: '0px' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={toggleDrawer}
            sx={{ display: { xs: 'block', sm: 'none' } }}
          >
            <Menu />
          </IconButton>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            React Start
          </Typography>
          {navButtons}
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          anchor="left"
          open={openDrawer}
          onClose={toggleDrawer}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          <Typography variant="h6" margin="12px 0px" textAlign="center">
            React Drawer
          </Typography>
          <Divider />
          {drawerButtons}
        </Drawer>
      </Box>
    </Box>
  );
}

export default NavbarWithDrawer;

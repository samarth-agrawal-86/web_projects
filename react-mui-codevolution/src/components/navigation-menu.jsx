import React from 'react';
import {
  AppBar,
  Toolbar,
  Stack,
  Menu,
  MenuItem,
  Button,
  IconButton,
  Typography,
  Divider,
  Avatar,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  CatchingPokemon,
  PersonAdd,
  Logout,
  Settings,
  Person,
} from '@mui/icons-material';
import { useState } from 'react';

function MuiMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }
  function handcleClose() {
    setAnchorEl(null);
  }
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton color="inherit">
          <CatchingPokemon />{' '}
        </IconButton>
        <Typography variant="h6" color="inherit" sx={{ flexGrow: 1 }}>
          POKEMONAPP
        </Typography>
        <Stack direction="row">
          <Button color="inherit">Features</Button>
          <Button color="inherit">Resources</Button>
          <IconButton color="inherit" size="small" onClick={handleClick}>
            <Avatar sx={{ width: 32, height: 32 }}>SA</Avatar>
          </IconButton>
        </Stack>
        <Menu
          id="profile-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handcleClose}
        >
          <MenuItem onClick={handcleClose}>
            <ListItemIcon>
              <Person fontSize="small" />
            </ListItemIcon>
            <ListItemText>Profile</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handcleClose}>
            <ListItemIcon>
              <PersonAdd fontSize="small" />
            </ListItemIcon>
            <ListItemText>Add another account</ListItemText>
          </MenuItem>
          <MenuItem onClick={handcleClose}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            <ListItemText>Settings</ListItemText>
          </MenuItem>
          <MenuItem onClick={handcleClose}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            <ListItemText>Logout</ListItemText>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default MuiMenu;

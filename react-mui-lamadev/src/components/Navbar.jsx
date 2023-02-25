import React from 'react';
import {
  Box,
  AppBar,
  Toolbar,
  Badge,
  Typography,
  Stack,
  IconButton,
  styled,
  Avatar,
  InputBase,
  Menu,
  MenuItem,
} from '@mui/material';
import { Mail, Notifications, PetsOutlined } from '@mui/icons-material';
import { useState } from 'react';

const Search = styled('div')(({ theme }) => ({
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.common.white,
}));

function Navbar() {
  const [open, setOpen] = useState(false);
  function handleOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }
  return (
    <Box justifyContent="space-between" p={2}>
      <AppBar>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              display: {
                xs: 'none',
                sm: 'block',
              },
            }}
          >
            SOCIAL MEDIA
          </Typography>
          <PetsOutlined
            size="large"
            sx={{
              display: {
                xs: 'block',
                sm: 'none',
              },
            }}
          />
          <Search>
            <InputBase placeholder="Search..." />
          </Search>
          <Stack direction="row">
            <IconButton size="large" color="inherit">
              <Badge badgeContent={4} color="error">
                <Mail />
              </Badge>
            </IconButton>
            <IconButton size="large" color="inherit">
              <Badge badgeContent={17} color="error">
                <Notifications />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              color="inherit"
              edge="end"
              onClick={handleOpen}
            >
              <Avatar
                sx={{ height: 30, width: 30 }}
                src="https://randomuser.me/api/portraits/women/10.jpg"
              />
            </IconButton>
          </Stack>
        </Toolbar>
        <Menu
          id="basic-menu"
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </AppBar>
    </Box>
  );
}

export default Navbar;

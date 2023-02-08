import React from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemAvatar,
  Avatar,
  ListItemButton,
} from '@mui/material';
import { Person, Mail } from '@mui/icons-material';

function MuiList() {
  return (
    <Box sx={{ width: '500px', bgcolor: '#efefef' }}>
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar>S</Avatar>
          </ListItemAvatar>
          <ListItemText primary="John Doe"></ListItemText>
        </ListItem>

        <ListItem divider={true}>
          <ListItemIcon>
            <Person />
          </ListItemIcon>
          <ListItemText
            primary="Profile"
            secondary="Manage your profile"
          ></ListItemText>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Mail />
            </ListItemIcon>
            <ListItemText
              primary="Email"
              secondary="Email to all"
            ></ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}

export default MuiList;

import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import { MoveToInbox, Drafts, Send, StarBorder } from '@mui/icons-material';
function MuiDrawer() {
  return (
    <div>
      <Drawer anchor="left" open={true}>
        <List>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <MoveToInbox />
              </ListItemIcon>
              <ListItemText>Inbox</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <Drafts />
              </ListItemIcon>
              <ListItemText>Drafts</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <Send />
              </ListItemIcon>
              <ListItemText>Sent mail</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText>Starred</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default MuiDrawer;

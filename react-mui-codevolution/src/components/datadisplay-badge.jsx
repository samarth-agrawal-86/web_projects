import React from 'react';
import { Badge, IconButton, Stack } from '@mui/material';
import { Mail, ShoppingCart } from '@mui/icons-material';
function MuiBadge() {
  return (
    <Stack spacing={3}>
      <Stack p={4} direction={'row'} spacing={4}>
        <Badge badgeContent={4}>
          <Mail />
        </Badge>
        <Badge badgeContent={4} color={'primary'}>
          <Mail color="action" />
        </Badge>
        <IconButton>
          <Badge badgeContent="2" color="secondary">
            <ShoppingCart color="action" />
          </Badge>
        </IconButton>
      </Stack>
      <Stack
        sx={{ display: 'flex', alignItems: 'center' }}
        p={4}
        direction={'row'}
        spacing={4}
      >
        <Badge badgeContent={4}>
          <Mail />
        </Badge>
        <Badge badgeContent={4} color={'primary'}>
          <Mail color="action" />
        </Badge>
        <IconButton>
          <Badge badgeContent="2" color="secondary">
            <ShoppingCart color="action" />
          </Badge>
        </IconButton>
      </Stack>
    </Stack>
  );
}

export default MuiBadge;

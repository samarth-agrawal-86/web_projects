import React from 'react';
import { Stack, Avatar, AvatarGroup } from '@mui/material';

function MuiAvatar() {
  return (
    <Stack p={4} direction={'column'} spacing={4}>
      <Stack direction={'row'} spacing={4}>
        <Avatar>BW</Avatar>
        <Avatar sx={{ bgcolor: 'primary.light' }}>S</Avatar>
        <Avatar sx={{ bgcolor: 'success.light' }}>RS</Avatar>
        <Avatar src="https://randomuser.me/api/portraits/women/10.jpg"></Avatar>
      </Stack>
      <Stack direction={'row'} spacing={4}>
        <AvatarGroup max={2}>
          <Avatar src="https://randomuser.me/api/portraits/women/15.jpg"></Avatar>
          <Avatar src="https://randomuser.me/api/portraits/women/23.jpg"></Avatar>
          <Avatar src="https://randomuser.me/api/portraits/men/98.jpg"></Avatar>
          <Avatar sx={{ bgcolor: 'success.light' }}>LS</Avatar>
        </AvatarGroup>
      </Stack>
    </Stack>
  );
}

export default MuiAvatar;

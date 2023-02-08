import { Stack, Chip, Avatar } from '@mui/material';
import React from 'react';

function MuiChips() {
  return (
    <Stack direction={'row'} spacing={3}>
      <Chip label="Chip Filled"></Chip>
      <Chip label="Chip Outlined" variant="outlined"></Chip>
      <Chip avatar={<Avatar>S</Avatar>} label="Chip Avatar"></Chip>
      <Chip
        avatar={<Avatar>S</Avatar>}
        label="Chip Avatar Color"
        color="secondary"
      ></Chip>
    </Stack>
  );
}

export default MuiChips;

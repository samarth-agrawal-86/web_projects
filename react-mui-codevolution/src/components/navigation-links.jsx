import React from 'react';
import { Stack, Link } from '@mui/material';

function MuiLinks() {
  return (
    <Stack direction={'row'} spacing={4} m={4}>
      <Link>Default</Link>
      <Link href="#" color="secondary">
        Secondary
      </Link>
    </Stack>
  );
}

export default MuiLinks;

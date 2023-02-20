import React from 'react';
import { Box, Stack } from '@mui/material';
import { spacing } from '@mui/system';

function MuiResponsiveness() {
  return (
    <Stack direction={'column'} spacing={2}>
      <Box
        margin={2}
        sx={{
          height: '200px',
          width: '200px',
          bgcolor: 'primary.main',
        }}
      ></Box>
      <Box
        margin={2}
        sx={{
          height: '200px',
          width: {
            xs: '200px',
            sm: '400px',
            md: '600px',
            lg: '800px',
            xl: '1000px',
          },
          bgcolor: 'primary.light',
        }}
      ></Box>
    </Stack>
  );
}

export default MuiResponsiveness;

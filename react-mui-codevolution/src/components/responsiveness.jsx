import React from 'react';
import { Box, Stack } from '@mui/material';
import { styled } from '@mui/system';

const StyledBox = styled(Box)(({ theme }) => ({
  height: '250px',
  width: '250px',
  backgroundColor: theme.status.danger,
}));

function MuiResponsiveness() {
  return (
    <Stack direction={'column'} spacing={2}>
      <Box
        margin={2}
        sx={{
          height: '200px',
          width: '200px',
          bgcolor: 'neutral.darker',
        }}
      ></Box>
      <StyledBox margin={2}></StyledBox>
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
          bgcolor: 'secondary.main',
        }}
      ></Box>
    </Stack>
  );
}

export default MuiResponsiveness;

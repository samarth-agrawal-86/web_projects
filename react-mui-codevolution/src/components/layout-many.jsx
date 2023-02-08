import React from 'react';
import { Stack, Box, Grid } from '@mui/material';

function MuiLayouts() {
  return (
    <Stack
      spacing={2}
      direction="column"
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: 200,
          height: 200,
          bgcolor: 'primary.main',
          padding: '2px',
          textAlign: 'center',
        }}
      >
        Box Component1
      </Box>

      <Box
        sx={{
          width: 200,
          height: 200,
          bgcolor: 'secondary.main',
          padding: '2px',
        }}
      >
        Box Component2
      </Box>
      <Grid container my={4} spacing={2}>
        <Grid item xs>
          <Box p={1} m={1} bgcolor="info.light">
            Item 1
          </Box>
        </Grid>
        <Grid item xs>
          <Box p={1} m={1} bgcolor="info.light">
            Item 2
          </Box>
        </Grid>
        <Grid item xs>
          <Box p={1} m={1} bgcolor="info.light">
            Item 3
          </Box>
        </Grid>
        <Grid item xs>
          <Box p={1} m={1} bgcolor="info.light">
            Item 4
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default MuiLayouts;

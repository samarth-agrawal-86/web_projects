import React from 'react';
import { LinearProgress, CircularProgress, Stack } from '@mui/material';

function MuiProgress() {
  return (
    <Stack sx={{ p: 4 }} spacing={4}>
      <LinearProgress />
      <LinearProgress variant="determinate" value={50} />
      <CircularProgress />
      <CircularProgress variant="determinate" value={50} />
    </Stack>
  );
}

export default MuiProgress;

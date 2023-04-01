import React from 'react';

import { Stack, Paper, Typography } from '@mui/material';

function HeroCard({ icon, title, desc }) {
  return (
    <Paper
      sx={{
        width: '128px',
        height: '128px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Stack direction="column" alignItems="center" justifyContent="center">
        {icon}
        <Typography variant="h5" color={'primary'}>
          {title}
        </Typography>
        <Typography variant="caption" color={'primary'}>
          {desc}
        </Typography>
      </Stack>
    </Paper>
  );
}

export default HeroCard;

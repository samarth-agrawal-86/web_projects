import React from 'react';
import { Stack, Alert, AlertTitle } from '@mui/material';

function MuiAlert() {
  return (
    <Stack direction={'column'} spacing={2} p={2}>
      <Alert severity="error">This is an error alert</Alert>
      <Alert variant="outlined" severity="info">
        This is an info alert
      </Alert>
      <Alert variant="filled" severity="warning">
        This is an warning alert
      </Alert>
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        This is a success alert
      </Alert>
    </Stack>
  );
}

export default MuiAlert;

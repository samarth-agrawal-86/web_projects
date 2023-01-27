import React from 'react';
import { TextField, Stack } from '@mui/material';

function MuiTextField() {
  return (
    <Stack direction={'column'} spacing={4}>
      <Stack direction={'row'} spacing={2}>
        <TextField label="Standard" variant="standard" />
        <TextField label="Filled" variant="filled" />
        <TextField label="Outlined" variant="outlined" />
      </Stack>
      <Stack display={'block'}>
        <TextField
          label="small secondary"
          variant="outlined"
          size="small"
          color="secondary"
        />
      </Stack>
      <Stack display={'block'} direction="row" spacing={2}>
        <TextField
          label="User Name"
          variant="outlined"
          color="primary"
          required
          helperText="Please enter your name"
        />
        <TextField
          label="Password"
          variant="outlined"
          color="primary"
          required
          type={'password'}
        />
      </Stack>
      <Stack display={'block'} direction="row" spacing={2}>
        <TextField
          label="Amount"
          variant="outlined"
          InputProps={{
            startAdornment: '$',
          }}
        />
        <TextField
          label="Weight"
          variant="outlined"
          InputProps={{
            endAdornment: 'Kg',
          }}
        />
      </Stack>
    </Stack>
  );
}

export default MuiTextField;

import React from 'react';
// import { useState, useEffect } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import { Stack } from '@mui/material';
import { Save } from '@mui/icons-material';

function MuiLoadingButton() {
  return (
    <Stack spacing={2} direction="row" p={2}>
      <LoadingButton variant={'outlined'}>Submit</LoadingButton>
      <LoadingButton variant={'outlined'} loading={true}>
        Submit
      </LoadingButton>
      <LoadingButton
        variant={'outlined'}
        loading={true}
        loadingIndicator={'Loading...'}
      >
        Submit
      </LoadingButton>
      <LoadingButton
        variant="contained"
        loadingPosition="start"
        startIcon={<Save />}
      >
        Save
      </LoadingButton>
      <LoadingButton
        variant="contained"
        loading={true}
        loadingPosition="start"
        startIcon={<Save />}
      >
        Save
      </LoadingButton>
      <LoadingButton
        variant="outlined"
        loading={true}
        loadingPosition="start"
        startIcon={<Save />}
      >
        Save
      </LoadingButton>
    </Stack>
  );
}

export default MuiLoadingButton;

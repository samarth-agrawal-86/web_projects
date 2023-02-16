import React from 'react';
import { Button, Snackbar } from '@mui/material';
import { useState } from 'react';
function MuiSnackbar() {
  const [open, setOpen] = useState(false);
  function handleOpenSnackbar(event) {
    setOpen(true);
  }
  function handleCloseSnackbar(event) {
    setOpen(false);
  }
  return (
    <>
      <Button variant="text" onClick={handleOpenSnackbar}>
        Open Snackbar
      </Button>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={open}
        autoHideDuration={1000}
        message="Action completed"
        onClose={handleCloseSnackbar}
      ></Snackbar>
    </>
  );
}

export default MuiSnackbar;

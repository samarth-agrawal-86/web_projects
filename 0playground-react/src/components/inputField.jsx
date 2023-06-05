import React from 'react';
import { Box, Container, TextField } from '@mui/material';
function InputField() {
  return (
    <Box paddingTop={4}>
      <Container maxWidth="md">
        <TextField
          label="Filled"
          variant="filled"
          InputProps={{ disableUnderline: true }}
        />
      </Container>
    </Box>
  );
}

export default InputField;

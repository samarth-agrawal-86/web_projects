import React from 'react';
import { Box, Container, Stack, TextField } from '@mui/material';
function InputField() {
  return (
    <Box paddingTop={4}>
      <Container maxWidth="md">
        <Stack spacing={2} direction={'column'}>
          <TextField
            label="Filled"
            variant="filled"
            InputProps={{ disableUnderline: true }}
          />
          <TextField label="Filled" variant="outlined" />
          <TextField
            label="Filled"
            variant="outlined"
            sx={{
              '& .MuiInputLabel-root': {
                fontSize: '14px', // Customize the label font size
              },
              '& .MuiOutlinedInput-input': {
                fontSize: '14px', // Customize the input value font size
              },
            }}
          />
        </Stack>
      </Container>
    </Box>
  );
}

export default InputField;

import React from 'react';
import { Box, Typography } from '@mui/material';
function ExpCard({ title, imgSrc }) {
  return (
    <Box display="flex" flexDirection="column">
      <Box
        component="img"
        src={imgSrc}
        display="flex"
        height="auto"
        width="100%"
        maxWidth="300px"
      />

      <Typography variant="body2" textAlign="center">
        {title}
      </Typography>
    </Box>
  );
}

export default ExpCard;

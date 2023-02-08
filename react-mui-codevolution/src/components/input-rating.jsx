import React from 'react';
import { Box, Rating, Typography } from '@mui/material';
import { useState } from 'react';
function MuiRating() {
  const [rating, setRating] = useState(null);
  function handleRating(event, newValue) {
    setRating(newValue);
  }
  console.log({ rating });
  return (
    <Box>
      <Typography component="legend">Select Rating</Typography>
      <Rating value={rating} onChange={handleRating} />
    </Box>
  );
}

export default MuiRating;

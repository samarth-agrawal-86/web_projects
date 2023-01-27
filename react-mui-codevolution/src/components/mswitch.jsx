import React from 'react';
import { Box, FormControlLabel, Switch } from '@mui/material';
import { useState } from 'react';
function MuiSwitch() {
  const [darkMode, setDarkMode] = useState(false);
  function handleDarkMode(event) {
    setDarkMode(event.target.checked);
  }
  console.log(darkMode);
  return (
    <Box>
      <FormControlLabel
        control={<Switch checked={darkMode} onChange={handleDarkMode} />}
        label="Dark Mode"
      />
    </Box>
  );
}

export default MuiSwitch;

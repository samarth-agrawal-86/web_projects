import React from 'react';
import { Box, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Home, FavoriteBorder, Person } from '@mui/icons-material';
import { useState } from 'react';
function MuiBottonNavigation() {
  const [value, setValue] = useState(0);
  function handleChange(event, newvalue) {
    setValue(newvalue);
  }
  return (
    <Box sx={{ width: '100%', position: 'absolute', bottom: 0 }}>
      <BottomNavigation value={value} onChange={handleChange} showLabels={true}>
        <BottomNavigationAction label="Home" icon={<Home />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteBorder />} />
        <BottomNavigationAction label="Profile" icon={<Person />} />
      </BottomNavigation>
    </Box>
  );
}

export default MuiBottonNavigation;

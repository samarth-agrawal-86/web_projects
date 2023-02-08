import React from 'react';
import { MenuItem, Box, Select, InputLabel, FormControl } from '@mui/material';
import { useState } from 'react';
function MuiSelect() {
  const [countries, setCountries] = useState([]);
  //console.log({ countries });
  function handleCountryChange(event) {
    let value = event.target.value;

    setCountries(typeof value === 'string' ? value.split(',') : value);
  }
  return (
    <Box width="250px">
      <FormControl fullWidth>
        <InputLabel>Select Country</InputLabel>
        <Select
          label="Country"
          multiple
          onChange={handleCountryChange}
          value={countries}
        >
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="US">USA</MenuItem>
          <MenuItem value="AU">Australia</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default MuiSelect;

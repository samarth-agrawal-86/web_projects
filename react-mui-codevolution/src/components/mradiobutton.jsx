import React from 'react';

import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  Box,
} from '@mui/material';

import { useState } from 'react';

function MuiRadioButton() {
  const [value, setValue] = useState('0-1');
  //console.log({ value });
  function handleChange(event) {
    setValue(event.target.value);
  }
  return (
    <Box>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group">Years of Experience</FormLabel>
        <RadioGroup
          row
          name="demo-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="0-1" control={<Radio />} label="0-1" />
          <FormControlLabel value="1-2" control={<Radio />} label="1-2" />
          <FormControlLabel value="2-3" control={<Radio />} label="2-3" />
        </RadioGroup>
      </FormControl>
      <Box></Box>
    </Box>
  );
}

export default MuiRadioButton;

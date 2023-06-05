import React from 'react';
import { Box, SvgIcon } from '@mui/material';
import { ReactComponent as HoliIcon } from '../assets/icons/holi.svg';

function SVGIcon() {
  return (
    <Box marginTop="100px">
      <SvgIcon
        color="warning"
        sx={{ fontSize: 100 }}
        component={HoliIcon}
        inheritViewBox
      />
    </Box>
  );
}

export default SVGIcon;

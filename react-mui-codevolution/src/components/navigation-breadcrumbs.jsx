import React from 'react';
import { Breadcrumbs, Box, Link, Typography } from '@mui/material';
import { NavigateNext } from '@mui/icons-material';
function MuiBreadcrumbs() {
  return (
    <Box m={2}>
      <Breadcrumbs separator={<NavigateNext />}>
        <Link underline="hover">Home</Link>
        <Link underline="hover">Men</Link>
        <Link underline="hover">Catalog</Link>
        <Link underline="hover">Accessories</Link>
        <Typography>Shoes</Typography>
      </Breadcrumbs>
    </Box>
  );
}
export default MuiBreadcrumbs;

import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import StaleBlueButton from './staleBlueButton';
import photoBanner from '../../src/assets/img/photo_banner.png';

function Hero() {
  return (
    <Box height="auto" width="auto" sx={{ padding: '20px', margin: '8px' }}>
      <Grid container direction="row" spacing="4">
        <Grid item xs={12} md={8} display="flex" alignContent="center">
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            justifyItems="center"
            alignItems="flex-start"
          >
            <Typography variant="h2" mb={1}>
              The most <br />
              Advanced Education
            </Typography>
            <Typography variant="body1" mb={2}>
              Choose out of 2500+ mentors. Trusted by 250k users. <br />
              Industry experts and top university professors Runs in a browser.
              Can be downloaded on desktop, tablet and mobiles. Extremely fast
              loading at 200ms. Updates work directory from the website.
            </Typography>
            <StaleBlueButton>Join Us</StaleBlueButton>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          display="flex"
          alignContent="center"
          justifyContent="center"
        >
          <Box>
            <img
              src={photoBanner}
              alt="Banner pic"
              height="500px"
              maxWidth="400px"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Hero;
/*

    */

/* 
function Hero() {
  return (
    <Box height="auto" width="auto" border="4px solid black" p="8px" m="8px">
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        display="flex"
        alignItems="center"
        justifyContent="space-evenly"
      >
        <Box display="flex">
          <Stack direction="column" display="flex" alignItems="flex-start">
            <Typography variant="h2" mb={1}>
              The most <br />
              Advanced Education
            </Typography>
            <Typography variant="body1" mb={2} width="800px">
              Choose out of 2500+ mentors. Trusted by 250k users. <br />
              Industry experts and top university professors Runs in a browser.
              Can be downloaded on desktop, tablet and mobiles. Extremely fast
              loading at 200ms. Updates work directory from the website.
            </Typography>
            <StaleBlueButton>Join Us</StaleBlueButton>
          </Stack>
        </Box>
        <Box display="flex">
          <img
            src={photoBanner}
            alt="Banner pic"
            height="500px"
            maxWidth="400px"
          />
        </Box>
      </Stack>
    </Box>
  );
}
*/

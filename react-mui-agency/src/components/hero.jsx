import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import StaleBlueButton from './staleBlueButton';
import photoBanner from '../../src/assets/img/photo_banner.png';

const styles = {
  hero: (theme) => ({
    display: 'flex',
    padding: '20px',
    margin: '8px',
  }),
  photo: {
    //margin: '44px auto 0',
  },
};
function Hero() {
  return (
    <Box sx={styles.hero}>
      <Grid container spacing={20} styles={{ justifyContent: 'space-between' }}>
        <Grid item xs={12} md={7} sx={{ flexGrow: 1 }}>
          <Box>
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
        <Grid item xs={12} md={5} sx={{ flexGrow: 1 }}>
          <Box sx={styles.photo}>
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

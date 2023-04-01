import React from 'react';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { Visibility, AccessAlarm, Groups, Public } from '@mui/icons-material';
import bannerPhoto from '../../src/assets/images/banner_photo.png';
import bannerDesk from '../../src/assets/images/banner_desk.svg';
import HeroCard from './hero-card';
//import bannerPhoto from '../../src/assets/images/banner_photo.png';
function Hero() {
  return (
    <Box
      border="3px solid #F2CD5C"
      sx={{ backgroundImage: `url(${bannerDesk})`, flexGrow: 1 }}
    >
      <h1>Hero Section</h1>
      <Grid container spacing={4} display="flex" pb={12}>
        <Grid item sm={12} md={6} display="flex">
          <Box display="flex" component="img" src={bannerPhoto}></Box>
        </Grid>
        <Grid item sm={12} md={6} display="flex">
          <Stack direction="column" alignItems="start" justifyContent="center">
            <Typography variant="h2" pb={4}>
              A revolutionary <br /> way to educate.
            </Typography>
            <Typography variant="body1" pb={4} pr={8}>
              “Online education is electronically supported learning that relies
              on the Internet for teacher/student interaction and the
              distribution of class materials.”
            </Typography>
            <Button variant="contained" startIcon={<Visibility />}>
              View Courses
            </Button>
          </Stack>
        </Grid>
      </Grid>
      <Grid container spacing={14} padding={'0px 240px 200px 240px'}>
        <Grid item xs={12} sm={4} display="flex" justifyContent="center">
          <HeroCard
            icon={<AccessAlarm fontSize="large" color="primary" />}
            title="60,000+"
            desc="Hours content"
          />
        </Grid>
        <Grid item xs={12} sm={4} display="flex" justifyContent="center">
          <HeroCard
            icon={<Groups fontSize="large" color="primary" />}
            title="5,000+"
            desc="Student"
          />
        </Grid>
        <Grid item xs={12} sm={4} display="flex" justifyContent="center">
          <HeroCard
            icon={<Public fontSize="large" color="primary" />}
            title="110+"
            desc="Countries"
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Hero;

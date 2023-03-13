import React from 'react';
import { Box, Grid, Link, Stack, TextField, Typography } from '@mui/material';
import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import StaleBlueButton from './staleBlueButton';
function Footer() {
  return (
    //box
    <Box
      height="auto"
      width="auto"
      margin={'50px 50px 20px 50px'} //remove this
      padding="40px 0px"
      borderTop="1px solid #777FEB"
      borderBottom="1px solid #777FEB"
    >
      <Grid container display="flex">
        <Grid item xs={12} md={4} lg={3}>
          <Stack direction="column" spacing={2} alignItems="flex-start">
            <Typography variant="h4" marginBottom="20px">
              Services
            </Typography>
            <Link underline="hover">UI/UX Design</Link>
            <Link underline="hover">Web Development</Link>
            <Link underline="hover">SEO Optimization</Link>
            <Link underline="hover">Product Design</Link>
          </Stack>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Stack direction="column" spacing={2} alignItems="flex-start">
            <Typography variant="h4" marginBottom="20px">
              Links
            </Typography>
            <Link underline="hover">About Agency</Link>
            <Link underline="hover">Latest News & Blog</Link>
            <Link underline="hover">Meet the Team</Link>
            <Link underline="hover">Popular Serivces</Link>
          </Stack>
        </Grid>
        <Grid item xs={12} md={4} lg={2}>
          <Stack direction="column" spacing={2} alignItems="flex-start">
            <Typography variant="h4" marginBottom="20px">
              Follow
            </Typography>
            <Link
              underline="hover"
              display="flex"
              alignItems="center"
              gap="6px"
            >
              <Facebook fontSize="small" color="slateBlue" /> Facebook
            </Link>
            <Link
              underline="hover"
              display="flex"
              alignItems="center"
              gap="6px"
            >
              <Instagram fontSize="small" color="slateBlue" /> Instagram
            </Link>
            <Link
              underline="hover"
              display="flex"
              alignItems="center"
              gap="6px"
            >
              <LinkedIn fontSize="small" color="slateBlue" /> LinkedIn
            </Link>
            <Link
              underline="hover"
              display="flex"
              alignItems="center"
              gap="6px"
            >
              <Twitter fontSize="small" color="slateBlue" /> Twitter
            </Link>
          </Stack>
        </Grid>
        <Grid item xs={12} md={12} lg={4}>
          <Typography variant="h3">Subscribe Our Newsletter</Typography>
          <Typography style={{ fontSize: '16px' }}>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur.
            psum dolor sit am psum dolor sit am.{' '}
            <Box component="form" display="flex" gap={1}>
              <TextField type="text" label="email address" />
              <StaleBlueButton variant="contained">Subscribe</StaleBlueButton>
            </Box>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;

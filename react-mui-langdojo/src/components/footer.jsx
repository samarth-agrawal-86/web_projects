import React from 'react';
import { Box, Grid, IconButton, Link, Stack, Typography } from '@mui/material';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';

function Footer() {
  return (
    <Box
      border="3px solid #353935"
      height="auto"
      width="auto"
      bgcolor="#673F86"
      padding="40px 120px"
    >
      <h1>Footer Section</h1>
      <Grid container display="flex">
        <Grid item xs={12} sm={6} md={3}>
          <Stack direction="column" spacing={2} alignItems="flex-start">
            <Typography variant="h6" color="#ffffff">
              COMPANY
            </Typography>
            <Link color="#ffffff" underline="hover">
              About Us
            </Link>
            <Link color="#ffffff" underline="hover">
              Partners
            </Link>
            <Link color="#ffffff" underline="hover">
              Careers
            </Link>
            <Link color="#ffffff" underline="hover">
              Teaching center
            </Link>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Stack direction="column" spacing={2} alignItems="flex-start">
            <Typography variant="h6" color="#ffffff">
              CATEGORIES
            </Typography>
            <Link color="#ffffff" underline="hover">
              Classroom Courses
            </Link>
            <Link color="#ffffff" underline="hover">
              Video Courses
            </Link>
            <Link color="#ffffff" underline="hover">
              Offline Courses
            </Link>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Stack direction="column" spacing={2} alignItems="flex-start">
            <Typography variant="h6" color="#ffffff">
              SUPPORT
            </Typography>
            <Link color="#ffffff" underline="hover">
              Contact Us
            </Link>
            <Link color="#ffffff" underline="hover">
              Site Feedback
            </Link>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Stack direction="column" spacing={2} alignItems="flex-start">
            <Typography variant="h6" color="#ffffff">
              GET IN TOUCH
            </Typography>
            <Link color="#ffffff" underline="hover">
              Privacy
            </Link>
            <Link color="#ffffff" underline="hover">
              Help
            </Link>
            <Link color="#ffffff" underline="hover">
              Contact
            </Link>
            <Stack direction="row" spacing={2} alignItems="flex-start">
              <IconButton sx={{ color: '#ffffff' }} edge="start">
                <Instagram />
              </IconButton>
              <IconButton sx={{ color: '#ffffff' }} edge="start">
                <Facebook />
              </IconButton>
              <IconButton sx={{ color: '#ffffff' }} edge="start">
                <Twitter />
              </IconButton>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;

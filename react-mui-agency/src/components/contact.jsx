import React from 'react';
import { Box, Grid, Stack, TextField, Typography } from '@mui/material';
import { EmailOutlined, CallOutlined, ChevronRight } from '@mui/icons-material';

import contact from '../../src/assets/img/contact.png';
import StaleBlueButton from './staleBlueButton';
function Contact() {
  return (
    <Box
      height="auto"
      width="auto"
      sx={{ padding: '20px 50px', margin: '10px' }}
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        display="flex"
        justifyContent="space-between"
      >
        <Stack direction="column" display="flex" flexGrow="3">
          <Typography variant="h2">Contact Us</Typography>
          <Typography variant="body1">
            Professional Design Agency To Provide Solutions
          </Typography>
          <Box component="form" mr="40px">
            <Grid container spacing={2} marginTop="20px" marginBottom="20px">
              <Grid item xs={12} md={6} display="flex" flexDirection="column">
                <Typography
                  variant="body2"
                  color="slateBlue.main"
                  display="flex"
                  alignItems="center"
                  gap="6px"
                >
                  <EmailOutlined /> Email Us
                </Typography>
                <Typography variant="body2">support@gmail.com</Typography>
              </Grid>
              <Grid item xs={6} md={6} display="flex" flexDirection="column">
                <Typography
                  variant="body2"
                  color="slateBlue.main"
                  display="flex"
                  alignItems="center"
                  gap="6px"
                >
                  <CallOutlined /> Phone Us
                </Typography>
                <Typography variant="body2">+1 433 333 6845</Typography>
              </Grid>
              <Grid item xs={12} md={6} display="flex">
                <TextField
                  autoComplete="given-name"
                  color="slateBlue"
                  name="fullname"
                  required
                  fullWidth
                  id="fullname"
                  label="Full Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} md={6} display="flex">
                <TextField
                  color="slateBlue"
                  inac
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12} display="flex">
                <TextField
                  multiline
                  color="slateBlue"
                  rows={4}
                  fullWidth
                  id="message"
                  label="Write message"
                  name="message"
                />
              </Grid>
            </Grid>

            <StaleBlueButton>
              Send Message <ChevronRight />
            </StaleBlueButton>
          </Box>
        </Stack>
        <Box
          component="img"
          src={contact}
          display="flex"
          flexGrow="2"
          height="auto"
          width="100%"
          maxWidth={{ xs: '335px', md: '400px' }}
        ></Box>
      </Stack>
    </Box>
  );
}

export default Contact;

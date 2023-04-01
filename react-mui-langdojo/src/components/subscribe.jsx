import React from 'react';
import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material';
import subscribe from '../../src/assets/images/subscribe.png';
function Subscribe() {
  return (
    <Box
      border="3px solid #F2CD5C"
      display="flex"
      justifyContent="center"
      padding="50px 0px"
    >
      <Box
        bgcolor="primary.main"
        width="70%"
        height="424px"
        borderRadius="30px"
        sx={{ backgroundImage: `url${subscribe}` }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Stack direction="column" spacing={3}>
          <Typography variant="h4" align="center" color="#ffffff">
            Subscribe For Get Update <br />
            Every New Courses
          </Typography>
          <Typography variant="body1">
            10k+ students daily learn with Eduvi. Subscribe for new courses.
          </Typography>
          <Grid container>
            <Grid item flexGrow="1">
              <TextField fullWidth variant="filled">
                Enter your email
              </TextField>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="buttonPrimaryLight"
                size="large"
              >
                {' '}
                Subscribe
              </Button>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </Box>
  );
}

export default Subscribe;

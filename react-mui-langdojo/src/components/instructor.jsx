import React from 'react';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { AddCircleOutline } from '@mui/icons-material';
import becomeInstructor from '../../src/assets/images/become.png';
function Instructor() {
  return (
    <Box border="3px solid #28282B">
      <h1>Become Instructor Section</h1>
      <Grid container>
        <Grid item sm={12} md={7} display="flex">
          <Stack direction="column" alignItems="center" justifyContent="center">
            <Box
              width="70%"
              display="flex"
              flexDirection="column"
              alignItems="start"
              justifyContent="center"
            >
              <Typography variant="h4" pb="40px">
                Become an instructor
              </Typography>
              <Typography variant="body1" color="black" pb="80px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor rhoncus dolor purus non enim praesent elementum
                facilisis leo,
                <br /> <br />
                vel fringilla est ullamcorper eget nulla facilisi etiam
                dignissim diam quis enim lobortis scelerisque fermentum dui
                faucibus in ornare quam viverra orci
              </Typography>
              <Button variant="contained" startIcon={<AddCircleOutline />}>
                Apply Now
              </Button>
            </Box>
          </Stack>
        </Grid>
        <Grid item sm={12} md={5} display="flex">
          <Box
            component="img"
            src={becomeInstructor}
            width="460px"
            height="540px"
          ></Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Instructor;

import { Box, Grid, Link, Stack, Typography } from '@mui/material';
import React from 'react';
import ExpCard from './exp-card';
import dashboard from '../../src/assets/img/exp-dashboard.svg';
import landing from '../../src/assets/img/exp-landing.svg';
import illustration from '../../src/assets/img/exp-illustration.svg';

const links = ['Show All', 'Design', 'Branding', 'Illustration', 'SEO'];

function Experience() {
  return (
    <Box
      height="auto"
      width="auto"
      bgcolor="#F5F5F5"
      sx={{ padding: '20px 50px' }}
    >
      <Stack direction="column" spacing={3}>
        <Typography variant="h2">professional experience</Typography>
        <Typography variant="body1">
          Professional Design Agency To Provide Solutions
        </Typography>

        <Stack display="flex" flexWrap="wrap" direction="row" spacing={6}>
          {links.map((link, index) => (
            <Link key={index} underline="hover" color="#000000" variant="body2">
              {link}
            </Link>
          ))}
        </Stack>
        <Grid container display="flex" justifyContent="center">
          <Grid
            item
            p={4}
            xs={12}
            md={4}
            display="flex"
            justifyContent="center"
          >
            <ExpCard title="Dashboard Design" imgSrc={dashboard} />
          </Grid>
          <Grid
            item
            p={4}
            xs={12}
            md={4}
            display="flex"
            justifyContent="center"
          >
            <ExpCard title="Landing Pages" imgSrc={landing} />
          </Grid>
          <Grid
            item
            p={4}
            xs={12}
            md={4}
            display="flex"
            justifyContent="center"
          >
            <ExpCard title="Illustration Design" imgSrc={illustration} />
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
}

export default Experience;

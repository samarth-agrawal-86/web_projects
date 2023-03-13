import { Box, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import SolutionsCard from './solutions-card';

import strategy from '../../src/assets/img/sol-strategy.svg';
import design from '../../src/assets/img/sol-design.svg';
import development from '../../src/assets/img/sol-development.svg';

function Solutions() {
  return (
    <Box height="auto" width="auto" sx={{ padding: '20px', margin: '10px' }}>
      <Stack direction="column" spacing={4}>
        <Typography variant="h2" mb={1} textAlign="center">
          Creative Design Solutions
        </Typography>
        <Typography variant="body1" mb={2} textAlign="center">
          Professional Design Agency to provide you with the best design
          solutions
        </Typography>
        <Grid container>
          <Grid item xs={12} md={4} display="flex" justifyContent="center">
            <SolutionsCard
              title="Strategy"
              description={[
                'Product Management',
                'MPV Definition',
                'Product Strategy',
              ]}
              imgSrc={strategy}
            />
          </Grid>
          <Grid item xs={12} md={4} display="flex" justifyContent="center">
            <SolutionsCard
              title="Product Design"
              description={[
                'Product Management',
                'MPV Definition',
                'Product Strategy',
              ]}
              imgSrc={design}
            />
          </Grid>
          <Grid item xs={12} md={4} display="flex" justifyContent="center">
            <SolutionsCard
              title="Development"
              description={[
                'Product Management',
                'MPV Definition',
                'Product Strategy',
              ]}
              imgSrc={development}
            />
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
}

export default Solutions;

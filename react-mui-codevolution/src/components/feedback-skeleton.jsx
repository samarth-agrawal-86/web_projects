import React from 'react';
import { Avatar, Box, Skeleton, Stack, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
function MuiSkeleton() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    // <Stack p={4} spacing={1} direction={'column'} width="250px">
    //   <Skeleton variant="text" />
    //   <Skeleton variant="circular" width={40} height={40} />
    //   <Skeleton variant="rectangular" width={210} height={118} />
    //   <Skeleton variant="rounded" width={210} height={118} />
    // </Stack>
    <Box width={'256px'} marginTop={'12px'}>
      {loading ? (
        <Skeleton variant="rectangular" width={'256px'} height={118} />
      ) : (
        <img
          src="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          alt="img"
          width={'256px'}
          height={118}
        />
      )}
      <Stack
        direction={'row'}
        spacing={1}
        sx={{ width: '100%', marginTop: '12px' }}
      >
        {loading ? (
          <Skeleton variant="circular" width={40} height={40} />
        ) : (
          <Avatar>R</Avatar>
        )}
        <Stack direction={'column'} width={'80%'}>
          {loading ? (
            <>
              <Typography variant="body1">
                <Skeleton variant="text" width={'100%'} />
              </Typography>
              <Typography variant="body2">
                <Skeleton variant="text" width={'100%'} />
              </Typography>
            </>
          ) : (
            <>
              <Typography variant="body1">React MUI Tutorial</Typography>
              <Typography variant="body2">
                Learn about various MUI components
              </Typography>
            </>
          )}
        </Stack>
      </Stack>
    </Box>
  );
}

export default MuiSkeleton;

import React from 'react';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@mui/material';

function MuiCards() {
  return (
    <Box width={500}>
      <Card>
        <CardMedia
          component="img"
          height="200"
          image="https://source.unsplash.com/500x400/?app"
        />
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            React
          </Typography>
          <Typography variant="body2" component="div">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
            earum similique sunt assumenda ut! Officia reiciendis asperiores,
            perspiciatis illum quisquam tenetur architecto ipsam rem numquam
            labore veritatis dicta sit magnam!
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="text">Share</Button>
          <Button variant="text">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default MuiCards;

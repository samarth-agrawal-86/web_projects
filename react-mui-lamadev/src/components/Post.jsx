import React from 'react';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Avatar,
  Typography,
  Checkbox,
} from '@mui/material';
import { Favorite, FavoriteBorder, Share, MoreVert } from '@mui/icons-material';

function Post(props) {
  return (
    <Card sx={{ margin: 2 }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: 'red' }}>{props.av}</Avatar>}
        title={props.title}
        subheader={props.subheader}
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
      />
      <CardMedia component="img" height="300" image={props.img} />

      <CardContent>
        <Typography variant="body2">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton>
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: 'red' }} />}
          />
        </IconButton>
        <IconButton>
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Post;

import React from 'react';
import {
  Avatar,
  Box,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import {
  WorkspacePremium,
  FeedOutlined,
  AccountCircleOutlined,
} from '@mui/icons-material';
import groupImg from '../../src/assets/images/Group.png';
function Benefits() {
  return (
    <Box border="3px solid #F2CD5C" bgcolor="#9980B7" padding="50px 0">
      <h1>Benefits Section</h1>
      <Grid container>
        <Grid item sm={12} md={6} display="flex">
          <Box component="img" src={groupImg}></Box>
        </Grid>

        <Grid item sm={12} md={6} display="flex">
          <Stack direction="column">
            <Typography variant="h2">
              Benefits from our online <br /> learning
            </Typography>
            <List sx={{ paddingRight: '50px' }}>
              <ListItem pad>
                <ListItemAvatar style={{ minWidth: '110px' }}>
                  <Avatar sx={{ bgcolor: '#ffffff', width: 88, height: 88 }}>
                    <WorkspacePremium color="primary" sx={{ fontSize: 60 }} />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Online Degrees"
                  primaryTypographyProps={{
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '24px',
                  }}
                  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,"
                  secondaryTypographyProps={{
                    paddingTop: '6px',
                    color: '#ffffff',
                    fontWeight: 300,
                    fontSize: '20px',
                  }}
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar style={{ minWidth: '110px' }}>
                  <Avatar sx={{ bgcolor: '#ffffff', width: 88, height: 88 }}>
                    <FeedOutlined color="primary" sx={{ fontSize: 60 }} />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Short Courses"
                  primaryTypographyProps={{
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '24px',
                  }}
                  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,"
                  secondaryTypographyProps={{
                    paddingTop: '6px',
                    color: '#ffffff',
                    fontWeight: 300,
                    fontSize: '20px',
                  }}
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar style={{ minWidth: '110px' }}>
                  <Avatar sx={{ bgcolor: '#ffffff', width: 88, height: 88 }}>
                    <AccountCircleOutlined
                      color="primary"
                      sx={{ fontSize: 60 }}
                    />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Expert Teachers"
                  primaryTypographyProps={{
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '24px',
                  }}
                  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,"
                  secondaryTypographyProps={{
                    paddingTop: '6px',
                    color: '#ffffff',
                    fontWeight: 300,
                    fontSize: '20px',
                  }}
                />
              </ListItem>
            </List>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Benefits;

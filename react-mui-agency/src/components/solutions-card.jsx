import React from 'react';
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  Button,
  List,
  ListItemIcon,
  ListItemText,
  ListItem,
  Box,
} from '@mui/material';
import { East } from '@mui/icons-material';

const styles = {
  card: {
    width: '400px',
    height: '401px',
    padding: '10px',
    margin: '5px',

    textAlign: 'left',
    border: '0.5px solid #777FEB',
    borderRadius: '10px',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    boxSizing: 'border-box',
  },
  listItem: {
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '19.5px',
    color: '#686868',
    padding: '8px 0',
  },
};

function SolutionsCard({ title, description, imgSrc }) {
  return (
    <Card sx={styles.card}>
      <CardContent>
        <Box component="img" src={imgSrc} height="84px" width="84px" />
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>

        <List>
          <ListItem sx={styles.listItem}>
            <ListItemIcon style={{ minWidth: '20px' }}>
              <East fontSize="16px" />
            </ListItemIcon>
            <ListItemText disableTypography>{description[0]}</ListItemText>
          </ListItem>
          <ListItem sx={styles.listItem}>
            <ListItemIcon style={{ minWidth: '20px' }}>
              <East fontSize="16px" />
            </ListItemIcon>
            <ListItemText disableTypography>{description[1]}</ListItemText>
          </ListItem>
          <ListItem sx={styles.listItem}>
            <ListItemIcon style={{ minWidth: '20px' }}>
              <East fontSize="16px" />
            </ListItemIcon>
            <ListItemText disableTypography>{description[2]}</ListItemText>
          </ListItem>
        </List>
      </CardContent>
      <CardActions>
        <Button
          color="slateBlue"
          size="small"
          sx={{ textDecorationLine: 'underline' }}
        >
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}

export default SolutionsCard;

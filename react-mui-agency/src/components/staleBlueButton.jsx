import React from 'react';
import { Button } from '@mui/material';

const styles = {
  btn: (theme) => ({
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: '700',
    fontSize: '16px',
    lineheight: '20px',
    texttransform: 'capitalize',
    background: theme.palette.slateBlue.main, //'#777FEB',
    color: '#FFFFFF',
    borderRadius: '8px',
    padding: '12px 40px',

    '&:hover': {
      background: '#646ab0',
    },
  }),
};
function StaleBlueButton(props) {
  return (
    <Button sx={styles.btn} variant="contained">
      {props.children}
    </Button>
  );
}

export default StaleBlueButton;

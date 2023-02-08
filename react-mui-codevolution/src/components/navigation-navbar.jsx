import React from 'react';
import {
  Stack,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from '@mui/material';
import CatchingPokemon from '@mui/icons-material/CatchingPokemon';

function MuiNavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit">
          <CatchingPokemon />
        </IconButton>
        <Typography variant="h6" component={'div'} sx={{ flexGrow: 1 }}>
          POKEMONAPP
        </Typography>
        <Stack direction="row">
          <Button color="inherit">Features</Button>
          <Button color="inherit">Pricing</Button>
          <Button color="inherit">About</Button>
          <Button variant="outlined" color="inherit">
            Login
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default MuiNavBar;

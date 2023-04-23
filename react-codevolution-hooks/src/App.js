import { Box, Divider, Typography } from '@mui/material';
import CounterOne from './components/CounterOne';
import HookObject from './components/HookObject';
import HookArray from './components/HookArray';

function App() {
  return (
    <Box>
      <Typography variant="h3" color="primary">
        Start App
      </Typography>
      <Divider sx={{ marginTop: '40px', marginBottom: '40px' }} />
      <CounterOne />
      <Divider sx={{ marginTop: '40px', marginBottom: '40px' }} />
      <HookObject />
      <Divider sx={{ marginTop: '40px', marginBottom: '40px' }} />
      <HookArray />
    </Box>
  );
}

export default App;

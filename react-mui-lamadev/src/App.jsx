import React from 'react';
import { createTheme, Stack, ThemeProvider } from '@mui/material';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import CreateNewPost from './components/CreateNewPost';
import { Box } from '@mui/system';

function App() {
  const [mode, setMode] = React.useState('light');

  const changeTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={changeTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar />

        <Stack direction="row" spacing={1} m={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <CreateNewPost />
      </Box>
    </ThemeProvider>
  );
}

export default App;

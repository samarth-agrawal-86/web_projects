import React from 'react';
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { useState } from 'react';
import { FavoriteRounded } from '@mui/icons-material';
function MuiTabs() {
  const [value, setValue] = useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList
            onChange={handleChange}
            textColor={'secondary'}
            indicatorColor={'secondary'}
            centered={true}
            variant={'scrollable'}
            scrollButtons={'auto'}
          >
            <Tab
              label="Item One"
              value="1"
              icon={<FavoriteRounded />}
              iconPosition={'start'}
            />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}

export default MuiTabs;

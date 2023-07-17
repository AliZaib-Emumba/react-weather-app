import { AppBar, Box, Container, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';

import SearchBar from '../../components/SearchBar';
import { WeatherApp } from './components/WeatherAppTab';
import TabPanel from '../../components/TabPanel';
import VirtualList from './components/VirtualListTab';

function Home() {
  const [currentTabIndex, setCurrenTabIndex] = useState(0);

  const onTabPress = (_: React.SyntheticEvent, newValue: number) => setCurrenTabIndex(newValue);
  return (
    <Container>
      <Box>
        <AppBar style={{ alignItems: 'center' }}>
          <Toolbar>
            <Typography variant="h4">The Weather App</Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <SearchBar />

      <Tabs value={currentTabIndex} onChange={onTabPress}>
        <Tab label={'Weather App'} />
        <Tab label={'Virtualised list'} />
      </Tabs>
      <TabPanel value={currentTabIndex} index={0}>
        <WeatherApp />
      </TabPanel>
      <TabPanel value={currentTabIndex} index={1}>
        <VirtualList />
      </TabPanel>
    </Container>
  );
}

export default Home;

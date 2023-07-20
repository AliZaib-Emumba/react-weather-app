import { AppBar, Box, Container, Stack, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';

import SearchBar from '../../components/SearchBar';
import { WeatherApp } from './components/WeatherAppTab';
import TabPanel from '../../components/TabPanel';
import VirtualList from './components/VirtualListTab';
import ProductsList from './components/productsList';

function Home() {
  const [currentTabIndex, setCurrenTabIndex] = useState(0);

  const onTabPress = (_: React.SyntheticEvent, newValue: number) => setCurrenTabIndex(newValue);
  return (
    <Container>
      <Stack position={'fixed'} top={0} width={'70%'} bgcolor={'white'}>
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
          <Tab label={'Products List'} />
        </Tabs>
      </Stack>
      <TabPanel value={currentTabIndex} index={0}>
        <Stack mt={25}>
          <WeatherApp />
        </Stack>
      </TabPanel>
      <TabPanel value={currentTabIndex} index={1}>
        <Stack mt={25}>
          <VirtualList />
        </Stack>
      </TabPanel>
      <TabPanel value={currentTabIndex} index={2}>
        <ProductsList />
      </TabPanel>
    </Container>
  );
}

export default Home;

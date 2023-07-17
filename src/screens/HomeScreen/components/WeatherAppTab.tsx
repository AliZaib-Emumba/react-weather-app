import { Box, Grid, Stack } from '@mui/material';

import CurrentWeatherContent from './CurrentWeatherContent';
import FiveDayWeatherContent from './FiveDayWeatherContent';
import TempConverter from '../../../components/TempConverter';
import WeatherMap from '../../../components/WeatherMap';

export const WeatherApp = () => {
  return (
    <Box sx={{ marginTop: 4 }}>
      <Grid container spacing={2} alignItems={'stretch'}>
        <Grid item xs={12} md={6}>
          <Stack height={'100%'} gap={2} border={1} borderColor={'grey.300'}>
            <CurrentWeatherContent />
            <Stack>
              <FiveDayWeatherContent />
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box height={'100%'} border={1} borderColor={'grey.300'}>
            <TempConverter />

            <WeatherMap />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

import React, { useEffect, useState } from 'react';
import { Box, Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';

import { fetchWeatherMap } from '../services';
import { LayerType } from '../types';

const WeatherMap = () => {
  const [image, setImage] = useState<string | null>(null);
  const [layer, setLayer] = useState<LayerType>('clouds_new');

  const fetchWeatherData = async (layerToApply: LayerType) => {
    try {
      const response = await fetchWeatherMap(layerToApply);
      setImage(response);
    } catch (e) {
      console.log('Error while fetching image', e);
    }
  };

  useEffect(() => {
    fetchWeatherData(layer);
  }, [layer]);

  const onLayerSelect = (_: React.MouseEvent<HTMLElement, MouseEvent>, value: string) => {
    setLayer(value as LayerType);
  };

  return (
    <Stack spacing={2} margin={2}>
      <Typography variant="h5" fontWeight={'600'}>
        Weather Map
      </Typography>
      <ToggleButtonGroup color="primary" value={layer} exclusive onChange={onLayerSelect} aria-label="Platform">
        <ToggleButton value="clouds_new">Clouds</ToggleButton>
        <ToggleButton value="temp_new">Temp</ToggleButton>
        <ToggleButton value="precipitation_new">Precipitation</ToggleButton>
      </ToggleButtonGroup>
      <Box bgcolor={'grey.500'} height={'300px'}>
        {image ? <img src={image + ''} width={'100%'} height={'100%'} alt={'weather img'} /> : 'Loading...'}
      </Box>
    </Stack>
  );
};

export default WeatherMap;

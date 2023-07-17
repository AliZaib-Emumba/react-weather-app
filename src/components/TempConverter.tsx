import React, { useState } from 'react';
import { Box, Card, Stack, TextField, Typography } from '@mui/material';

import { convertToCelsius, convertToFahrenheit } from '../utils';

const TempConverter = () => {
  const [inputCelsius, setInputCelsius] = useState('');
  const [inputFahrenheit, setInputFahrenheit] = useState('');

  const onCelsiusInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    const valueinFahrenheit = convertToFahrenheit(+value).toString();
    setInputCelsius(value);
    setInputFahrenheit(valueinFahrenheit);
  };

  const onFahrenheitInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    const valueInCelsius = convertToCelsius(+value).toString();
    setInputFahrenheit(value);
    setInputCelsius(valueInCelsius);
  };
  return (
    <Stack gap={1} margin={2}>
      <Typography variant="h5" fontWeight={'600'}>
        Temperature Converter
      </Typography>
      <Card sx={{ p: 2 }}>
        <Stack flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            <Typography color={'GrayText'}>Celsius</Typography>
            <TextField value={inputCelsius} onChange={onCelsiusInputChange} type="number" placeholder="Celsius" />
          </Box>
          <Box>
            <Typography color={'GrayText'}>Fahrenheit</Typography>
            <TextField value={inputFahrenheit} onChange={onFahrenheitInputChange} type="number" placeholder="Fahrenheit" />
          </Box>
        </Stack>
      </Card>
    </Stack>
  );
};
export default TempConverter;

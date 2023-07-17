import { Box, Card, Stack, Typography } from '@mui/material';
import { Else, If, Then } from 'react-if';

import { selectWeatherData } from '../../../store/temperature/temperatureSlice';
import EmptyState from '../../../components/EmptyState';
import { useAppSelector } from '../../../store/hooks';
import { getImageUrl } from '../../../utils';

function CurrentWeatherContent() {
  const tempData = useAppSelector(selectWeatherData);

  const degreeCelcius = '°C';
  const location = tempData.data?.city.name;
  const currentTemp = tempData.data?.list[0].main.temp + degreeCelcius;
  const condition = tempData.data?.list[0].weather[0].description;
  const feelsLike = tempData.data?.list[0].main.feels_like;
  const maxTemp = tempData.data?.list[0].main.temp_max + degreeCelcius;
  const minTemp = tempData.data?.list[0].main.temp_min + degreeCelcius;
  const imageIcon = tempData.data?.list[0].weather[0].icon;

  return (
    <Stack flex={1} gap={1} margin={2}>
      <Typography variant="h5" fontWeight={'600'}>
        Today's Forecast {location && `for ${location}`}
      </Typography>
      <Card>
        <If condition={tempData.data !== null}>
          <Then>
            <Stack flexDirection={'row'} alignItems={'stretch'} justifyContent={'space-between'} paddingX={4} paddingY={2}>
              <Box>
                <Typography variant="h2">{currentTemp}</Typography>
                <Typography color={'GrayText'}>{condition}</Typography>
                <Typography>Feels Like {feelsLike}</Typography>
                <Typography>
                  Highest: {maxTemp} / Lowest {minTemp}
                </Typography>
              </Box>
              <Box>
                <img alt={condition} src={getImageUrl(imageIcon ?? '')} width={120} height={120} />
              </Box>
            </Stack>
          </Then>
          <Else>
            <EmptyState title="Enter a City name or Zip Code to show weather info" />
          </Else>
        </If>
      </Card>
    </Stack>
  );
}

export default CurrentWeatherContent;

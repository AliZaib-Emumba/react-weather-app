import { Box, Card, Typography } from '@mui/material';

import { formatDate, getDayofWeek, getImageUrl } from '../../../utils';

interface TempCardProps {
  date_text: string;
  weather: string;
  icon: string;
  currentTemp: number;
  max_temp: number;
  min_temp: number;
}

const TempCard = (props: TempCardProps) => {
  const { date_text, weather, icon, currentTemp, max_temp, min_temp } = props;

  const date = formatDate(date_text);
  const day = getDayofWeek(date_text);

  return (
    <Box mx={1} py={2}>
      <Card>
        <Box mx={1} py={2} display={'flex'} flexDirection={'column'} alignItems={'center'}>
          <Typography color={'GrayText'} variant="subtitle2">
            {date} / {day}
          </Typography>
          <Typography variant="h5">{currentTemp}°C</Typography>
          <img src={getImageUrl(icon)} width={40} height={40} alt={weather + 'image'} />
          <Typography color={'GrayText'} variant="subtitle2">
            {weather}
          </Typography>
          <Typography color={'GrayText'} variant="subtitle2">
            max: {max_temp}°C
          </Typography>
          <Typography color={'GrayText'} variant="subtitle2">
            min: {min_temp}°C
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default TempCard;

import { Backdrop, CircularProgress } from '@mui/material';

import { selectWeatherData } from '../store/temperature/temperatureSlice';
import { useAppSelector } from '../store/hooks';

function Loading() {
  const tempData = useAppSelector(selectWeatherData);

  return (
    <Backdrop open={tempData.isLoading}>
      <CircularProgress size={80} />
    </Backdrop>
  );
}

export default Loading;

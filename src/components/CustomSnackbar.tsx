import { Alert, Snackbar } from '@mui/material';

import { clearError, selectWeatherData } from '../store/temperature/temperatureSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';

const CustomSnackbar = () => {
  const tempdata = useAppSelector(selectWeatherData);
  const dispatch = useAppDispatch();

  const closeSnackbar = () => dispatch(clearError());
  return (
    <Snackbar open={!!tempdata.error} autoHideDuration={3000} onClose={closeSnackbar} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
      {tempdata.error === '404' ? <Alert color="error">No City associated with the current value</Alert> : <Alert color="error">Network Error</Alert>}
    </Snackbar>
  );
};

export default CustomSnackbar;

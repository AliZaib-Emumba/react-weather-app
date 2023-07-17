import React, { useState } from 'react';
import { Box, Grid, Stack, Switch, TextField, Typography } from '@mui/material';
import { useDebouncedCallback } from 'use-debounce';

import { getDataWithCityName, getDataWithZipCode } from '../store/temperature/thunks';
import { useAppDispatch } from '../store/hooks';

function SearchBar() {
  const [searchVal, setSearchVal] = useState('');
  const [isCitySearchEnabled, setIsCitySearchEnabled] = useState(true);

  const dispatch = useAppDispatch();

  const inputPlaceholder = isCitySearchEnabled ? 'City' : 'Zip';

  const debouncedFetch = useDebouncedCallback((value: string) => {
    isCitySearchEnabled ? dispatch(getDataWithCityName(value)) : dispatch(getDataWithZipCode(value));
  }, 1000);

  const handleSearchInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = evt.target.value;
    setSearchVal(evt.target.value);
    if (inputValue) {
      debouncedFetch(evt.target.value);
    }
  };

  const handleToggleChange = () => {
    setIsCitySearchEnabled(!isCitySearchEnabled);
  };
  return (
    <Box sx={{ mt: 10 }}>
      <Grid container spacing={2} alignItems={'center'}>
        <Grid item xs={12} sm={7} md={9}>
          <TextField value={searchVal} onChange={handleSearchInput} placeholder={`Search ${inputPlaceholder}`} sx={{ width: '100%' }} />
        </Grid>
        <Grid item xs={12} sm={5} md={3}>
          <Stack direction="row" spacing={1} alignItems="center" justifyContent={'flex-end'}>
            <Typography>Zip Code</Typography>
            <Switch checked={isCitySearchEnabled} onChange={handleToggleChange} />
            <Typography>City Name</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SearchBar;

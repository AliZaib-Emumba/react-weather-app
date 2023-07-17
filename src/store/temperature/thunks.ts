import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchWithCityName, fetchWithZipCode } from '../../services';

export const getDataWithZipCode = createAsyncThunk('data/fetchUsingZipCode', async (zipCode: string) => {
  try {
    const response = await fetchWithZipCode(zipCode);
    return response;
  } catch (err) {
    throw err;
  }
});

export const getDataWithCityName = createAsyncThunk('data/fetchUsingCityName', async (cityName: string) => {
  try {
    const response = await fetchWithCityName(cityName);
    return response;
  } catch (err) {
    throw err;
  }
});

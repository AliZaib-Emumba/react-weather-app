import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { getDataWithCityName, getDataWithZipCode } from './thunks';
import { TempResponseData } from '../../types';

export interface tempState {
  data: TempResponseData | null;
  isLoading: boolean;
  error?: string;
}

const initialState = {
  data: null,
  isLoading: false,
  error: undefined,
};

export const tempSlice = createSlice({
  name: 'temp',
  initialState,
  reducers: {
    setWeatherData: (state: tempState, action: PayloadAction<TempResponseData>) => {
      state.data = action.payload;
    },
    setLoading: (state: tempState, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state: tempState, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    clearError: (state: tempState) => {
      state.error = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDataWithZipCode.pending, (state: tempState, action) => {
      state.isLoading = true;
    });
    builder.addCase(getDataWithZipCode.fulfilled, (state: tempState, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getDataWithZipCode.rejected, (state: tempState, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });
    builder.addCase(getDataWithCityName.pending, (state: tempState, action) => {
      state.isLoading = true;
    });
    builder.addCase(getDataWithCityName.fulfilled, (state: tempState, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getDataWithCityName.rejected, (state: tempState, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });
  },
});

export const { setWeatherData, setLoading, setError, clearError } = tempSlice.actions;

export const selectWeatherData = (state: { temp: tempState }) => state.temp;

export default tempSlice.reducer;

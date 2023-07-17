import { configureStore } from '@reduxjs/toolkit';

import tempReducer from './temperature/temperatureSlice';
import productsReducer from './products/productsSlice';

const store = configureStore({
  reducer: {
    temp: tempReducer,
    products: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

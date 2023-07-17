import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts } from '../../services';

export const getProductsData = createAsyncThunk('data/fetchProducts', async () => {
  try {
    const response = await fetchProducts();
    return response;
  } catch (err) {
    throw err;
  }
});

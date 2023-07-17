import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ProductsResponseType, ProductsType } from '../../types';
import { getProductsData } from './thunks';

export interface productsState {
  data: ProductsType[];
}

const initialState = {
  data: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state: productsState, action: PayloadAction<ProductsResponseType>) => {
      state.data = action.payload.data;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProductsData.fulfilled, (state: productsState, action) => {
      console.log('Incoming data', action.payload);
      state.data = action.payload.data;
    });
  },
});

export const { setProducts } = productsSlice.actions;

export const selectProducts = (state: { products: productsState }) => state.products;

export default productsSlice.reducer;

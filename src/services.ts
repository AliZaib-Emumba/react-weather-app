import axios from 'axios';

import { LayerType, ProductsResponseType, TempResponseData } from './types';
import { formatList } from './utils';

export const APP_ID = 'b39afe17e29959ddb7fe843a7ebbdff1';
export const IMAGE_URL = 'http://openweathermap.org/img/w/';

export const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';
export const WEATHER_MAP_URL = 'https://tile.openweathermap.org/map/';
export const PRODUCTS_URL = 'https://api.escuelajs.co/api/v1/products';

const axiosClient = axios.create({
  baseURL: BASE_URL,
  params: {
    appid: APP_ID,
  },
});

export const fetchWithZipCode = async (zipcode: string): Promise<TempResponseData> => {
  try {
    const response = await axiosClient
      .get<TempResponseData>(`?zip=${zipcode + ',pk'}&units=metric`)
      .then((res) => {
        return formatList(res.data);
      })
      .catch((err) => {
        throw err.response.status;
      });
    return response;
  } catch (e) {
    throw e;
  }
};

export const fetchWithCityName = async (cityName: string): Promise<TempResponseData> => {
  try {
    const response = await axiosClient
      .get<TempResponseData>(`?q=${cityName}&units=metric`)
      .then((res) => {
        return formatList(res.data);
      })
      .catch((err) => {
        throw err.response.status;
      });
    return response;
  } catch (e) {
    throw e;
  }
};

export const fetchWeatherMap = async (layer: LayerType) => {
  try {
    const response = await fetch(`${WEATHER_MAP_URL}${layer}/1/1/1.png?appid=${APP_ID}`);

    return response.url;
  } catch (error) {
    throw error;
  }
};

export const fetchProducts = async (): Promise<ProductsResponseType> => {
  try {
    const response = await axios.get(PRODUCTS_URL);
    return { data: response.data };
  } catch (e) {
    throw e;
  }
};

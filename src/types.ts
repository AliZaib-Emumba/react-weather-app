import { SnackbarOrigin } from '@mui/material';

export type TemperatureType = {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  pop: number;
  rain: object;
  sys: {
    pod: string;
  };
  dt_txt: string;
};

export type CityType = {
  id: number;
  name: string;
  coord: {
    lat: number;
    lon: number;
  };
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
};

export type TempResponseData = {
  cod: string;
  message: number;
  cnt: number;
  list: TemperatureType[];
  city: CityType;
};

type AlertType = 'error' | 'info' | 'success' | 'warning' | undefined;

export type SnackBarType = {
  autoHideDuration?: number;
  anchorOrigin?: SnackbarOrigin;
  type: AlertType;
  message: string;
};

export type ProductsType = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: string;
  updatedAt: string;
  category: {
    id: number;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
  };
};

export type ProductsResponseType = {
  data: ProductsType[];
};

export type LayerType = 'precipitation_new' | 'clouds_new' | 'temp_new';

// ****************##################

export type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: string;
  updatedAt: string;
  category: {
    id: number;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
  };
};

export type ProductWithCategory = {
  [key: string]: ProductType[];
};

export type CategoryType = {
  id: number;
  name: string;
  image: string;
  creationAt: string;
  updatedAt: string;
};

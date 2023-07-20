import { IMAGE_URL } from './services';
import { ProductType, TempResponseData } from './types';

export const formatList = (data: TempResponseData) => {
  const uniqueList = new Map();

  data.list.forEach((item) => {
    const date = item['dt_txt'].substring(0, 10);
    if (!uniqueList.has(date)) uniqueList.set(date, item);
  });

  return { ...data, list: [...uniqueList.values()] };
};

export const getImageUrl = (icon: string) => {
  return `${IMAGE_URL + icon}.png`;
};

export const formatDate = (date: string | undefined) => {
  if (date) {
    let d = new Date(date.substring(0, 10)),
      month = d.getMonth() + 1 + '',
      day = d.getDate() + '';
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [day, month].join('-');
  }
};

export const getDayofWeek = (date: string) => {
  if (date) {
    let dateString = new Date(date),
      day = '' + dateString.getDay();
    switch (day) {
      case '0':
        return 'Sun';
      case '1':
        return 'Mon';
      case '2':
        return 'Tue';
      case '3':
        return 'Wed';
      case '4':
        return 'Thu';
      case '5':
        return 'Fri';
      case '6':
        return 'Sat';
      default:
        return '';
    }
  }
  return '';
};

export const convertToCelsius = (temp: number): number => {
  let val = 0.5556 * (temp - 32);
  return Math.round((val + Number.EPSILON) * 100) / 100;
};

export const convertToFahrenheit = (temp: number): number => {
  let val = (temp * 9) / 5 + 32;
  return Math.round((val + Number.EPSILON) * 100) / 100;
};

export const groupProducts = (list: ProductType[]) => {
  return list.reduce(function (r, a) {
    r[a.category.name] = r[a.category.name] || [];
    r[a.category.name].push(a);
    return r;
  }, Object.create(null));
};

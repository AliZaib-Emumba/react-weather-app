import { Button, Stack, Typography } from '@mui/material';
import React, { useRef } from 'react';
import Slider, { Settings } from 'react-slick';
import TempCard from './TempCard';
import { useAppSelector } from '../../../store/hooks';
import { selectWeatherData } from '../../../store/temperature/temperatureSlice';
import { Else, If, Then } from 'react-if';

var settings: Settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,

  slidesToScroll: 1,
};

function FiveDayWeatherContent() {
  const tempData = useAppSelector(selectWeatherData);
  const slideRef = useRef<Slider>(null);

  const locationName = tempData.data?.city.name;
  const tempList = tempData.data?.list.slice(1);

  const goToPrevSlide = () => slideRef.current?.slickPrev();
  const goToNextSlide = () => slideRef.current?.slickNext();

  return (
    <Stack flex={1} margin={2}>
      <Typography variant="h5" fontWeight={'600'}>
        Weekly Forecast {locationName && `for ${locationName}`}
      </Typography>
      <If condition={tempData.data !== null}>
        <Then>
          <Stack sx={{ p: 1 }} spacing={2}>
            <Slider ref={slideRef} {...settings}>
              {tempList?.map((item, index: number) => (
                <TempCard
                  key={item.dt}
                  date_text={item.dt_txt}
                  weather={item.weather[0].main}
                  currentTemp={item.main.temp}
                  max_temp={item.main.temp_max}
                  min_temp={item.main.temp_min}
                  icon={item.weather[0].icon}
                />
              ))}
            </Slider>
            <Stack direction={'row'} justifyContent={'space-between'}>
              <Button onClick={goToPrevSlide} variant="text">
                Prev
              </Button>
              <Button onClick={goToNextSlide} variant="text">
                Next
              </Button>
            </Stack>
          </Stack>
        </Then>
        <Else>
          <Typography mt={4} color={'gray'} variant="h6" textAlign={'center'}>
            No Data to Show
          </Typography>
        </Else>
      </If>
    </Stack>
  );
}

export default FiveDayWeatherContent;

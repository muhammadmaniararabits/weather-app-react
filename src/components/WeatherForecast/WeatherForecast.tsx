import React, { useEffect, useRef } from "react";
import moment from "moment";
import Slider, { Settings, CustomArrowProps } from "react-slick";
import "./WeatherForecast.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getTemperature, getTemperatureUnit } from "../../components/utils";

interface Forecast {
  date: string;
  icon: string;
  temp: number;
}

interface WeatherForecastProps {
  isCelsius: boolean;
  forecasts: Forecast[];
}

export const WeatherForecast: React.FC<WeatherForecastProps> = ({
  isCelsius,
  forecasts,
}) => {
  const sliderRef = useRef<Slider>(null);
  const sliderSettings = {
    dots: false,
    infinite: false,
    variableWidth: true,
  };

  useEffect(() => {
    console.log(`Temperature unit change to ${isCelsius}`);
  }, [isCelsius]);

  const renderCustomNextArrow = (
    props: CustomArrowProps
  ): React.ReactElement => {
    const { onClick, className } = props;
    return (
      <button
        className={className}
        onClick={onClick}
        disabled={!sliderRef.current}
      >
        Next
      </button>
    );
  };

  const renderCustomPrevArrow = (
    props: CustomArrowProps
  ): React.ReactElement => {
    const { onClick, className } = props;
    return (
      <button
        className={className}
        onClick={onClick}
        disabled={!sliderRef.current}
      >
        Previous
      </button>
    );
  };

  const forecastItem = (index: number, forecast: Forecast) => {
    const temp: number = getTemperature(isCelsius, forecast.temp);
    const tempUnit: string = getTemperatureUnit(isCelsius);

    return (
      <div className="weather-forecast-item" key={index}>
        <div className="forecast-date">
          {moment(forecast.date).format("ddd")}
        </div>
        <img
          className="forecast-image"
          src={`http://openweathermap.org/img/wn/${forecast.icon}@4x.png`}
          alt="Weather Icon"
        />
        <div className="forecast-temperature">{`${temp.toFixed()}${tempUnit}`}</div>
      </div>
    );
  };

  return (
    <div className="weather-forecast-card">
      <Slider {...sliderSettings}>
        {forecasts.map((forecast, index) => forecastItem(index, forecast))}
      </Slider>
    </div>
  );
};

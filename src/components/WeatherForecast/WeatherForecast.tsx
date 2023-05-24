import React, { useRef } from "react";
import moment from "moment";
import Slider, { Settings, CustomArrowProps } from "react-slick";
import "./WeatherForecast.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Forecast {
  date: string;
  icon: string;
  temp: number;
}

interface WeatherForecastProps {
  forecasts: Forecast[];
}

export const WeatherForecast: React.FC<WeatherForecastProps> = ({
  forecasts,
}) => {
  const sliderRef = useRef<Slider>(null);
  const sliderSettings = {
    dots: false,
    infinite: false,
    // speed: 500,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    variableWidth: true,
  };

  const renderCustomNextArrow = (
    props: CustomArrowProps
  ): React.ReactElement => {
    const { onClick, className } = props;
    return (
      <button
        className={className}
        onClick={onClick}
        disabled={
          !sliderRef.current //||
          // sliderRef.current.innerSlider.state.currentSlide ===
          // forecasts.length - 1
        }
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
        disabled={
          !sliderRef.current //||
          // sliderRef.current.innerSlider.state.currentSlide === 0
        }
      >
        Previous
      </button>
    );
  };

  const forecastItem = (index: number, forecast: Forecast) => {
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
        <div className="forecast-temperature">{`${(
          forecast.temp - 273.15
        ).toFixed()}°C`}</div>
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

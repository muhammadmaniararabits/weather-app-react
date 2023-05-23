import React from "react";
import moment from "moment";
import "./WeatherForecast.css";

type Props = {
  forecasts: {
    date: string;
    icon: string;
    temp: number;
  }[];
};

export const WeatherForecast: React.FC<Props> = ({ forecasts }) => {
  return (
    <div className="weather-forecast">
      {forecasts.map((forecast, index) => (
        <div className="forecast-item" key={index}>
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
      ))}
    </div>
  );
};

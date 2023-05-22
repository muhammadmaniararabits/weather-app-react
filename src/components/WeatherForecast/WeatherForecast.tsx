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
          <div>{moment(forecast.date).format("ddd")}</div>
          <img
            src={`http://openweathermap.org/img/wn/${forecast.icon}.png`}
            alt="Weather Icon"
          />
          <div>{`${(forecast.temp - 273.15).toFixed()}°C`}</div>
        </div>
      ))}
    </div>
  );
};

import React from "react";
import moment from "moment";
// import { WeatherIcon } from "./WeatherIcon";

type Props = {
  forecasts: {
    date: number;
    icon: string;
    temp: number;
  }[];
};

export const WeatherForecast: React.FC<Props> = ({ forecasts }) => {
  return (
    <div className="weather-forecast">
      {forecasts.map((forecast, index) => (
        <div className="forecast-item" key={index}>
          <div>{moment(forecast.date * 1000).format("ddd")}</div>
          {/* <WeatherIcon iconCode={forecast.icon} size={2} /> */}
          <div>{`${forecast.temp.toFixed()}°C`}</div>
        </div>
      ))}
    </div>
  );
};

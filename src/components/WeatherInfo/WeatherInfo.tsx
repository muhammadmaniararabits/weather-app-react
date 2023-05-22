import React from "react";
import "./WeatherInfo.css";

interface Props {
  wind: number;
  humidity: number;
  rain?: number;
}

const WeatherInfo: React.FC<Props> = ({ wind, humidity, rain }) => {
  const rainDisplay = () => {
    if (rain) {
      return (
        <div>
          <div> | </div>
          <div className="weather-info-label">
            <i className="wi wi-rain"></i>
            <span>Rain {rain!}%</span>
          </div>
        </div>
      );
    }
  };
  return (
    <div className="weather-info-container">
      <div className="weather-info-text">
        <div className="weather-info-label">
          <i className="wi wi-direction-right"></i>
          <span>Wind </span> {wind} km/h
        </div>
        <div> | </div>
        <div className="weather-info-label">
          <i className="wi wi-humidity"></i>
          <span>Hum</span> {humidity}%
        </div>
        {rainDisplay()}
      </div>
    </div>
  );
};

export default WeatherInfo;

import React from "react";
import "./WeatherInfo.css";

interface Props {
  wind: number;
  humidity: number;
  rain: number;
  windIcon: string;
  humidityIcon: string;
  rainIcon: string;
}

const WeatherInfo: React.FC<Props> = ({
  wind,
  humidity,
  rain,
  windIcon,
  humidityIcon,
  rainIcon,
}) => {
  return (
    <div className="weather-info-container">
      <div className="weather-info-text">
        <div className="weather-info-label">
          <i className={windIcon}></i>
          <span>Wind:</span> {wind} mph
        </div>
        <div className="weather-info-label">
          <i className={humidityIcon}></i>
          <span>Humidity:</span> {humidity}%
        </div>
        <div className="weather-info-label">
          <i className={rainIcon}></i>
          <span>Rain:</span> {rain}%
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;

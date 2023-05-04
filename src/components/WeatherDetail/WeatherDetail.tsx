import React from "react";

type WeatherDetailProps = {
  humidity: number;
  rain: number;
  airQuality: number;
  windSpeed: number;
};

const WeatherDetail: React.FC<WeatherDetailProps> = ({
  humidity,
  rain,
  airQuality,
  windSpeed,
}) => {
  return (
    <div className="weather-info-container">
      <div className="weather-info-row">
        <div className="weather-info-label">Humidity</div>
        <div className="weather-info-value">{humidity}%</div>
      </div>
      <div className="weather-info-row">
        <div className="weather-info-label">Chances of Rain</div>
        <div className="weather-info-value">{rain}%</div>
      </div>
      <div className="weather-info-row">
        <div className="weather-info-label">Air Quality</div>
        <div className="weather-info-value">{airQuality}</div>
      </div>
      <div className="weather-info-row">
        <div className="weather-info-label">Wind Speed</div>
        <div className="weather-info-value">{windSpeed}mph</div>
      </div>
    </div>
  );
};

export default WeatherDetail;

import React from "react";
import "./WeatherDetail.css";

type WeatherDetailProps = {
  humidity: number;
  rain: number;
  visibility: number;
  windSpeed: number;
};

const WeatherDetail: React.FC<WeatherDetailProps> = ({
  humidity,
  rain,
  visibility,
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
        <div className="weather-info-label">Visibility</div>
        <div className="weather-info-value">{visibility}</div>
      </div>
      <div className="weather-info-row">
        <div className="weather-info-label">Wind Speed</div>
        <div className="weather-info-value">{windSpeed}km/h</div>
      </div>
    </div>
  );
};

export default WeatherDetail;

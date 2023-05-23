import React from "react";
import "./WeatherInfo.css";

interface Props {
  wind: number;
  humidity: number;
  rain?: number;
}

const WeatherInfo: React.FC<Props> = ({ wind, humidity, rain }) => {
  const rainDisplay = () => {
    // if (rain) {
    return (
      <div className="weather-info-box">
        <div className="line"> </div>
        <img
          className="weather-info-image"
          src={require("./../../Assets/rain.png")}
          alt="image logo"
        />
        <div className="weather-info-text">Rain {rain}%</div>
      </div>
    );
    // }
  };

  return (
    <div className="weather-info">
      <div className="weather-info-box">
        <img
          className="weather-info-image"
          src={require("../../Assets/wind.png")}
          alt="wind logo"
        />
        <div className="weather-info-text">Wind {wind} km/h</div>
      </div>
      <div className="weather-info-box">
        <div className="line"> </div>
        <img
          className="weather-info-image"
          src={require("./../../Assets/hum.png")}
          alt="image logo"
        />{" "}
        <div className="weather-info-text">Hum {humidity}%</div>
      </div>
      {rainDisplay()}
    </div>
  );
};

export default WeatherInfo;

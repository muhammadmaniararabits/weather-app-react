import React, { useState } from "react";
import "./WeatherDisplay.css";
import Switch from "./Switch/Switch";

interface Props {
  kelvinTemp: number;
  icon: string;
}

const WeatherDisplay: React.FC<Props> = ({ kelvinTemp, icon }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const toggleTempUnit = () => {
    setIsCelsius(!isCelsius);
  };

  const temp = isCelsius
    ? kelvinTemp - 273.15
    : (kelvinTemp - 273.15) * (9 / 5) + 32;
  const tempUnit = isCelsius ? "°C" : "°F";
  const iconUrl = `http://openweathermap.org/img/wn/${icon}@4x.png`;

  return (
    <div className="weather-container">
      <div className="first-row">
        <div className="icon-item">
          <img
            className="weather-icon-image"
            src={iconUrl}
            alt="Weather Icon"
          />
        </div>
        <div className="switch-item">
          <Switch switchClicked={toggleTempUnit}></Switch>
        </div>
      </div>
      <div className="temp">
        {`${temp.toFixed(2)}`} <span className="small-unit">{tempUnit}</span>
      </div>
    </div>
  );
};

export default WeatherDisplay;

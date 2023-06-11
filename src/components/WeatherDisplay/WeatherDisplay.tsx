import React, { useState } from "react";
import "./WeatherDisplay.css";
import Switch from "./Switch/Switch";
import { getTemperature, getTemperatureUnit } from "../../components/utils";

interface Props {
  kelvinTemp: number;
  icon: string;
  isCelsius: boolean;
  setCelsius: (value: boolean) => void;
}

const WeatherDisplay: React.FC<Props> = ({
  kelvinTemp,
  icon,
  isCelsius,
  setCelsius,
}) => {
  const toggleTempUnit = () => {
    setCelsius(!isCelsius);
  };

  const temp: number = getTemperature(isCelsius, kelvinTemp);
  const tempUnit: string = getTemperatureUnit(isCelsius);
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

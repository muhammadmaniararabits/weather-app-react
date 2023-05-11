import React, { useState } from "react";
import "./WeatherDisplay.css";
interface Props {
  kelvinTemp: number;
}

const WeatherDisplay: React.FC<Props> = ({ kelvinTemp }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const toggleTempUnit = () => {
    setIsCelsius(!isCelsius);
  };

  const temp = isCelsius
    ? kelvinTemp - 273.15
    : (kelvinTemp - 273.15) * (9 / 5) + 32;
  const tempUnit = isCelsius ? "°C" : "°F";

  return (
    <div className="weather-container">
      <i className="wi wi-lightning"></i>
      <div className="temp">{`${temp.toFixed(2)} ${tempUnit}`}</div>
      <button
        className={`toggle-switch ${isCelsius ? "on" : ""}`}
        onClick={() => setIsCelsius(!isCelsius)}
      >
        <span className="sr-only">{isCelsius ? "F" : "C"}</span>
      </button>
    </div>
  );
};

export default WeatherDisplay;

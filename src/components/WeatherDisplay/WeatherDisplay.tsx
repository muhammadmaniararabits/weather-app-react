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
  const iconUrl = `http://openweathermap.org/img/wn/${icon}.png`;

  return (
    <div className="weather-container">
      <div
        style={{
          display: "flex",
          flex: 1,
          height: 100,
          borderColor: "black",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            flex: 1,
            flexDirection: "row",
            marginTop: 10,
          }}
        >
          <img src={iconUrl} alt="Weather Icon" />
        </div>
        {
          <div
            style={{
              display: "flex",
              flex: 1,
              justifyContent: "flex-end",
              alignItems: "end",
              flexDirection: "row",

              marginRight: 100,
            }}
          >
            <Switch switchClicked={toggleTempUnit}></Switch>
          </div>
        }
      </div>
      <div className="temp">{`${temp.toFixed(2)} ${tempUnit}`}</div>
    </div>
  );
};

export default WeatherDisplay;

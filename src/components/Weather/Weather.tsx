import React, { useState, useEffect } from "react";
import moment from "moment";
import WeatherDisplay from "../WeatherDisplay/WeatherDisplay";
import DateTimeComponent from "../DateTimeComponent/DateTimeComponent";
import WeatherInfo from "../WeatherInfo/WeatherInfo";

const Weather = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=abu dhabi&appid=76542cea0f0911efea16d4191c2938d0`
      );
      const data = await response.json();
      setWeather(data);
    };

    fetchWeather();
  }, []);

  if (!weather) {
    return <div>Loading weather data...</div>;
  }

  return (
    <div>
      <WeatherDisplay kelvinTemp={283.15} />
      <DateTimeComponent />
      <WeatherInfo
        wind={5}
        humidity={80}
        rain={30}
        windIcon="wi wi-direction-right"
        rainIcon="wi wi-rain"
        humidityIcon="wi wi-humidity"
      ></WeatherInfo>
    </div>
  );
};

export default Weather;

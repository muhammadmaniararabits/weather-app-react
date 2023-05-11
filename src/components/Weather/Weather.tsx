import React, { useState, useEffect } from "react";
import WeatherDisplay from "../WeatherDisplay/WeatherDisplay";
import DateTimeComponent from "../DateTimeComponent/DateTimeComponent";
import WeatherInfo from "../WeatherInfo/WeatherInfo";
import "./Weather.css";
import LocationSearch from "../LocationSearch/LocationSearch";
import ClockComponent from "../ClockComponent/ClockComponent";
import LineWithIcon from "../LineWithIcon/LineWithIcon";
import WeatherDetail from "../WeatherDetail/WeatherDetail";
import { WeatherForecast } from "../WeatherForecast/WeatherForecast";

type Wind = {
  speed: string;
};
type Main = {
  temp: number;
};
type Weather = {
  main: Main;
  wind: Wind;
};

const Weather = () => {
  const [weather, setWeather] = useState<Weather>();

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
    <div className="main-pane">
      <div className="left-pane">
        <WeatherDisplay kelvinTemp={weather.main.temp} />
        <DateTimeComponent />
        <WeatherInfo
          wind={5}
          humidity={80}
          rain={30}
          windIcon="wi wi-direction-right"
          rainIcon="wi wi-rain"
          humidityIcon="wi wi-humidity"
        ></WeatherInfo>
        <WeatherForecast
          forecasts={[
            {
              date: 1683265779,
              icon: "sunny",
              temp: 367,
            },
            {
              date: 1683265779,
              icon: "sunny",
              temp: 367,
            },
          ]}
        />
      </div>
      <div className="right-pane">
        <div className="opaque-side-pane"></div>
        <LocationSearch
          onSearch={(city: string) => {
            console.log(`${city} pressed`);
          }}
        ></LocationSearch>
        <ClockComponent time={1683265779} iconClass={""} />
        <ClockComponent time={1683265779} iconClass={""} />
        <LineWithIcon />
        <WeatherDetail humidity={36} rain={2} airQuality={3} windSpeed={3.8} />
      </div>
    </div>
  );
};

export default Weather;

import React, { useState, useEffect } from "react";
import moment from "moment";
import WeatherDisplay from "../WeatherDisplay/WeatherDisplay";
import DateTimeComponent from "../DateTimeComponent/DateTimeComponent";
import WeatherInfo from "../WeatherInfo/WeatherInfo";
import "./Weather.css";
import LocationSearch from "../LocationSearch/LocationSearch";
import ClockComponent from "../ClockComponent/ClockComponent";
import LineIcon from "../LineWithIcon/LineWithIcon";
import LineWithIcon from "../LineWithIcon/LineWithIcon";
import WeatherDetail from "../WeatherDetail/WeatherDetail";
import { WeatherForecast } from "../WeatherForecast/WeatherForecast";

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
      <div className="side-component-container"></div>
      <LocationSearch
        onSearch={(city: string) => {
          console.log(`${city} pressed`);
        }}
      ></LocationSearch>
      <div>
        <ClockComponent time={1683265779} iconClass={""} />
        <ClockComponent time={1683265779} iconClass={""} />
      </div>
      <LineWithIcon />
      <WeatherDetail humidity={36} rain={2} airQuality={3} windSpeed={3.8} />
    </div>
  );
};

export default Weather;

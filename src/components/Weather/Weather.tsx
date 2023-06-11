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
import moment from "moment";
import useWeatherProvider from "../../components/WeatherProvider";

type Rain = {
  [key: string]: number;
};

type Wind = {
  speed: number;
};
type Main = {
  temp: number;
  humidity: number;
};
type WeatherIcon = {
  icon: string;
};
type WeatherObject = {
  main: Main;
  weather: WeatherIcon[];
  dt: number;
  dt_txt: string;
  visibility: number;
  pop: number;
  wind: Wind;
  rain?: Rain;
};
type Weather = {
  list: WeatherObject[];
};

const Weather = () => {
  const [weather, setWeather] = useState<Weather>();
  const [city, setCity] = useState<string>("Abu Dhabi");
  const [currentCity, setCurrentCity] = useState<string>("Abu Dhabi");
  const key = "76542cea0f0911efea16d4191c2938d0";
  const { isCelsius, setIsCelsius } = useWeatherProvider();

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}`
      );
      const data = await response.json();
      if (data.cod === "404") {
        alert("Please type correct city");
        setCity(currentCity);
        return;
      }
      setCurrentCity(city);
      setWeather(data);
    };

    fetchWeather();
  }, [city]);

  if (!weather) {
    return <div>Loading weather data...</div>;
  }

  var rainValue: number = 0;
  const rain = weather.list[0].rain;
  if (rain) rainValue = Object.values(rain!)[0] ?? undefined;

  const getForecastWeather = () => {
    const originalList = weather.list.map((weatherItem) => {
      return {
        date: weatherItem.dt_txt,
        icon: weatherItem.weather[0].icon,
        temp: weatherItem.main.temp,
        dt: weatherItem.dt,
      };
    });
    // Create a Map of unique dates as keys and objects as values
    const uniqueDatesMap = new Map<string, (typeof originalList)[0]>();

    originalList.forEach((item) => {
      const date = moment.unix(item.dt).format("YYYY-MM-DD");
      if (!uniqueDatesMap.has(date)) {
        uniqueDatesMap.set(date, item);
      }
    });

    // Create a subset list based on unique dates
    const subsetList = Array.from(uniqueDatesMap.values());

    console.log(subsetList);
    return subsetList.slice(1);
  };

  const handleCelsiusChange = (value: boolean) => {
    setIsCelsius(value);
  };

  return (
    <div className="main-pane">
      <div className="left-pane">
        <WeatherDisplay
          kelvinTemp={weather.list[0].main.temp}
          icon={weather.list[0].weather[0].icon}
          isCelsius={isCelsius}
          setCelsius={handleCelsiusChange}
        />
        <DateTimeComponent dateTime={weather.list[0].dt_txt} />
        <WeatherInfo
          wind={weather.list[0].wind.speed}
          humidity={weather.list[0].main.humidity}
          rain={rainValue}
        ></WeatherInfo>
        <WeatherForecast
          isCelsius={isCelsius}
          forecasts={getForecastWeather()}
        />
      </div>
      <div className="right-pane">
        <div className="opaque-side-pane"></div>
        <LocationSearch
          currentCity={city}
          onSearch={(city: string) => {
            setCity(city);
          }}
        ></LocationSearch>
        <div className="clock-box">
          <ClockComponent
            title="Sunrise"
            time="05:35"
            image="sunrise"
          ></ClockComponent>
          <ClockComponent
            title="Sunset"
            time="19:03"
            image="sunset"
          ></ClockComponent>
        </div>
        <LineWithIcon />
        <WeatherDetail
          humidity={weather.list[0].main.humidity}
          rain={weather.list[0].pop}
          visibility={weather.list[0].visibility}
          windSpeed={weather.list[0].wind.speed}
        />
      </div>
    </div>
  );
};

export default Weather;

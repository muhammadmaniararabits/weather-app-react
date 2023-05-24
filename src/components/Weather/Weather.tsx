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
  const key = "76542cea0f0911efea16d4191c2938d0";

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}`
      );
      const data = await response.json();
      if (data.cod === "404") {
        alert("Please type correct city");
      }

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

  return (
    <div className="main-pane">
      <div className="left-pane">
        <WeatherDisplay
          kelvinTemp={weather.list[0].main.temp}
          icon={weather.list[0].weather[0].icon}
        />
        <DateTimeComponent dateTime={weather.list[0].dt_txt} />
        <WeatherInfo
          wind={weather.list[0].wind.speed}
          humidity={weather.list[0].main.humidity}
          rain={rainValue}
        ></WeatherInfo>
        <WeatherForecast
          forecasts={[
            {
              date: weather.list[1].dt_txt,
              icon: weather.list[1].weather[0].icon,
              temp: weather.list[1].main.temp,
            },
            {
              date: weather.list[2].dt_txt,
              icon: weather.list[2].weather[0].icon,
              temp: weather.list[2].main.temp,
            },
            {
              date: weather.list[3].dt_txt,
              icon: weather.list[3].weather[0].icon,
              temp: weather.list[3].main.temp,
            },
            {
              date: weather.list[4].dt_txt,
              icon: weather.list[4].weather[0].icon,
              temp: weather.list[4].main.temp,
            },
          ]}
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
